import { Injectable } from '@angular/core';
import { HttpClientService } from '../core/http-client.service';

@Injectable()
export class PostsService {

  constructor(private httpService: HttpClientService) { 
  }

  public getPostList() {
   return this.httpService.get('posts');
  }

  public getPostDetail(id: any){
    return this.httpService.get('posts/' + id + '?_embed=comments&_expand=user');
  }

}
