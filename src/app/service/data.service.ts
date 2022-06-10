import {Injectable} from '@angular/core';
import {Todo} from "../model/todo.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {

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

  constructor() {
  }

  getAllTodos() {
    return this.todos
  }

  updateTodo(index: number, updatedTodo: Todo) {
    console.log('test: ', index, updatedTodo)
    this.todos[index].content = updatedTodo.content;

  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1)
  }
}
