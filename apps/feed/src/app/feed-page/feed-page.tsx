import { Card, Input, Typography, CardContent, Chip } from '@mui/material';
import { useEffect, useState } from 'react';
import { FeedService } from '../api/feed.service';
import styles from './feed-page.module.scss';
const feedService = new FeedService();

/* eslint-disable-next-line */
export interface FeedPageProps {
}



export function FeedPage(props: FeedPageProps) {
  const [page,setPage] = useState(1);
  const [limit,setLimit] = useState(20);
  const [tags,setTags] = useState([]as string[]);
  const [quotes, setQuotes] = useState([]) as [Array<{_id: string, content: string, author: string, tags: string[]}>, React.Dispatch<any>];
  const [searchTerm, setSearchTerm] = useState("")
  let timeout: NodeJS.Timeout;
  const filteredQuotes = quotes.filter(q => q.author.toLowerCase().includes(searchTerm) || q.content.toLowerCase().includes(searchTerm));

  useEffect(() => {
    feedService.getFeed(page, limit, tags).then(res => setQuotes(res.results))
  }, [page, limit, tags])

  const searchWithDebounce = (term: string, debounce: number) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => { setSearchTerm(term.toLowerCase())}, debounce);
  }

  const toggleTag = (tag: string) => {
    if(tags.includes(tag)){
      setTags(prev => prev.filter(t => t !== tag));
    }else{
      setTags(prev => [...prev, tag]);
    }
  }

  return (
    <>
      <Input onKeyUp={e => searchWithDebounce(e.currentTarget.value, 300)} placeholder="Search"/>
      {tags.map(tag => <Chip label={tag} key={tag} onClick={() => toggleTag(tag)} />)}
      {filteredQuotes.map(q => 
      <div className={styles['fact']} key={q._id}>
        <Card sx={{ minWidth: 275 }}>
        <CardContent>
          {q.tags.map(tag => <Chip label={tag} key={tag} onClick={() => toggleTag(tag)} />)}
          <Typography variant="body2">
          <i>"{q.content}"</i>
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {q.author}
          </Typography>
        </CardContent>
      </Card>
      </div>
      )}      
    </>
  );
};


export default FeedPage;
