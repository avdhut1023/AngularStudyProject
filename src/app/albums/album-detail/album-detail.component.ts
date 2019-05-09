import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {

  sub: Subscription;
  albumdetail: any;
  photolist: any;
  constructor(private route: ActivatedRoute, private albumService: AlbumService) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      const id = +params['id']; // (+) converts string 'id' to a number
      this.albumService.getAlbumDetail(id)
        .subscribe((response) => {
          if (response !== undefined && response !== null) {
              this.albumdetail = response;
              this.photolist = this.albumdetail['photos'];
              console.log(this.albumdetail);
                       }
        });
    });
  }

}
