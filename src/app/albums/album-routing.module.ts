import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'albumlist', pathMatch: 'full' },
      { path: 'albumlist', component: AlbumListComponent },
      { path: 'albumdetail/:id', component: AlbumDetailComponent}

    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AlbumRoutingModule { }
