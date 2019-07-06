import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Book } from '../book.model';
import { getTestBed } from '@angular/core/testing';

@Component({
  selector: 'app-latest-books',
  templateUrl: './latest-books.component.html',
  styleUrls: ['./latest-books.component.css']
})
export class LatestBooksComponent implements OnInit {
  books: Book[] = [];
  constructor(private booksService: BooksService) {}
  today = new Date();
  dd =
    this.today.getDate() <= 9
      ? String(this.today.getDate()).padStart(2, '0')
      : String(this.today.getDate());

  mm = String(this.today.getMonth()).padStart(2, '0');
  yyyy = this.today.getFullYear();
  date = this.yyyy + '-' + this.mm + '-' + this.dd;
  limit = 100;

  ngOnInit() {
    console.log('today', this.today);
    console.log('date', this.date);
    console.log('day', this.dd);
    console.log('', this.dd);
    this.booksService.getLatest(this.date, '2018-06-04', this.limit).subscribe(
      result => {
        this.books = result;
      },
      err => {
        console.log(err);
      }
    );
  }

  getmore(evt) {
    this.limit += 25;
    this.booksService.getLatest(this.date, '2018-06-04', this.limit).subscribe(
      result => {
        this.books = result;
      },
      err => {
        console.log(err);
      }
    );
  }
}
