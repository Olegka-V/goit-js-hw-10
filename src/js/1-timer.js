import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

const inputDate = document.querySelector("#datetime-picker");
const buttonStart = document.querySelector("[data-start]");
const dateDay = document.querySelector("[data-days]");
const dateHour = document.querySelector("[data-hours]");
const dateMinutes = document.querySelector("[data-minutes]");
const dateSeconds = document.querySelector("[data-seconds]");

buttonStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      if (selectedDates[0].getTime() < Date.now()) {
          iziToast.warning({ message: 'Please choose a date in the future'});
    }
  },
};
// formula done seconds, minutes, hours
const formatTime = milliseconds => {
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
    const hours = Math.floor((milliseconds / 1000 / 60 / 60) % 24);
    const days = Math.floor(((milliseconds / 1000 / 60 / 60) % 24) % 7);

    return [
        days.toString().padStart(2, "0"),
        hours.toString().padStart(2, "0"),
        minutes.toString().padStart(2, "0"),
        seconds.toString().padStart(2, "0")
    ];
}

const fp = flatpickr(inputDate, options);
let time = null;
let intervalId = null;


inputDate.addEventListener("input", () => { 

    let dateNow = new Date(inputDate.value);
    if (Date.now() < dateNow) {
        buttonStart.disabled = false;
        buttonStart.addEventListener("click", () => { 
        intervalId = setInterval(() => {
            const currentDate = Date.now();
            
            const dateTimer = dateNow - currentDate; 
            time = formatTime(dateTimer);
            dateDay.textContent = time[0];
            dateHour.textContent = time[1];
            dateMinutes.textContent = time[2];
            dateSeconds.textContent = time[3];
                if (dateTimer < 1000) {
                    clearInterval(intervalId);
                    buttonStart.disabled = true;
                }
            }, 1000);
        });
    } 
});


