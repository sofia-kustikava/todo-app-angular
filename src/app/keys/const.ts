import {Todo} from "../model/todo.model";

export const todoKey = 'todos';

export const defaultTodos: Todo[] = [
  {content: 'Go jumping', completed: false},
  {content: 'Do exercise', completed: false},
  {content: 'Make an app', completed: false},
];
