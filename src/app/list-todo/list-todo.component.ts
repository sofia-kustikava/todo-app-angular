import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../model/todo.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss']
})
export class ListTodoComponent implements OnInit {

  form: FormGroup

  isEdit: boolean = false
  isChanged: boolean = false
  inputText: string = ''
  public color: string = '';

  @Input() todo: Todo

  @Output() todoClicked: EventEmitter<void> = new EventEmitter()
  @Output() deleteClicked: EventEmitter<void> = new EventEmitter()
  @Output() saveClicked: EventEmitter<string> = new EventEmitter()

  constructor() {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      inputText: new FormControl('', [
        Validators.maxLength(50),
        Validators.required]
      )
    })
  }

  onInput() {
    this.inputText=this.todo.content
  }

  onTodoClicked() {
    this.todoClicked.emit()
  }

  onDeleteClicked() {
    this.deleteClicked.emit()
  }

  onSaveClicked(input: string) {
    this.saveClicked.emit(input)
  }
}
