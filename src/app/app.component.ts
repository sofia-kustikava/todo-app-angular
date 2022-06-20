import {Component, OnInit} from '@angular/core';
import {Todo} from "./model/todo.model";
import {DataService} from "./service/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.todos = this.dataService.getTodos();
  }

  isVisible = false;
  todos: Todo[];

  constructor(private dataService: DataService) {
  }

  updateTodo(todo: Todo, index: number): void {
    this.dataService.updateTodo(index, todo);
  }

  deleteTodo(index: number): void {
    this.dataService.deleteTodo(index);
  }

  public addTodo(todo: Todo): void {
    this.todos.push(todo);
    this.dataService.addTodo(todo);
  }
}
