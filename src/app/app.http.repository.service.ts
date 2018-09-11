import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Photos } from './tarjeta/photos.model';
import { AppHttpService } from './app.http.service';


/**
 * Fetch date from server
*/
@Injectable()
export class AppHttpRepositoryService {
  private data = new Subject();
  public data$ = this.data.asObservable();
  private _dataCache: Photos;

  constructor(private dataSource: AppHttpService) {}

  public getPhotos(reload?: boolean) {
    if (!this._dataCache || reload) {
      this.dataSource.getPhotos().subscribe((photos: any) => {
        // do something with posts
        this._dataCache = photos;
        this.data.next(photos);
      });
    } else {
      console.log(this._dataCache[0]);
      this.data.next(this._dataCache);
    }
  }
}
