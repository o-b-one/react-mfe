import { Card, Input, Typography, CardContent, Chip } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
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
  const [inprogress, setInprogress] = useState(false);

  let timeout: NodeJS.Timeout;
  const hasNext = useRef(true);

  const filteredQuotes = quotes.filter(q => q.author.toLowerCase().includes(searchTerm) || q.content.toLowerCase().includes(searchTerm));

  useEffect(() => {
    if(page > 1 && !hasNext.current){
      return;
    }
    setInprogress(true);
    feedService.getFeed(page, limit, tags)
      .then(res => {
        hasNext.current = res.results.length > 0;
        return res;
      })
      .then(res => setQuotes((prev: any[]) => page === 1 ? res.results : ([...prev, ...res.results])))
      .finally(() => {
        if(page === 1){
          window.scrollTo(0,0);
        }
        setInprogress(false);
      });
  }, [page, limit, tags])

  useEffect(() => {
    if(inprogress){
      return;
    }
    const onScroll = (e: any) => {
      if (!inprogress && e.target.documentElement.scrollTop /(e.target.documentElement.scrollHeight / 2) > .80){
        setPage(prev => prev + 1)
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [inprogress]);

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
    setPage(1);
  }

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {
      inprogress && page === 1
      ? 'Loading...'
      : (<>
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
      )}
    </>
  );
}


export default FeedPage;
