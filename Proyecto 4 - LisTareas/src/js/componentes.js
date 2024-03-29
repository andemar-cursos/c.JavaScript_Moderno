import { Todo } from "../classes";
import { todoList } from "../index.js"

//Referencias a html
const divTodoList       = document.querySelector('.todo-list');
const txtInput          = document.querySelector('.new-todo');
const btnClearComplete  = document.querySelector('.clear-completed');
const ulFiltros         = document.querySelector('.filters');
const anchorFiltros     = document.querySelectorAll('.filtro');


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

divTodoList.addEventListener('click', (event) => {
    const nombreElemento = event.target.localName; // Input, label, button
    const todoElement    = event.target.parentElement.parentElement;
    const todoId         = todoElement.getAttribute('data-id');

    if(nombreElemento.includes('input')){ //Click en el chek
        todoList.marcarCompletado(todoId);
        //Esto inserta una etiqueta que tacha la tarea en la lista html
        todoElement.classList.toggle('completed');
    
    }else if(nombreElemento.includes('button')){

        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElement);
    }

});

btnClearComplete.addEventListener('click', () => {
    todoList.eliminarCompletados();

    for(let i = divTodoList.children.length-1; i >= 0; i--){

        const elemento = divTodoList.children[i];

        if(elemento.classList.contains('completed')){
            divTodoList.removeChild(elemento);
        }
    }
});


ulFiltros.addEventListener('click', evento => {

    const filtro = evento.target.text;

    if(!filtro) return;
    
    anchorFiltros.forEach(element => {
        element.classList.remove('selected');
    })


    for(const elemento of divTodoList.children){
        
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');
        evento.target.classList.add('selected');


        switch(filtro){

            case 'Pendientes':
                if(completado){
                    elemento.classList.add('hidden');
                }
                break;
            
            case 'Completados':
                if(!completado){
                    elemento.classList.add('hidden');
                } 
        }
    }
});