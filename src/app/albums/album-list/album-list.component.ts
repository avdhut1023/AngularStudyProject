import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  albumlist: any;
  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    this.albumService.getAlbumList()
      .subscribe((response) => {
        
        this.albumlist = response;
        console.log(this.albumlist);
      });
      console.log('Album Component');
  }

}
