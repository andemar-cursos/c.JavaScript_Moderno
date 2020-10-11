import './styles.css';
import {Todo, TodoList} from './classes';

// Para evitar las lineas de importacion, se centraliza en index.js
// import { Todo } from './classes/todo.class';
// import { TodoList } from './classes/todo-list.class';

const todoList = new TodoList();
const tarea = new Todo('aprender js');
const tarea2 = new Todo('andemar');

todoList.nuevoTodo(tarea);
todoList.nuevoTodo(tarea2);

console.log(todoList);