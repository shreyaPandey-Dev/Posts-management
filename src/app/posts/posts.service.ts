import { Injectable } from '@angular/core';
import { Post } from './posts.model';
import { Subject } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: Post[] = [];
private postsUpdated = new Subject<Post[]>();

  constructor() { }

  getPosts(){
    return this.posts;// copied with spread operator
  }

  addPosts(title: string, content: string){
    const post : Post = {
      title: title,
      content: content
    }
    this.posts.push(post)
    this.postsUpdated.next([...this.posts]);
  }

  getPostUpdatedListener(){
    return this.postsUpdated.asObservable();
    
  }
}
