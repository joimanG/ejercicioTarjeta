import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { persona, personas } from './data';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
  // @Input() likes: number;
  // @Input() dislikes: number;
  public likes = 0;
  public dislikes = 0;
  // public totalVotes = 0 ;
  public persona = persona;
  public personas = personas;
  // public result = result;
   ngOnInit() {
   }
}
