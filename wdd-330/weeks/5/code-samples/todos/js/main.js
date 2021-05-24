"use strict";

class Todo {
  constructor(content) {
    this.id = Date.now();
    this.content = content;
    this.completed = false;
  }
}

const currentTodos = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];

function getTodos() {
  return localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
}

const toggleCompletion = (todoId) => {
  const currentTodos = getTodos();

  const todoToChange = currentTodos.filter((todo) => todo.id == todoId)[0];
  todoToChange.completed = !todoToChange.completed;
  localStorage.setItem("todos", JSON.stringify(currentTodos));
};

const editTodo = (todoId) => {
  console.log(`add logic to edit the todo ${todoId} here`);
};

const deleteTodo = (todoId) => {
  const todos = getTodos();

  const todoToRemove = todos.filter((todo) => todo.id == todoId)[0];

  todos.splice(todos.indexOf(todoToRemove), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos(todos);
};

const renderOneTodo = (todo) => {
  const listItem = document.createElement("li");

  listItem.innerHTML = `<input type="checkbox" onChange="toggleCompletion(${
    todo.id
  });" ${todo.completed ? "checked" : ""}/> ${
    todo.content
  } <button type="button" onClick="editTodo(${
    todo.id
  })">Edit</button> <button type="button" onClick="deleteTodo(${
    todo.id
  })">Delete</button>`;

  return listItem;
};

const renderTodos = (todos) => {
  const container = document.getElementById("todos");

  container.innerHTML = "";

  todos.map((todo) => {
    container.appendChild(renderOneTodo(todo));
  });
};

// Initial render on page load
renderTodos(currentTodos);

const newTodoForm = document.getElementById("newTodoForm");

newTodoForm.addEventListener("submit", (event) => {
  const currentTodos = getTodos();

  let newOne = new Todo(document.getElementById("newTodo").value);

  const updatedTodos = [...currentTodos, newOne];

  localStorage.setItem("todos", JSON.stringify(updatedTodos));

  renderTodos(updatedTodos);

  newTodoForm.reset();

  event.preventDefault();
});
