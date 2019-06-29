import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Book } from "../book.model";
import { BooksService } from "../books.service";
@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.css"]
})
export class BookComponent implements OnInit {
  error: string;
  id: string;
  book: Book;
  isbn: string;
  editedTitle: string;
  contentString: string;
  ratings: any;
  data: any;
  val: number;
  readonly: boolean;

  constructor(
    private route: ActivatedRoute,
    private bookservice: BooksService
  ) {}

  ngOnInit() {
    this.readonly = true;
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.get("isbn")) {
        this.isbn = paramMap.get("isbn");
        this.bookservice.getBookReview(this.isbn).subscribe(result => {
          console.log(result);
          this.contentString = result.reviews_widget;
        });

        this.bookservice.getBookRating(this.isbn).subscribe(
          ratings => {
            console.log(ratings);
            this.ratings = ratings;
            this.val = ratings[0].average_rating;
          },
          err => {
            console.log(err);
          }
        );
      }
      if (paramMap.get("id")) {
        this.id = paramMap.get("id");
        this.bookservice.getBookById(this.id).subscribe(
          book => {
            console.log(book);
            this.book = book[0];
            this.editedTitle = this.book.title
              .replace(/ /g, "+")
              .replace(/[`~!@#$%^&*()_|\-=?;:'",.<>\{\}\[\]\\\/]/g, "")
              .toLowerCase()
              .substring(0, 15);
            this.bookservice.getQuotesByTitle(this.editedTitle).subscribe(
              result => {
                console.log(this.book.title);
                console.log(this.editedTitle);
                this.data = result.quotes;
              },
              err => {
                console.log(err);
              }
            );
          },
          err => {
            console.log(err);
          }
        );
      }
    });
  }
}
