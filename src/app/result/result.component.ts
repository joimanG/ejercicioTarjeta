import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() likes: number;
  //@Output() darleClick = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

}
