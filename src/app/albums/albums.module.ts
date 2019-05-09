import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumService } from './album.service';
import { AlbumRoutingModule } from './album-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AlbumRoutingModule
  ],
  providers:[AlbumService],
  declarations: [AlbumListComponent, AlbumDetailComponent]
})
export class AlbumsModule { }
