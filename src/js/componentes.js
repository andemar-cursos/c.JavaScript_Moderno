import { Todo } from "../classes";
import { todoList } from "../index.js"

//Referencias a html
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');


export const crearTodoHtml = (todo) => {
    const div = document.createElement('div');
    const htmlTodo =
    `
    <li class="${(todo.completado) ? 'completed' : ''}" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${(todo.completado) ? 'checked' : ''}>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>
    `;

    
    div.innerHTML = htmlTodo;
    // Se obtiene el primer elemento (li) que es la tarea
    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;
}


txtInput.addEventListener('keyup', (event) => {
    
    if(event.keyCode === 13 && txtInput.value.length > 0){
        const nuevoTodo = new Todo(txtInput.value);
        todoList.nuevoTodo(nuevoTodo);
        crearTodoHtml(nuevoTodo);
        txtInput.value = "";
    }
});