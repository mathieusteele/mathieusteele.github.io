import {getTodos} from "./local-storage.js";
import {renderTodos} from "./render-todo-list.js";

class Todo {
  constructor(content) {
    this.id = Date.now();
    this.content = content;
    this.completed = false;
  }
}

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
