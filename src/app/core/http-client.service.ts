import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpClientService {

  public baseApi = 'http://localhost:3004/';
  constructor(private httpService: HttpClient) { }

  get(url) {
    const headers = new HttpHeaders();
    return this.httpService.get(this.baseApi + url, {
        headers: headers
    });
}

post(url, data) {
    const headers = new HttpHeaders();

    return this.httpService.post(this.baseApi + url, data, {
        headers: headers
    });
}

}
