import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { BookComponent } from './components/book/book.component';
import { EscapeHtmlPipeComponent } from './escape-html-pipe/escape-html-pipe.component';
import { ClarityModule } from '@clr/angular';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { LatestBooksComponent } from './components/latest-books/latest-books.component';
import { CarouselModule } from 'primeng/carousel';
import { BooksSliderComponent } from './components/books-slider/books-slider.component';
import { BooksShowCageComponent } from './components/books-show-cage/books-show-cage.component';
@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    HeaderComponent,
    BookComponent,
    EscapeHtmlPipeComponent,
    LatestBooksComponent,
    BooksSliderComponent,
    BooksShowCageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ClarityModule,
    NgxChartsModule,
    RatingModule,
    ButtonModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [EscapeHtmlPipeComponent]
})
export class AppModule {}
