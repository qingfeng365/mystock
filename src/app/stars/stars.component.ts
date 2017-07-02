import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  @Input()
  rating: number;

  // 三星 [true,true,true,false,false]
  stars: boolean[] = [];


  constructor() { }

  ngOnInit() {
    for (let i = 1; i <= 5; i++) {
      this.stars.push(this.rating >= i);
    }
  }

}
