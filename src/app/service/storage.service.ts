import { Injectable } from '@angular/core';
import {Todo} from "../model/todo.model";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  public saveTodos(key: string, todos: Todo[]): void {
    localStorage.setItem(key, JSON.stringify(todos))
  }

  public getAllTodos(key: string): any {
    return JSON.parse(localStorage.getItem(key) || '{}')
  }
}
