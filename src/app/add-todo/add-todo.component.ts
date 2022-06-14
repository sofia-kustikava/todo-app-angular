import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataService} from "../service/data.service";
import {Todo} from "../model/todo.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  isVisible = false
  isUrgent: boolean = false

  form: FormGroup

  inputTodo: string = ''

  todos: Todo[]

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

    // this.form = new FormGroup({
    //   addText: new FormControl('', [
    //     Validators.maxLength(40),
    //     Validators.required]
    //   ),
    //   isUrgent: new FormControl(null),
    //   date: new FormControl(Date.now())
    // })
  }

  onFormSubmit() {
    // let todo = this.form.getRawValue()
    // this.addTodo.emit(todo);
    // this.form.reset()
    this.todos.push({
      content: this.inputTodo,
      completed: false
    })
    // this.inputTodo = ''
  }

  toggleCompleted(todo: Todo) {
    todo.completed = !todo.completed;
  }

  saveTodo(input: string, i: number): void {
    this.todos[i].content = input
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo)
    this.dataService.deleteTodo(index)
  }

}
