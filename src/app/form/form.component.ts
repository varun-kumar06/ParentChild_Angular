import { Component } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  author:String;
  name:String;
  price:number;

  book:Book;
  books:Book[]=[];

  submit(){
    this.book=new Book(this.author, this.name, this.price);
    this.books.push(this.book);
  }
}
