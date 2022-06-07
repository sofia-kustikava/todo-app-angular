import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddTodoComponent} from "./add-todo/add-todo.component";

const routes: Routes = [
  { path: '', component: AddTodoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
