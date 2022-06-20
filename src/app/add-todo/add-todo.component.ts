import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataService} from "../service/data.service";
import {Todo} from "../model/todo.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  @Output() public submitSend = new EventEmitter<Todo>();

  isUrgent: boolean = false;

  public form: FormGroup;

  todos: Todo[] = this.dataService.getTodos();

  constructor(private dataService: DataService, private fb : FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      content: ['', [
        Validators.maxLength(40),
        Validators.required,
        Validators.nullValidator]
      ],
      isUrgent: [false]
    })
  }

  onFormSubmit(): void {
    this.submitSend.emit(this.form.getRawValue());
    this.form.reset();
  }
}
