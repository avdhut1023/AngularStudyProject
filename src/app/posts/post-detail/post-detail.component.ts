import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  sub: Subscription;
  postdetail: any;
  comments: any;
  user: any;
  title: string;
  constructor(private router: Router, private route: ActivatedRoute,
            private postService: PostsService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id']; // (+) converts string 'id' to a number
      this.postService.getPostDetail(id)
        .subscribe((response) => {
          if(response!==undefined && response!==null){
              this.postdetail = response;
              this.comments = this.postdetail['comments'];
              this.user = this.postdetail['user'];
              this.title = this.postdetail['title'];
              console.log(this.postdetail);
          }
        });
    });
  }

}
