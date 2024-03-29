import { Component, OnInit } from '@angular/core';
import {Todo} from '../model/Todo';
import {Categories} from '../model/Categories';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  suchinhalt: string;
  private _todo: Todo[] = [];
  private _categories: Categories[] = [];
  newTodo: Todo;
  constructor() {
    this._todo.push(new Todo('Rasen mähen'));
    this._todo.push(new Todo('Bier trinken'));
    this._todo.push(new Todo('Drogen verkaufen'));
    this.newTodo = new Todo('');
    this.suchinhalt = '';
    this._categories.push(new Categories('Arbeit'));
    this._categories.push(new Categories('Sport'));
    this._categories.push(new Categories('Chillen'));
  }

  ngOnInit() {
  }

  toggle(todo: Todo) {
     todo.done = !todo.done;
  }

  save() {
    this._todo.push(this.newTodo);
    this.newTodo = new Todo('');

  }
  delete(todosos: Todo): void {
    this._todo = this._todo.filter(t => t !== todosos);
  }
  get Todos () {
    this.suchinhalt = this.suchinhalt.toLowerCase();
    return this._todo.filter(a => a.label.toLowerCase().includes(this.suchinhalt));
  }

 /* get categories () {
    this._categories = this._categories.toLowerCase();
    return this._categories.filter(a => a.category.toLowerCase().includes(this._categories));
  }
  */
}
