import './styles.css';
import {Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

// Como solo el foreach retorna 1 parametro y
// crearTodoHtml se le envia 1 solo parametro
// se puede ignorar en codigo este envio
todoList.todos.forEach(crearTodoHtml);