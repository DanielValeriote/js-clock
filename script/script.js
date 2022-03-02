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


setInterval(updateClock, 1000)