import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { Router } from '@angular/router';
import { BooksService } from '../services/books.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Book[];
  booksSubscription: Subscription;

  constructor(private booksService: BooksService, private router: Router) {}

  ngOnInit() {
    this.booksSubscription = this.booksService.booksSubject.subscribe(
      (books: Book[]) => {
        this.books = books;
      }
    );
    this.booksService.emitBooks();
  }

  onNewBook() {
    this.router.navigate(['/books', 'new']);
  }

  onDeleteBook(book: Book) {
    this.booksService.removeBook(book);
  }

  onViewBook(id: number) {
    this.router.navigate(['/books', 'view', id]);
  }
  
  ngOnDestroy() {
    this.booksSubscription.unsubscribe();
  }

}
