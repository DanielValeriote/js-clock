const addClassActive = (id) => document.getElementById(id).classList.add("active");
const removeClassActive = (id) => document.getElementById(id).classList.remove("active");

const setDay = (d) => {
  document.querySelectorAll(".day").forEach(day => day.classList.remove("active"));
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

const day = new Date().getDay();
setDay(day);

const setClock = (h, m, s) => {
  const clock = document.getElementById("clock");
  let treatedH = h < 10 ? "0" + h : h;
  let treatedM = m < 10 ? "0" + m : m;
  let treatedS = s < 10 ? "0" + s : s;

  if (hourFormat === "24h") {
    clock.innerText = `${treatedH}:${treatedM}:${treatedS}`;
    } else {
      clock.innerText = convertToTwelveHours(`${treatedH}:${treatedM}:${treatedS}`);
    }
    if(h === 23 && m === 59 && s >= 59) {
      setTimeout(()=> {
        setDay(new Date().getDay())
      }, 2000)
    }
};

const updateClock = () => {
  const d = new Date();
  const hour = d.getHours();
  const min = d.getMinutes();
  const sec = d.getSeconds();
  setClock(hour, min, sec);
};

const convertToTwelveHours = (time) => {
  time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

  if (time.length > 1) {
    time = time.slice (1);
    time[5] = +time[0] < 12 ? ' AM' : ' PM';
    time[0] = +time[0] % 12 || 12;
  }
  return time.join ('');
}

const setTwelve = () => {
  hourFormat = "12h";
  addClassActive("12h");
  removeClassActive("24h");
}

const setTwentyFour = () => {
  hourFormat = "24h";
  addClassActive("24h");
  removeClassActive("12h");
}

let hourFormat = "24h";
addClassActive("24h");
removeClassActive("12h");
setInterval(updateClock, 250);