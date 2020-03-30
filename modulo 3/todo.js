var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function listTodos() {
    listElement.innerHTML = '';

    for (todo of todos){
        var todoElement = document.createElement('li');

        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir')

        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);

        linkElement.setAttribute('onclick', 'removeTodo('+ pos +')');

        linkElement.appendChild(linkText);

        todoElement.appendChild(document.createTextNode(todo))
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

listTodos();

function insertTodo() {
    var todoText = inputElement.value;
    todos.push(todoText);

    inputElement.value = '';
    listTodos();
    saveToStorage();
}

buttonElement.onclick = insertTodo;

function removeTodo(pos){
    todos.splice(pos, 1);

    listTodos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}

function onKeyPress(event) {
    if (event.keyCode == 13) {
        insertTodo()
    }
}

