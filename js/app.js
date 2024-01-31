const addButton = document.querySelector("#add-button");
const taskInput = document.getElementById("task-input");
const dateInput = document.getElementById("date-input");

const todos = [];
// getting todo values
const addHandler = () => {
  const task = taskInput.value;
  const date = dateInput.value;
  const todo = {
    task: task,
    date: date,
    completed: false,
  };
  if (task) {
    todos.push(todo);
    taskInput.value=("");
    dateInput.value=("");
    console.log(todos);
  } else {
    alert("warning")
  }
};
addButton.addEventListener("click", addHandler);

