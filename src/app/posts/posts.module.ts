import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostsService } from './posts.service';

@NgModule({
  imports: [
    CommonModule,
    PostsRoutingModule
  ],
  providers: [PostsService],
  declarations: [PostListComponent, PostDetailComponent]
})
export class PostsModule { }
