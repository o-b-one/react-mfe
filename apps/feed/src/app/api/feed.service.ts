export class FeedService{
    private readonly BASE_URL = 'https://api.quotable.io/quotes';
    private ongoing: Promise<any> | null = null;
    getFeed(page: number = 1, limit: number = 20, tags: string[]){
        if(!this.ongoing){
            let url = `${this.BASE_URL}?page=${page}&limit=${limit}`;
            if(tags.length > 0){
                url+='&tags='+tags.join(',');
            }
            this.ongoing = fetch(url)
            .then(r => r.json())
            .finally(() => this.ongoing = null);
        }
        return this.ongoing;
    }
}