import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Book } from '../book.model';
import { NewBook, LibgenBook } from '../newBook.model';

@Component({
  selector: 'app-books-show-cage',
  templateUrl: './books-show-cage.component.html',
  styleUrls: ['./books-show-cage.component.css']
})
export class BooksShowCageComponent implements OnInit {
  constructor(private booksService: BooksService) {}
  books: LibgenBook[] = [];
  tolstoyBooks: LibgenBook[] = [];
  ngOnInit() {
    this.booksService.getBooks('philosophy', 1).subscribe(
      data => {
        this.books = data;
        console.log('book show cage', data);
      },
      err => {
        console.log(err);
      }
    );
    this.booksService.getBooks('leo tolstoy', 1).subscribe(
      data => {
        this.tolstoyBooks = data;
        console.log('book show cage', data);
      },
      err => {
        console.log(err);
      }
    );
  }
}
