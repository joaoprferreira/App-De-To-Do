var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse( localStorage.getItem('list_todos')) || [];

function renderTodos() {
    listElement.innerHTML = '';
    
    for (todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElemenent = document.createElement('a');
        linkElemenent.setAttribute('href', '#');

        var pos = todos.indexOf(todo)
        linkElemenent.setAttribute('onclick', 'deleteTodo(' + pos +')')

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
    saveToStorage();
}

buttonElement.onclick = addTodos;


function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos))
}