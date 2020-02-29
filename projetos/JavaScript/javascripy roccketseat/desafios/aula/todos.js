var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [
    'fazer cafe',
    'estudar JavaScript',
    'Acessar a comunidade da Rocketseat'
];
function renderTodos() {
    listElement.innerHTML = '';
    for (todo of todos) {
        var pos = todos.indexOf(todo);
    
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        var linkelement = document.createElement('a');
        var linktext = document.createTextNode('Excluir');
        linkelement.setAttribute('onclick','deleteTodo('+pos+')');
        linkelement.setAttribute('href', '#')
        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
        todoElement.appendChild(linkelement);
        linkelement.appendChild(linktext);
        

    }
}
function addTodo() {
    var todoText = inputElement.nodeValue;

    todos.push(todoText);
    inputElement = '';
    renderTodos();
    sabetoStorage();

}
function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    sabetoStorage();
}
function sabetoStorage(){
    localStorage = setItem('list_todos',JSON.stringify(todos));
}
renderTodos();