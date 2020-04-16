import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from '../posts.model'
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredValue= ''
  enteredContent = '';
  enteredTitle = '';
  // @Output() postCreated = new EventEmitter<Post>();
  constructor(public postservice: PostsService) { }

  ngOnInit(): void {
    
  }

  onAddPost(form: NgForm){
    if(form.invalid){
      return;
    }
    console.log(form)
  
    // const post : Post = {
    //   title : form.value.title,
    //   content : form.value.content
    // }
    // this.postCreated.emit(post);
    this.postservice.addPosts(form.value.title,form.value.content);
  }
}
