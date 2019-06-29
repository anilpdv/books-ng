import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BookComponent } from './components/book/book.component';
import { LatestBooksComponent } from './components/latest-books/latest-books.component';

const routes: Routes = [
  {
    path: '',
    component: LatestBooksComponent
  },
  {
    path: 'book/:isbn/:id',
    component: BookComponent
  },
  {
    path: 'books',
    component: BooksListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
