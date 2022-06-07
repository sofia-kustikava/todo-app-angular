import {Component, OnInit} from '@angular/core';
import {DataService} from "../service/data.service";
import {Todo} from "../model/todo.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  form: FormGroup

  inputTodo = ''

  todos: Todo[]
  showValidationErrors: boolean

  content: string = '';

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos()
    this.form = new FormGroup({
      addText: new FormControl('', [
        Validators.maxLength(40),
        Validators.required]
      )
    })
  }

  onFormSubmit() {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    })
  }

  toggleCompleted(todo: Todo) {
    todo.completed = !todo.completed;
  }

  saveTodo(input: string, i: number): void {
    console.log(input)
    console.log(i)
    this.todos[i].content = input
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo)
    this.dataService.deleteTodo(index)
  }

}
