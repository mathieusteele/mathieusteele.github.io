import {deleteTodo, toggleCompletion} from "./local-storage.js";

export const renderOneTodo = (todo) => {
  const listItem = document.createElement("li");

  const label = document.createElement("label");
  label.setAttribute("for", `${todo.id}`);

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", `${todo.id}`);
  checkbox.addEventListener("change", () => {
    toggleCompletion(todo.id);
  });
  if (todo.completed) {
    checkbox.setAttribute("checked", "checked");
  }
  label.appendChild(checkbox);
  const todoContent = document.createTextNode(` ${todo.content}`);
  label.appendChild(todoContent);
  listItem.appendChild(label);

  const button = document.createElement("button");

  button.setAttribute("type", "button");
  button.textContent = "Delete";
  button.addEventListener("click", () => {
    deleteTodo(todo.id);
  });
  listItem.appendChild(button);

  return listItem;
};
