import { Injectable } from '@angular/core';
import {Todo} from "../model/todo.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: Todo[] = [
    new Todo('Need to leans the basics'),
    new Todo('After learning the basics')
  ]

  constructor() { }

  getAllTodos() {
    return this.todos
  }

  updateTodo(index: number, updatedTodo : Todo) {
    console.log('test: ', index, updatedTodo)
    this.todos[index].content = updatedTodo.content;

  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1)
  }
}
