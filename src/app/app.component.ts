import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Todo} from "./model/todo.model";
import {DataService} from "./service/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @Output() public showUrgentTodos = new EventEmitter<void>();

  ngOnInit(): void {
    this.todos = this.dataService.getTodos();
  }

  isVisible = false;
  isShowUrgent = false;
  todos: Todo[];

  constructor(private dataService: DataService) {
  }

  updateTodo(todo: Todo, index: number): void {
    this.todos[index] = todo;
    this.dataService.setTodos(this.todos);
  }

  deleteTodo(index: number): void {
    this.todos.splice(index, 1)
    this.dataService.setTodos(this.todos);
  }

  public addTodo(todo: Todo): void {
    this.todos.push(todo);
    this.dataService.addTodo(todo);
  }

  visible(): void {
    this.isVisible=!this.isVisible;
  }

  showUrgent(): void {
    this.isShowUrgent=!this.isShowUrgent;
  }

  public showOnlyUrgent(isUrgent: boolean): void {
    this.showUrgentTodos.emit();
    this.isShowUrgent = isUrgent;
  }

}
