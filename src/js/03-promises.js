'use strict';

import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
 
  return new Promise((resolve, reject) => {
    setInterval(() => {
      if (shouldResolve) {
        resolve({
          position,
          delay
        });
      }

      reject({
        position,
        delay
      });
    }, delay);
  });
}

const onFormElSubmit = (e) => {
  e.preventDefault();
  const { delay, step, amount } = e.target.elements;

  let delayEl = Number(delay.value);
  let stepEl = Number(step.value);
  let amountEl = Number(amount.value);

  for (let i = 1; i <= amountEl; i++) {
    createPromise(i, delayEl).then(resolve => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${resolve.position} in ${resolve.delay}ms`);
    }).catch(reject => {
      Notiflix.Notify.failure(`❌ Rejected promise ${reject.position} in ${reject.delay}ms`);
    });
    delayEl += stepEl;
  }
};

formEl.addEventListener('submit', onFormElSubmit);


//   for (let i = 1; i <= amount; i++) {
//   createPromise(i, delay).then(resolve => {
//     console.log(resolve);
//   }).catch(reject => {
//     console.log(reject);
//   });
//   delay += step;
// }



