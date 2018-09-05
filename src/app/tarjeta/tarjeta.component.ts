import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { persona, personas } from './data';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  constructor(private router: Router, private activated: ActivatedRoute) { }

  public likes = 0;
  public dislikes = 0;
  public path = '/card-detail';
  // public totalVotes = 0 ;
  public persona = persona;
  public personas = personas;
  // public result = result;
  ngOnInit() {
    // console.log(this.router);
    // console.log(this.activated);
    this.activated.params.subscribe((info) => {
      // console.log("Params: " + info);
      console.log(`Params: ${info.id}`);
    });
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
