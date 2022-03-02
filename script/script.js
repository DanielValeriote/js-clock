const setDay = (d) => {
  switch (d) {
    case 0:
      document.getElementById("sunday").classList.add("active")
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
      document.getElementById("thursday").classList.add("active")
      break;
    case 5:
      document.getElementById("friday").classList.add("active")
      break;
    case 6:
      document.getElementById("saturday").classList.add("active")
      break;
    default:
      alert("Error, day of the week could not be obtained")
  }
}

const setClock = (h, m, s) => {
  const clock = document.getElementById("clock");
  clock.innerText = `${h < 10 ? "0" + h : h}:${m < 10 ? "0" + m : m}:${s < 10 ? "0" + s : s}`;
}

const updateClock = () => {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  setClock(hour, min, sec);
}

const day = new Date().getDay();

setDay(day)

setInterval(updateClock, 1000)