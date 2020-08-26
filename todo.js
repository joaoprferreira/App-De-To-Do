var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [
    'Fazer café', 

    'Estudar javaScript',
    'acessar a comunidade da Rocketseat'
];

function renderTodos() {
    listElement.innerHTML = '';
    
    for (todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElemenent = document.createElement('a');
        linkElemenent.setAttribute('href', '#');

        var linkText = document.createTextNode('Excluir');

        linkElemenent.appendChild(linkText);
 
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElemenent);
        listElement.appendChild(todoElement)
    }
}

renderTodos();


function addTodos() {
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';

    renderTodos();
}

buttonElement.onclick = addTodos;


function deleteTodo(pos) {
    todo.splice(pos, 1);
    renderTodos();
}