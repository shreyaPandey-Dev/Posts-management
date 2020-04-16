import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../posts.model'
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  // @Input()
   posts : Post[] = [];
  private postsSub: Subscription;

  constructor(public postservice : PostsService) {

   }

  ngOnInit(): void {
    this.posts = this.postservice.getPosts();
    console.log( this.posts)

  this.postsSub =  this.postservice.getPostUpdatedListener().subscribe(
      (posts : Post[]) => {
        this.posts = posts;
      }
    );
  }

  ngOnDestroy(){
    this.postsSub.unsubscribe()
  }
}
