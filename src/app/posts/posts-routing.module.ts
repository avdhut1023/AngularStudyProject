import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'postlist', pathMatch: 'full' },
      { path: 'postlist', component: PostListComponent },
      { path: 'postdetail/:id', component: PostDetailComponent}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
