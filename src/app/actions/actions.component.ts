import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {
  @Output() darleClick = new EventEmitter<boolean>();
  @Output() valueChange = new EventEmitter();
  public likes = 0;
  public dislikes = 0;
  public totalVotes = 0 ;
  counter = 0;
    valueChanged(buttonClicked) { // You can give any function name
        this.counter = this.counter + 1;
        console.log(buttonClicked);
        this.valueChange.emit(this.counter);
    }
  public elClick (buttonClicked) {
    this.darleClick.emit(true);
    console.log(buttonClicked);
    if (buttonClicked === 'LIKE' ) {
      this.onLike ();
    } else {
       this.onDislike();
    }
  }

  public onLike (): void {
    console.log('onLike');
    this.totalVotes += 1;
    this.likes += 1;
    if (this.dislikes > 0) {
      this.dislikes -= 1;
    }
  }
  public onDislike(): void {
    this.totalVotes += 1;
    this.dislikes += 1;
    if (this.likes > 0) {
       this.likes -= 1;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
