import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book.model';
import {
  trigger,
  transition,
  animate,
  style,
  stagger,
  query,
  useAnimation,
  state
} from '@angular/animations';
import {
  bounce,
  fadeInLeft,
  slideInLeft,
  flipInX,
  zoomInUp,
  zoomIn,
  flipInY,
  tada,
  jello,
  flipOutY
} from 'ng-animate';
import { fade } from '@clr/angular';

@Component({
  selector: 'app-books-slider',
  templateUrl: './books-slider.component.html',
  styleUrls: ['./books-slider.component.css'],
  animations: [
    trigger('imageSlider', [
      transition(
        '* => *',
        useAnimation(fadeInLeft, { params: { timing: 1.4, delay: 0 } })
      )
    ]),
    trigger('BookFlip', [
      state(
        'hover',
        style({
          opacity: 1
        })
      ),
      state(
        'leave',
        style({
          opacity: 1
        })
      ),
      transition('hover =>  leave', [
        useAnimation(jello, { params: { timing: 2, delay: 0 } })
      ]),
      transition('leave =>  hover', [
        useAnimation(flipInY, { params: { timing: 2, delay: 0 } })
      ])
    ])
  ]
})
export class BooksSliderComponent implements OnInit {
  start = 0;
  end = 5;
  isHover = false;
  id = '';

  changeBooks: Book[] = [];
  @Input() books: Book[];
  constructor() {}

  ngOnInit() {
    console.log('books slider', this.books);
  }

  handlePrev(e) {
    if (this.start === 0) {
      this.start = 0;
      this.end = 5;
    } else {
      this.start -= 5;
      this.end -= 5;
      console.log(this.start);
      console.log(this.end);
    }
  }
  handleNext(e) {
    if (this.end >= 25) {
      this.start = 20;
      this.end = 25;
    } else {
      this.start += 5;
      this.end += 5;
      console.log(this.start);
      console.log(this.end);
    }
  }
  toggle(e) {
    this.id = e;
    this.isHover = !this.isHover;
  }
}
