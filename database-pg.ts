import { randomUUID} from 'node:crypto'
import {sql} from './db'

// sql`CREATE TABLE videos(id TEXT PRIMARY KEY, title TEXT NOT NULL, description TEXT, duration INTEGER);
// `.then(()=>{
//     console.log("table created")
// })
export class DatabasePg {
   async list(search: string){
        let videos

        if(search){
            videos = await sql`select * from videos where to_tsvector(videos::text) @@ websearch_to_tsquery(${'*:'+search+':*'});`
        }else{
            videos = await sql`select * from videos`
        }
        return videos
    }
    async create(video: { title: string; description: string; duration: number }){
        const {title, description, duration} = video
        const videoId = randomUUID()
        await sql`INSERT INTO videos (id, title, description, duration) VALUES (${videoId},${title},${description},${duration}); `.then(()=>{
            return 'Video inserted'
        })
    }
}