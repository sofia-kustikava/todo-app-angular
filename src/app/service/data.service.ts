import {Injectable, OnInit} from '@angular/core';
import {Todo} from "../model/todo.model";
import {StorageService} from "./storage.service";
import {defaultTodos, todoKey} from "../keys/const";

@Injectable({
  providedIn: 'root'
})
export class DataService{

  // public todos: Todo[];
  //
  // constructor(private storageService: StorageService) {
  //   this.todos = storageService.getAllTodos(todoKey) || defaultTodos
  // }
  //
  // public addTodo(todo: Todo): void {
  //   this.todos.push(todo);
  //   this.saveInStorage();
  // }
  //
  // getAllTodos() {
  //   return this.todos
  // }
  //
  // updateTodo(index: number, updatedTodo: Todo) {
  //   this.todos[index].content = updatedTodo.content;
  //   this.saveInStorage();
  // }
  //
  // deleteTodo(index: number) {
  //   this.todos.splice(index, 1)
  //   this.saveInStorage();
  // }
  //
  // saveInStorage() {
  //   this.storageService.saveTodos(todoKey, this.todos)
  // }

  todos: Todo[] = [
    {
      content: 'Need to leans the basics',
      completed: false
    },
    {
      content: 'After learning the basics',
      completed: false
    }
  ]

  constructor() { }

  getAllTodos() {
    return this.todos
  }

  updateTodo(index: number, updatedTodo : Todo) {
    this.todos[index].content = updatedTodo.content;
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1)
  }
}
