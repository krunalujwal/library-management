import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookViewComponent } from './book-view/book-view.component';
import { BookBorrowComponent } from './book-borrow/book-borrow.component';
import { BookReturnComponent } from './book-return/book-return.component';


@NgModule({
  declarations: [BookCreateComponent, BookListComponent, BookViewComponent, BookBorrowComponent, BookReturnComponent],
  imports: [
    CommonModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
