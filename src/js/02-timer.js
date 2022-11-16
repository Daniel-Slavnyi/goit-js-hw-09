'use strict';

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
  inputEl: document.querySelector('#datetime-picker'),
  btnStart: document.querySelector('[data-start]'),
  dataDays: document.querySelectorAll('span.value')
};


refs.btnStart.disabled = true;
let deadLineTime = null;
let intervelId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    }

    refs.btnStart.disabled = false;
    deadLineTime = selectedDates[0].getTime();
  },
};

flatpickr(refs.inputEl, options);

const onBtnStartClick = () => {
  refs.btnStart.disabled = true;
  refs.inputEl.disabled = true;
  
  intervelId = setInterval(() => {
    const delta = deadLineTime - Date.now();
    const time = convertMs(delta);

    if (delta < 1000) {
      clearInterval(intervelId);
      return;
    }

    Object.entries(time).forEach(([name, value], idx) => {
      refs.dataDays[idx].textContent = pad(value);
    });
  }, 1000);
};

refs.btnStart.addEventListener('click', onBtnStartClick);

function pad(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}






