let mainContainer = document.querySelector(".container");
let todoForm = document.querySelector(".todo-form");
let taskInput = document.querySelector(".task-input");
let addButton = document.querySelector("#new");
let tasksContainer = document.querySelector(".tasks-container");

mainContainer.style.cssText = `
  display:flex;
  flex-direction: column;
  align-content:center;
  width: 500px;
  margin: 20px auto;  heigh : 500px ;
  border: solid 1px grey;
  border-radius: 5px;
  background: #F5F5F5;
  `;

document.body.style.cssText = `
  font-family: Arial, Helvetica, sans-serif;
`;
todoForm.style.cssText = `
 margin: 50px 0px; padding: 25px 30px;`;

taskInput.style.cssText = `
 width: 250px; padding: 12px; border-radius: 5px; border: solid lightgrey; margin: 0px 20px`;

addButton.style.cssText = `
  background-color: #337AB7;
  color: white;
  padding: 12px;
  border:0px;
  border-radius: 5px;
  width: 60px; `;

tasksContainer.style.cssText = `padding 20px;
  background: white;
  margin:50px;
  border-radius: 3px; 
  `;

let tasksList = [];

if (localStorage.getItem("tasks")) {
  tasksList = JSON.parse(localStorage.getItem("tasks"));
}
getFromLocalStorage();

addButton.onclick = function (e) {
  if (taskInput.value !== "") {
    addTaskToList(taskInput.value);
    taskInput.value = "";
  }
};
let tasks = document.querySelectorAll(".delete-button");
console.log(tasks);
for (let i = 0; i < tasks.length; i++) {
  tasks[i].onclick = function () {
    this.parentNode.remove();
    console.log(this);
    deleteFromLocalStorage(this.parentNode.getAttribute("data-id"));
  };
}

function addTaskToList(value) {
  const todoObject = {
    id: Date.now(),
    name: value,
  };
  tasksList.push(todoObject);
  console.log(tasksList);
  addTasksToForm(tasksList);
  addToLocalStorage(tasksList);
}

function addTasksToForm(tasks) {
  tasksContainer.innerHTML = "";
  //adding every task
  tasks.forEach((element) => {
    //create task div
    tasksContainer.innerHTML += `
      <div class="task-div" data-id="${element.id}" style = "border: solid 1px lightgrey; padding: 12px; display: flex; justify-content: space-between;">
      <span class="del" style="font-size: 21px;">${element.name}</span>
    <button type="button" class="delete-button" style = " background-color: red;
    color: white;
    padding: 8px;
    border:0px;
    border-radius: 5px;
    width: 60px;">Delete</button>
    </div>
    `;
  });
}

function addToLocalStorage(listOfTasks) {
  window.localStorage.setItem("tasks", JSON.stringify(listOfTasks));
}

function getFromLocalStorage() {
  let savedTasks = window.localStorage.getItem("tasks");
  if (savedTasks) {
    let retrievedTasks = JSON.parse(savedTasks);
    addTasksToForm(retrievedTasks);
  }
}

function deleteFromLocalStorage(taskId) {
  //retrieve all tasks at the tasks list except the task wiz this id
  tasksList = tasksList.filter((element) => element.id != taskId);
  addToLocalStorage(tasksList); //update storage after delete
}
