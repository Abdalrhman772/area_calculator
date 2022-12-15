let timeNow = document.querySelector("h1");
let selects = document.querySelectorAll("select");
let alarmSound = new Audio("./assets/ringtone.mp3");
let setButton = document.querySelector("#set-button");
let clearButton = document.querySelector("#clear-button");
let inputsContainer = document.querySelector(".inputs-container");

let alarm;
let alarmSet;

//format options inside select "dropdown menu"
//format hours section
for (let i = 12; i > 0; i--) {
  //01  02  03 etc..
  i = i < 10 ? `0${i}` : i;
  let option = `<option value="${i}">${i}</option>`;
  selects[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

//format minutes & seconds section
for (let i = 59; i >= 0; i--) {
  i = i < 10 ? `0${i}` : i;
  let option = `<option value="${i}">${i}</option>`;
  selects[1].firstElementChild.insertAdjacentHTML("afterend", option);
  selects[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

setInterval(() => {
  let dateObj = new Date();
  let hour = dateObj.getHours();
  let minute = dateObj.getMinutes();
  let second = dateObj.getSeconds();

  //default time format is AM
  timeFormat = "AM";

  if (hour >= 12) {
    hour -= 12;
    timeFormat = "PM";
  }

  //handle timeObj hours as 12 hours format
  hour = hour == 0 ? (hour = 12) : hour;

  //adding "0" before < 10 numbers
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  timeNow.innerHTML = `${hour}:${minute}:${second} <span style="color: skyBlue;">${timeFormat}</span>`;

  if (alarm === `${hour}:${minute}:${second} ${timeFormat}`) {
    alarmSound.play();
    alarmSound.loop = true;
  }
});

console.log(selects[0][0].value);

function stop() {
  alarm = "";
  alarmSound.pause();
  inputsContainer.classList.remove("disable");
  selects[0].value = selects[0][0].value;
  selects[1].value = selects[1][0].value;
  selects[2].value = selects[2][0].value;
  selects[3].value = selects[3][0].value;
}

function setAlarm() {
  if (alarmSet) {
    stop();
    alert("success");
    return (alarmSet = false);
  }

  let alarmTime = `${selects[0].value}:${selects[1].value}:${selects[2].value} ${selects[3].value}`;
  if (
    alarmTime.includes("HOURS") ||
    alarmTime.includes("MINUTES") ||
    alarmTime.includes("SECONDS") ||
    alarmTime.includes("AM/PM")
  ) {
    return alert("Enter a valid time to set the alarm");
  }
  alarm = alarmTime;
  alarmSet = true;
  inputsContainer.classList.add("disable");
}

setButton.addEventListener("click", setAlarm);
clearButton.addEventListener("click", stop);
