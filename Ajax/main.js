const log = console.log;
('use strict');

// log('I happen first');

// setTimeout(function () {
//   log(' I happen third');
// }, 3000);

// log('I happen second');

const btn = document.querySelector('button');

setTimeout(function () {
  btn.style.transform = `translateX(100px)`;
  setTimeout(() => {
    btn.style.transform = 'translateX(200px)';
  }, 2000);
}, 1000);
