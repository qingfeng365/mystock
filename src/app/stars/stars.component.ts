import {
  Component, OnInit, Input, Output, EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit,
  OnChanges {


  @Input()
  private rating = 0;
  @Output()
  private ratingChange: EventEmitter<number> = new EventEmitter();
  @Input()
  private readonly = true;

  stars: boolean[] = [];

  constructor() { }

  ngOnInit() {
    // console.log('ngOnInit:')
    // for (let i = 1; i <= 5; i++) {
    //   this.stars.push(this.rating >= i);
    // }
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ngOnChanges:')
    // console.log(changes);

    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(this.rating >= i);
    }
  }
  clickStar(index: number) {
    if (!this.readonly) {
      if (this.rating === (index + 1)) {
        this.ratingChange.emit(index);
      } else {
        this.ratingChange.emit(index + 1);
      }
    }
  }

}