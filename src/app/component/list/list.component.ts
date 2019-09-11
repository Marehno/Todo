import { Component, OnInit } from '@angular/core';
import {Todo} from '../model/Todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  todo: Todo[] = [];
  newTodo: Todo;
  constructor() {
    this.todo.push(new Todo('Rasen mähen'));
    this.todo.push(new Todo('Bier trinken'));
    this.todo.push(new Todo('Drogen verkaufen'));
    this.newTodo = new Todo('');
  }

  ngOnInit() {
  }

  toggle(todo: Todo) {
     todo.done = !todo.done;
  }

  save(todo: Todo) {
this.todo.push(this.newTodo);
this.newTodo = new Todo('');

  }
}
