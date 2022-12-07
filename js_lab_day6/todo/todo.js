let mainContainer = document.querySelector(".container");
mainContainer.style.cssText = `
  display:flex;
  flex-direction: column;
  align-content:center;
  max-width:600px;
  heigh : 500px ;
  border: solid 1px grey;
  border-radius: 5px;
  background: #F5F5F5;
  `;

let todoForm = document.querySelector(".todo-form");
todoForm.style.cssText = `
 margin: 50px 0px; padding: 25px 30px;`;

let taskInput = document.querySelector(".task-input");
taskInput.style.cssText = `
 width: 250px; padding: 12px; border-radius: 5px; border: solid lightgrey; margin: 0px 20px`;

let addButton = document.querySelector("#new");
addButton.style.cssText = `
  background-color: #337AB7;
  color: white;
  padding: 12px;
  border:0px;
  border-radius: 5px;
  width: 60px; `;

let tasksContainer = document.querySelector(".tasks-container");
tasksContainer.style.cssText = `padding 20px;
  background: white;
  margin:50px;
  border-radius: 3px; 
  `;

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
});

document.querySelector("#new").onclick = function () {
  if (taskInput.value.length > 0) {
    tasksContainer.innerHTML += ` 
    <div style = "border: solid 1px lightgrey; padding: 12px; display: flex; justify-content: space-between;">
    <span style="font-size: 21px;">${taskInput.value}</span>
    <button type="button" class="delete-button" style = " background-color: red;
    color: white;
    padding: 8px;
    border:0px;
    border-radius: 5px;
    width: 60px;">Delete</button>
    </div>
    `;

    taskInput.value = "";

    let tasks = document.querySelectorAll(".delete-button");
    console.log(tasks);
    for (let i = 0; i < tasks.length; i++) {
      tasks[i].onclick = function () {
        this.parentNode.remove();
        console.log(this);
      };
    }
  }
};
