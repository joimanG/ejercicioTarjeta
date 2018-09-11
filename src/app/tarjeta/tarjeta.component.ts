import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { persona, personas } from './data';
import { Photos } from './photos.model';
import { Router, ActivatedRoute } from '@angular/router';
import { AppHttpRepositoryService } from '../app.http.repository.service';
import { PhotosComponent } from '../photos/photos.component';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  constructor(private router: Router,
              private activated: ActivatedRoute,
              private repository: AppHttpRepositoryService) { }

  public likes = 0;
  public dislikes = 0;
  public path = '/card-detail';
  // public photosLocal: Photos = {
  //   albumId,
  //   id,
  //   title,
  //   url,
  //   thumbnailUrl
  // };
  public photosLocal;
  // public totalVotes = 0 ;
  public persona = persona;
  public personas = personas;
  get photos() {
    return this.repository.data$;
  }
  // public result = result;
  ngOnInit() {
    this.activated.params.subscribe((info) => {
      // console.log("Params: " + info);
      console.log(`Params: ${info.id}`);
    });
    this.photos.subscribe((varPhotos) => {
      //console.log(photos.title);
      this.photosLocal = varPhotos;
      // if (photos !== 'undefined') {
      //   this.photosLocal['albumId'] = photos.albumId;
      //   this.photosLocal['id'] = photos.id;
      //   this.photosLocal['title'] = photos.title;
      //   this.photosLocal['url'] = photos.url;
      //   this.photosLocal['thumbnailUrl'] = photos.thumbnailUrl;
      // }
    });
    this.repository.getPhotos();
  }
   public getPath(value) {
    // return `${this.path}/${value}`;
    return `/card-details/${value}`;
  }
  public navigate(param) {
    console.log(param);
    const url = this.getPath(param);
    this.router.navigate([url]);
  }
}
