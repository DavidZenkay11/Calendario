const fecha = new Date();
const renderCalendar = () => {
  fecha.setDate(1);
  const monthDays = document.querySelector(".dias");
  const lastDay = new Date(
    fecha.getFullYear(),
    fecha.getMonth() + 1,
    0
  ).getDate();
  const prevLastDay = new Date(
    fecha.getFullYear(),
    fecha.getMonth(),
    0
  ).getDate();
  const firstDayIndex = fecha.getDay();
  const lastDayIndex = new Date(
    fecha.getFullYear(),
    fecha.getMonth() + 1,
    0
  ).getDay();
  const nextDays = 7 - lastDayIndex - 1;
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  document.querySelector(".fecha h1").innerHTML = months[fecha.getMonth()];
  document.querySelector(".fecha p").innerHTML = new Date().toLocaleDateString('es-ES');
  let days = "";
  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="dias-nm">${prevLastDay - x + 1}</div>`;
  }
  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      fecha.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="hoy">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="dias-post">${j}</div>`;
    monthDays.innerHTML = days;
  }
  if(nextDays > 0) {
        for (let j = 1; j <= nextDays; j++) {
            days += `<div class="dias-post">${j}</div>`;
            monthDays.innerHTML = dias;
        }
    }
    else {
        monthDays.innerHTML = days;
    }
};

document.querySelector(".prev").addEventListener("click", () => {
  fecha.setMonth(fecha.getMonth() - 1);
  renderCalendar();
});
document.querySelector(".next").addEventListener("click", () => {
  fecha.setMonth(fecha.getMonth() + 1);
  renderCalendar();
});
renderCalendar();