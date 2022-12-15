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

let isPassword = document.querySelector("#checkbox");
let passwordField = document.querySelector("#password");

isPassword.onclick = function () {
  if (passwordField.type === "password") {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
};

let inputField = document.getElementsByClassName("input");
for (let i = 0; i < inputField.length; i++) {
  inputField[i].style.backgroundColor = "#f3f3f3";
  inputField[i].style.width = "100%";
  inputField[i].style.border = "0";
  inputField[i].style.padding = "15px";
  inputField[i].style.marginBottom = "15px";
  inputField[i].style.fontSize = "15px";
  inputField[i].style.boxSizing = "border-box";
}

let mySubmitButton = document.querySelector("#submit");
mySubmitButton.style.backgroundColor = "#4CAF55";
mySubmitButton.style.color = "white";
mySubmitButton.style.width = "100%";
mySubmitButton.style.padding = "15px";
mySubmitButton.style.border = "0";
mySubmitButton.style.cursor = "pointer";

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

let passRegex = "(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}";
document.forms[0].onsubmit = function () {
  let message = "";

  const successElement = document.getElementById("p3");
  const failElement = document.getElementById("p2");
  if (user.userName.value === "admin") {
    var lowerCaseLetters = /[a-z]/g;
    if (!password.value.match(lowerCaseLetters)) {
      message = "password must have a lowercase letter";
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if (!password.value.match(upperCaseLetters)) {
      message += " password must have an uppercase letter";
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if (!password.value.match(numbers)) {
      message += " password must have numbers";
    }

    // Validate length
    if (password.value.length < 8) {
      message = " password must be 8 or more characters";
    }

    if (message != "") {
      if (successElement != null) {
        successElement.remove();
      }
      if (failElement != null) {
        failElement.remove();
      }

      msg.innerHTML += `
      <p id ="p3" style="color:red; font-size: 20px;">${message}</p>`;
      user.userName.value = "";
      user.password.value = "";
    } else {
      if (successElement != null) {
        successElement.remove();
      }
      if (failElement != null) {
        failElement.remove();
      }
      msg.innerHTML += `
      <p id="p2" style="color:green; font-size: 20px;">Success</p>`;
      user.userName.value = "";
      user.password.value = "";
    }
  } else {
    if (successElement != null) {
      successElement.remove();
    }
    if (failElement != null) {
      failElement.remove();
    }
    msg.innerHTML += `
      <p id ="p3" style="color:red; font-size: 20px;">wrong username</p>`;

    user.userName.value = "";
    user.password.value = "";
  }
};
