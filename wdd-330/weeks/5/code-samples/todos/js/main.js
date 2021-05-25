"use strict";

class Todo {
  constructor(content) {
    this.id = Date.now();
    this.content = content;
    this.completed = false;
  }
}

function getTodos() {
  return localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
}

function getTodoFilter() {
  return localStorage.getItem("todo-filter")
    ? localStorage.getItem("todo-filter")
    : "all";
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
  renderTodos();
};

const setFilter = (newValue) => {
  localStorage.setItem("todo-filter", newValue);
  renderTodos();
};

const renderOneTodo = (todo) => {
  const listItem = document.createElement("li");

  listItem.innerHTML = `<input type="checkbox" onChange="toggleCompletion(${
    todo.id
  });" ${todo.completed ? "checked" : ""}/> ${
    todo.content
  } <button type="button" onClick="deleteTodo(${
    todo.id
  })">Delete</button> <button type="button" onClick="editTodo(${
    todo.id
  })">Edit</button> `;

  return listItem;
};

const renderTodos = () => {
  let todos = getTodos();
  const filter = getTodoFilter();
  const container = document.getElementById("todos");

  container.innerHTML = "";

  if (filter == "completed") {
    todos = todos.filter((todo) => todo.completed);
    // .map((todo) => {
    //   container.appendChild(renderOneTodo(todo));
    // });
  } else if (filter == "incomplete") {
    todos = todos.filter((todo) => !todo.completed);
    // .map((todo) => {
    //   container.appendChild(renderOneTodo(todo));
    // });
  }

  todos.map((todo) => {
    container.appendChild(renderOneTodo(todo));
  });

  let controls = document.getElementById("controls");

  let allButton = document.createElement("button");
  allButton.innerText = "All";
  allButton.setAttribute("type", "button");
  allButton.onclick = () => setFilter("all");
  if (filter == "all") {
    allButton.setAttribute("disabled", true);
  }

  let incompleteButton = document.createElement("button");
  incompleteButton.innerText = "Incomplete";
  incompleteButton.setAttribute("type", "button");
  incompleteButton.onclick = () => setFilter("incomplete");
  if (filter == "incomplete") {
    incompleteButton.setAttribute("disabled", true);
  }

  let completedButton = document.createElement("button");
  completedButton.innerText = "Completed";
  completedButton.setAttribute("type", "button");
  completedButton.onclick = () => setFilter("completed");
  if (filter == "completed") {
    completedButton.setAttribute("disabled", true);
  }

  controls.innerHTML = "Filters: ";
  controls.appendChild(allButton);
  controls.appendChild(incompleteButton);
  controls.appendChild(completedButton);

  // controls.innerHTML = `<button type="button" onClick="setFilter('all')">All</button> <button type="button" onClick="setFilter('incomplete')">Incomplete</button> <button type="button"  onClick="setFilter('completed')">Completed</button>`;
};

// Initial render on page load
renderTodos();

const newTodoForm = document.getElementById("newTodoForm");

newTodoForm.addEventListener("submit", (event) => {
  const currentTodos = getTodos();

  let newOne = new Todo(document.getElementById("newTodo").value);

  const updatedTodos = [...currentTodos, newOne];

  localStorage.setItem("todos", JSON.stringify(updatedTodos));

  renderTodos();

  newTodoForm.reset();

  event.preventDefault();
});
