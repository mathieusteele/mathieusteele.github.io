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
    : "All";
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

  listItem.innerHTML = `<label for="${todo.id}"><input type="checkbox" id="${
    todo.id
  }" onChange="toggleCompletion(${todo.id});" ${
    todo.completed ? "checked" : ""
  }/> ${todo.content} </label><button type="button" onClick="deleteTodo(${
    todo.id
  })">Delete</button>`;
  // <button type="button" onClick="editTodo(${
  //   todo.id
  // })">Edit</button> `;

  return listItem;
};

const renderTodos = () => {
  let todos = getTodos();
  const filter = getTodoFilter();
  const container = document.getElementById("todos");

  container.innerHTML = "";

  if (filter == "Completed") {
    todos = todos.filter((todo) => todo.completed);
  } else if (filter == "Incomplete") {
    todos = todos.filter((todo) => !todo.completed);
  }

  todos.map((todo) => {
    container.appendChild(renderOneTodo(todo));
  });

  let controls = document.getElementById("controls");

  controls.innerHTML = `${todos.length} task${
    todos.length === 1 ? "" : "s"
  } left. Filters: `;

  const filterTypes = ["All", "Incomplete", "Completed"];

  filterTypes.map((type) => {
    let newButton = document.createElement("button");
    newButton.innerText = type;
    newButton.setAttribute("type", "button");
    newButton.onclick = () => setFilter(type);
    if (filter === type) {
      newButton.setAttribute("disabled", true);
    }
    controls.appendChild(newButton);
  });
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
