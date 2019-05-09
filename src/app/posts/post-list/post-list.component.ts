import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  postlist: any;
  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.postService.getPostList()
    .subscribe((response)=> {
      this.postlist = response;
    });

  }

}
