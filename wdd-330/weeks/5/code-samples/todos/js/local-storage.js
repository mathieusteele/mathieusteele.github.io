import {renderTodos} from "./render-todo-list.js";

export function getTodos() {
  return localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
}

export const toggleCompletion = (todoId) => {
  const currentTodos = getTodos();

  const todoToChange = currentTodos.filter((todo) => todo.id == todoId)[0];
  todoToChange.completed = !todoToChange.completed;
  localStorage.setItem("todos", JSON.stringify(currentTodos));
};

export const deleteTodo = (todoId) => {
  const todos = getTodos();

  const todoToRemove = todos.filter((todo) => todo.id == todoId)[0];

  todos.splice(todos.indexOf(todoToRemove), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
};

export function getTodoFilter() {
  return localStorage.getItem("todo-filter")
    ? localStorage.getItem("todo-filter")
    : "All";
}

export const setTodoFilter = (newValue) => {
  localStorage.setItem("todo-filter", newValue);
  renderTodos();
};
