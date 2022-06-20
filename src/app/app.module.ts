import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AddTodoComponent} from './add-todo/add-todo.component';
import {ListTodoComponent} from './list-todo/list-todo.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ColorDirective} from './diretive/color.directive';
import {ShowDirective} from './diretive/show.directive';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    ListTodoComponent,
    ColorDirective,
    ShowDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
