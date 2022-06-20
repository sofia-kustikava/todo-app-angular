import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {Todo} from "../model/todo.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss']
})
export class ListTodoComponent implements OnChanges {

  form: FormGroup;

  isEdit: boolean = false;
  isChanged: boolean = false;
  content: string = '';
  public color: string = '';

  @Input() todo: Todo;
  @Output() deleteClicked: EventEmitter<void> = new EventEmitter();
  @Output() saveClicked: EventEmitter<Todo> = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      content: ['', [
        Validators.maxLength(40),
        Validators.required,
        Validators.nullValidator]
      ],
      isUrgent: [null]
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    const todo = changes['todo'].currentValue;
    if (todo) {
      this.form.setValue({
        content: todo.content,
        isUrgent: todo.isUrgent
      })
    }
  }

  onDeleteClicked(): void {
    this.deleteClicked.emit();
  }

  onSaveClicked(): void {
    this.saveClicked.emit(this.form.getRawValue());
    this.toggleTodoEdit();
  }

  toggleTodoEdit(): void {
    this.isEdit = !this.isEdit;
  }
}
