var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [
    'Fazer café',
    'Estudar javascript!',
    'Assistir o Gaules jogando Motorsport'
];

function listTodos() {
    listElement.innerHTML = '';

    for (todo of todos){
        var todoElement = document.createElement('li');

        todoElement.appendChild(document.createTextNode(todo))
        listElement.appendChild(todoElement);
    }
}

listTodos();

function insertTodo() {
    var todoText = inputElement.value;
    todos.push(todoText);

    inputElement.value = '';
    listTodos();
}

buttonElement.onclick = insertTodo;
