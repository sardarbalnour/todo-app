const addButton = document.querySelector("#add-button");
const taskInput = document.getElementById("task-input");
const dateInput = document.getElementById("date-input");
const alertMessage = document.getElementById("alert-message");

const todos = [];

// create id for every todo
const generateId = () => {
  return Math.round(
    Math.random() * Math.random() * Math.pow(10, 15)
  ).toString();
};

// show alert to user
const showAlert = (message, type) => {
  alertMessage.innerHTML = "";
  const alert = document.createElement("p");
  alert.innerText = message;
  alert.classList.add("alert");
  alert.classList.add(`alert-${type}`);
  alertMessage.append(alert);

  setTimeout(() => {
    alert.style.display = "none";
  }, 2345);
};

// getting todo values
const addHandler = () => {
  const task = taskInput.value;
  const date = dateInput.value;
  const todo = {
    id: generateId(),
    completed: false,
    task,
    date,
  };
  if (task) {
    todos.push(todo);
    taskInput.value = "";
    dateInput.value = "";
    console.log(todos);
    showAlert("Task added successfully.", "success");
  } else {
    showAlert("Please enter a task !", "error");
  }
};
addButton.addEventListener("click", addHandler);