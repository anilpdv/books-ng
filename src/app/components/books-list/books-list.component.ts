import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Book } from '../book.model';
import { FormService } from '../form.service';
import { NewBook, NewBookData, LibgenBook } from '../newBook.model';
@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  error: string;
  query: string;
  page = 1;
  temporaryQuery: string;
  books: LibgenBook[] = [];
  showButton = false;
  constructor(
    private booksService: BooksService,
    private formService: FormService
  ) {}

  ngOnInit() {
    this.error = '';
    this.formService.currentFormQuery.subscribe(result => {
      console.log(result);
      this.query = result;
      this.searchBooks(result);
    });
  }
  searchBooks(value) {
    this.showButton = false;
    this.error = '';
    this.query = this.query.split(' ').join('+');
    this.books = [];
    this.booksService.getBooks(this.query, this.page).subscribe(
      result => {
        if (result.length < 2) {
          this.error = 'search not found';
        }
        console.log(this.error);
        console.log(result);
        this.books = result;
        this.showButton = true;
      },
      err => {
        console.log(err);
      }
    );
    this.temporaryQuery = this.query;
    this.query = '';
  }

  loadmore(e) {
    this.page++;
    this.booksService.getBooks(this.temporaryQuery, this.page).subscribe(
      (result: LibgenBook[]) => {
        console.log(this.page);
        console.log(this.query);
        console.log(result);
        this.books.push(...result);
      },
      err => {
        console.log(err);
      }
    );
  }
}
