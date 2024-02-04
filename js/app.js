const addButton = document.querySelector("#add-button");
const taskInput = document.getElementById("task-input");
const dateInput = document.getElementById("date-input");
const alertMessage = document.getElementById("alert-message");
const todosBody = document.querySelector("tbody");

const todos = JSON.parse(localStorage.getItem("todos")) || [];

// save todo local storage
const saveToLocalStorage = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

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

const displayTodos = () => {
  todosBody.innerHTML = "";
  if (!todos.length) {
    //todos.length === 0 (falsy)
    todosBody.innerHTML = "<tr><td colspan='4'>No task found !</td></tr>"; //colspan baraye in estefade kardim ke begim be andaze 4 ta soton ja begire(colspan yek attribute ast)
    return;
  }

  todos.forEach((todo) => {
    todosBody.innerHTML += `
        <tr>
           <td>${todo.task}</td>
           <td>${todo.date || "No date"}</td>
           <td>${todo.completed ? "Completed" : "Pending"}</td>
           <td>
               <button>Edit</button>
               <button>Do</button>
               <button>Delete</button>
           </td>
        </tr>
    `;
  });
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
    saveToLocalStorage();
    displayTodos();
    taskInput.value = "";
    dateInput.value = "";
    showAlert("Task added successfully.", "success");
  } else {
    showAlert("Please enter a task !", "error");
  }
};

addButton.addEventListener("click", addHandler);
