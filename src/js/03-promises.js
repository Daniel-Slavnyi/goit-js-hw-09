const formEl = document.querySelector('.form');
const objData = {};

const onFormElInput = (e) => {
  const { name, value } = e.target;

  objData[name] = value;
};


formEl.addEventListener('input', onFormElInput);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

