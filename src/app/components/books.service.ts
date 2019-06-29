import { Injectable } from "@angular/core";
import { Book } from "./book.model";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BooksService {
  constructor(private http: HttpClient) {}
  private BaseUrl = "http://localhost:3000";
  private subUrlBooks = "/api/books";
  private subUrlBook = "/api/book";

  private books: Book[];
  private bookUpdate = new Subject<Book[]>();

  getBooks(query: string, page: number) {
    return this.http.get<Book[]>(
      `${this.BaseUrl}${this.subUrlBooks}/search?q=${query}&page=${page}`
    );
  }

  getLatest(from: string, to: string) {
    return this.http.get<Book[]>(
      `${this.BaseUrl}${this.subUrlBooks}/latest?from=${from}&to=${to}`
    );
  }

  getBookReview(isbn: string) {
    return this.http.get<{ reviews_widget: string }>(
      `${this.BaseUrl}${this.subUrlBook}/review/${isbn}`
    );
  }

  getBookRating(isbn: string) {
    return this.http.get(`${this.BaseUrl}${this.subUrlBook}/rating/${isbn}`);
  }

  getBookById(id: string) {
    return this.http.get<Book[]>(`${this.BaseUrl}${this.subUrlBook}/${id}`);
  }

  downloadBook(md5: string, title: string) {
    const splitTitle = title.split(" ").join("-");
    return this.http.get(
      `${this.BaseUrl}${this.subUrlBook}/${splitTitle}?md5=${md5}`
    );
  }

  getQuotesByTitle(title: string) {
    return this.http.get<any>(`http://www.quotesapi.ml/search?q=${title}`);
  }
}
