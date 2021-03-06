import { Injectable } from '@angular/core';
import { HttpClientService } from '../core/http-client.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AlbumService {

  constructor(private httpService: HttpClientService, private http: HttpClient) { 
    

  }

  public getAlbumList() {
    return this.httpService.get('albums');
   }

   public getAlbumDetail(id: any) {
     //return this.httpService.get('photos/' + id + '?_expand=album');
     return this.httpService.get('albums/' + id + '?_embed=photos');
   }

}
