const monthEl = document.querySelector('.month');
const dateEl = document.querySelector('.date');
const dateContainerEl = document.querySelector('.dates');

let date = new Date();
let monthInx = date.getMonth();

dateEl.innerText = date.toDateString();

let firstDate = new Date(date.getFullYear(), monthInx, 1).getDay() - 1;
let lastDate = new Date(date.getFullYear(), monthInx + 1, 0).getDate();

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

monthEl.innerText = months[monthInx];

let days = "";

for (let i = firstDate; i > 0; i--) {
    days += `<div class="empty"></div>`;
}
for (let i = 1; i <= lastDate; i++) {
    if (i === date.getDate()) {
        days += `<div class="today">${i}</div>`;
    }else {
        days += `<div>${i}</div>`;
    }
}

dateContainerEl.innerHTML = days;