import {Todo} from "../model/todo.model";

export const todoKey = 'todos';

export const defaultTodos: Todo[] = [
  {content: 'Go jumping', completed: false, isUrgent: true},
  {content: 'Do exercise', completed: false, isUrgent: false},
  {content: 'Make an app', completed: false, isUrgent: true},
  {content: 'Fuuuuck', completed: false, isUrgent: false}
];
