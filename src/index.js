import './styles.css';
import {Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';

// Para evitar las lineas de importacion, se centraliza en index.js
// import { Todo } from './classes/todo.class';
// import { TodoList } from './classes/todo-list.class';

const todoList = new TodoList();
const tarea = new Todo('aprender js');
// tarea.completado = true;

todoList.nuevoTodo(tarea);

console.log(todoList);

crearTodoHtml(tarea);