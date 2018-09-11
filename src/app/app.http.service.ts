import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * Fetch date from server
*/
@Injectable()
export class AppHttpService {

  constructor(private http: HttpClient) {}

  public getPhotos() {
    return this.http
      .get('https://jsonplaceholder.typicode.com/photos');
  }
}
