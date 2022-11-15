function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector('[data-start]'),
    btnStop = document.querySelector('[data-stop]');
let interval = null;  

const onBtnStartClick = (e) => {
    interval = setInterval(chengeColor, 1000);
    e.target.disabled = true;
    btnStop.disabled = false;
};

const onBtnStopClick = (e) => {
    clearInterval(interval);
    btnStart.disabled = false;
    e.target.disabled = true;
};

btnStart.addEventListener('click', onBtnStartClick);
btnStop.addEventListener('click', onBtnStopClick);

function chengeColor() {
    document.body.style.backgroundColor = getRandomHexColor();
}
