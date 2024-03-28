const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const filterOption = document.querySelector(".filter-todo");
const todoList = document.querySelector(".todo-list");

//Function to save the task in my local storage
function savelocalTodos(todo){
    let todos;
    if (localStorage.getItem("todos") === null){ //=== - strict equality operator
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
} //that is a middleware to save to localstorage

//Function to add new task
function addTodo(e){ //e is standard for 'event'
    //prevent form submission
    e.preventDefault();

    //create a new todo div
}
