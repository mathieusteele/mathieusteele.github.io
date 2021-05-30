import {renderOneTodo} from "./render-todo.js";
import {getTodos, getTodoFilter, setTodoFilter} from "./local-storage.js";

export const renderTodos = () => {
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
    newButton.onclick = () => setTodoFilter(type);
    if (filter === type) {
      newButton.setAttribute("disabled", true);
    }
    controls.appendChild(newButton);
  });
};
