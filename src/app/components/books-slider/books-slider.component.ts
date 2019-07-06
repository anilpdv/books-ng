import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book.model';

@Component({
  selector: 'app-books-slider',
  templateUrl: './books-slider.component.html',
  styleUrls: ['./books-slider.component.css']
})
export class BooksSliderComponent implements OnInit {
  start = 0;
  end = 4;

  changeBooks: Book[] = [];
  @Input() books: Book[];
  constructor() {}

  ngOnInit() {
    console.log('books slider', this.books);
  }

  handlePrev(e) {
    if (this.start === 0) {
      this.start = 0;
      this.end = 4;
    } else {
      this.start -= 4;
      this.end -= 4;
    }
  }
  handleNext(e) {
    if (this.end >= 26) {
      this.start = 24;
      this.end = 27;
    } else {
      this.start += 4;
      this.end += 4;
      console.log(this.start);
      console.log(this.end);
    }
  }
}
