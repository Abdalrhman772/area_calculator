document.body.style.backgroundColor = "#76b852";

let myForm = document.getElementById("container");
myForm.style.backgroundColor = "white";
myForm.style.maxWidth = "365px";
myForm.style.padding = "50px";
myForm.style.margin = "0 auto 50%";
myForm.style.textAlign = "center";
myForm.style.boxShadow = "0 3px 4px 0";
// myForm.style.display = "flex";

let forma = document.getElementsByTagName("form")[0];
// my.style.justifyContent = "center";
// my.style.alignItems = "center";

let myInputFieldStyle = document.getElementsByClassName("input");
for (let i = 0; i < myInputFieldStyle.length; i++) {
  myInputFieldStyle[i].style.backgroundColor = "#f3f3f3";
  myInputFieldStyle[i].style.width = "100%";
  myInputFieldStyle[i].style.border = "0";
  myInputFieldStyle[i].style.padding = "15px";
  myInputFieldStyle[i].style.marginBottom = "15px";
  myInputFieldStyle[i].style.fontSize = "15px";
  myInputFieldStyle[i].style.boxSizing = "border-box";
}

let mySubmitButton = document.querySelector("#submit");
mySubmitButton.style.backgroundColor = "#4CAF55";
mySubmitButton.style.color = "white";
mySubmitButton.style.width = "100%";
mySubmitButton.style.padding = "15px";
mySubmitButton.style.border = "0";

let registrationMsg = document.getElementById("p1");
registrationMsg.style.color = "gray";

let createAccountMsg = document.getElementById("a1");
createAccountMsg.style.textDecoration = "none";
createAccountMsg.style.color = "#4CAF55";

// let successMsg = document.createElement("p");
// let msg = document.createTextNode("success");
// successMsg.appendChild(msg);
let userName = document.querySelector("[name='username']");
let password = document.querySelector("[name='password']");

user = {
  userName: userName,
  password: password,
};

let msg = document.querySelector(".msg");

forma.addEventListener("submit", function (e) {
  e.preventDefault();
});
document.forms[0].onsubmit = function () {
  if (user.userName.value === "admin" && user.password.value === "123") {
    msg.innerHTML += `
    <p id="p2" style="color:green; font-size: 20px;">success</p>`;
    user.userName.value = "";
    user.password.value = "";
    const element = document.getElementById("p3");
    element.remove();
  } else {
    const element = document.getElementById("p2");
    element.remove();
    msg.innerHTML += `
    <p id ="p3" style="color:red; font-size: 20px;">Not registered, check the username or password</p>`;
    user.userName.value = "";
    user.password.value = "";
  }
};
