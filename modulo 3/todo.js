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

        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir')

        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);

        linkElement.setAttribute('onclick', 'removeTodo('+ pos+')');

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
}

function removeTodo(pos){
    todos.splice(pos, 1);

    listTodos();
}

buttonElement.onclick = insertTodo;
