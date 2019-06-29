import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Book } from '../book.model';

@Component({
  selector: 'app-latest-books',
  templateUrl: './latest-books.component.html',
  styleUrls: ['./latest-books.component.css']
})
export class LatestBooksComponent implements OnInit {
  books: Book[] = [];
  constructor(private booksService: BooksService) {}

  ngOnInit() {
    this.booksService.getLatest('2018-09-02', '2018-09-04').subscribe(
      result => {
        console.log(result);
        this.books = result;
      },
      err => {
        console.log(err);
      }
    );
  }
}
