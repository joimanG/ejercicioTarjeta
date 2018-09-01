import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { persona } from './data';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
  public likes = 0;
  public dislikes = 0;
  public totalVotes = 0 ;
  public persona = persona;
  //public result = result;
  ngOnInit() {
  }

  public onLike (): void {
    //this.darleClick.emit(true);
    this.totalVotes += 1;
    this.likes += 1;
    if (this.dislikes > 0) {
      this.dislikes -= 1;
    }
  }

  public onDislike(): void {
    this.totalVotes += 1;
     this.dislikes += 1;
     if (this.likes > 0) { this.likes -= 1; }
     }
}
