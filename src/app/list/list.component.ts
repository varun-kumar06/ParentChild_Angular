import { Component, Input } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
@Input("booksInput")
books:Book[];
recieveBooks(booksIn:Book[]){
  this.books=booksIn;
}


}
