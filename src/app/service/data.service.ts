import {Injectable} from '@angular/core';
import {Todo} from "../model/todo.model";
import {todoKey} from "../keys/const";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  updateTodo(index: number, updatedTodo: Todo): void {
    const todos = this.getTodos();
    todos[index] = updatedTodo;
    this.setTodos(todos);
  }

  deleteTodo(index: number) : void {
    const todos = this.getTodos().splice(index, 1);
    this.setTodos(todos);
  }

  addTodo(todo: Todo) : void {
    const todos = this.getTodos();
    todos.push(todo);
    this.setTodos(todos);
  }

  getTodos() : Todo[] {
    return JSON.parse(localStorage.getItem(todoKey));
  }

  setTodos(todos: Todo[]) : void {
    localStorage.setItem(todoKey, JSON.stringify(todos));
  }
}
