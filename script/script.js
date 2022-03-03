const day = new Date().getDay();
setDay(day);

let hourFormat = "24h";
if (hourFormat == "24h") {
  addClassActive("24h");
  removeClassActive("12h");
} else {
  addClassActive("12h");
  removeClassActive("24h");
}

function addClassActive(id) {
  document.getElementById(id).classList.add("active");
}

function removeClassActive(id) {
  document.getElementById(id).classList.remove("active");
}

const setDay = (d) => {
  switch (d) {
    case 0:
      document.getElementById("sunday").classList.add("active");
      break;
    case 1:
      document.getElementById("monday").classList.add("active");
      break;
    case 2:
      document.getElementById("tuesday").classList.add("active");
      break;
    case 3:
      document.getElementById("wednesday").classList.add("active");
      break;
    case 4:
      document.getElementById("thursday").classList.add("active");
      break;
    case 5:
      document.getElementById("friday").classList.add("active");
      break;
    case 6:
      document.getElementById("saturday").classList.add("active");
      break;
    default:
      alert("Error, day of the week could not be obtained");
  }
};

const setClock = (h, m, s) => {
  const clock = document.getElementById("clock");
  let treatedM = m < 10 ? "0" + m : m;
  let treatedS = s < 10 ? "0" + s : s;

  if (hourFormat === "24h") {
    clock.innerText = `${h < 10 ? "0" + h : h}:${treatedM}:${
      s < 10 ? "0" + s : s
    }`;
  } else {
    let newHour = h;
    if (h > 12) {
      newHour = h - 12;
      newHour = newHour < 10 ? "0" + newHour : newHour;
    }
    clock.innerText = `${newHour}:${treatedM}:${treatedS} PM`;
  }
};

const updateClock = () => {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  setClock(hour, min, sec);
};

setInterval(updateClock, 1000);

function setTwelve() {
  hourFormat = "12h";
  addClassActive("12h");
  removeClassActive("24h");
}

function setTwentyFour() {
  hourFormat = "24h";
  addClassActive("24h");
  removeClassActive("12h");
}