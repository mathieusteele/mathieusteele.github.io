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

const renderTodos = (todos) => {
  const container = document.getElementById("todos");

  container.innerHTML = "";

  todos.map((todo) => {
    const listItem = document.createElement("li");

    listItem.innerHTML = `<input type="checkbox" /> ${todo.content}`;
    container.appendChild(listItem);
  });
};

renderTodos(currentTodos);

const newTodoForm = document.getElementById("newTodoForm");

newTodoForm.addEventListener("submit", (event) => {
  // Read To Dos from LocalStorage
  const currentTodos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];

  // Create a new To Do
  let newOne = new Todo(document.getElementById("newTodo").value);

  // Add todo to array of todos
  const updatedTodos = [...currentTodos, newOne];

  // Save To Dos array to LocalStorage
  localStorage.setItem("todos", JSON.stringify(updatedTodos));

  // Update To Do List
  renderTodos(updatedTodos);

  // Reset Form
  newTodoForm.reset();

  event.preventDefault();
});
