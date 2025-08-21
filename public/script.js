function format(n, digits = 2) {
  return n.toString().padStart(digits, "0");
}

function updateTimer() {
  const now = new Date();

  // Ano, mês e dia
  document.getElementById("year").textContent = now.getFullYear();
  document.getElementById("month").textContent = format(now.getMonth() + 1);
  document.getElementById("day").textContent = format(now.getDate());

  // Hora, minutos, segundos e milissegundos
  document.getElementById("hours").textContent = format(now.getHours());
  document.getElementById("minutes").textContent = format(now.getMinutes());
  document.getElementById("seconds").textContent = format(now.getSeconds());
  document.getElementById("milliseconds").textContent = format(now.getMilliseconds(), 3);
}

setInterval(updateTimer, 10);
// File: public/script.js


