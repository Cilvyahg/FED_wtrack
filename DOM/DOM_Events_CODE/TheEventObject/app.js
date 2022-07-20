document.querySelector('button').addEventListener('click', function (e) {
  console.log(evt); // object constructing -- event object
});

//KEY UP AND KEYDOWN EVENTS

// event object guives you the key events .. especially look at key and code
// handy for example for a game

const input = document.querySelector('input');
input.addEventListener('keydown', function (e) {
  console.log(e.key); // the letter or character and don't care about where on the keyword
  console.log(e.code); // location/positions of character of the keyboard -- this can differ if the language of keyboard changes
});

// input.addEventListener('keyup', function () {
//   console.log("KEY UP")
// })

window.addEventListener('keydown', function (e) {
  switch (e.code) {
    case 'ArrowUp':
      console.log('UP');
      break;

    case 'ArrowDown':
      console.log('Down');
      break;

    case 'ArrowLeft':
      console.log('Left');
      break;

    case 'ArrowRight':
      console.log('Right');
      break;

    default:
      console.log('IGNORED');
      break;
  }
});




// document.querySelector('button').addEventListener('click', function (evt) {
//     console.log(evt)
// })

// // const input = document.querySelector('input');
// // input.addEventListener('keydown', function (e) {
// //     console.log(e.key)
// //     console.log(e.code)
// // })
// // input.addEventListener('keyup', function () {
// //     console.log("KEYUP")
// // })

// window.addEventListener('keydown', function (e) {
//     switch (e.code) {
//         case 'ArrowUp':
//             console.log("UP!");
//             break;
//         case 'ArrowDown':
//             console.log("DOWN!");
//             break;
//         case 'ArrowLeft':
//             console.log("LEFT!");
//             break;
//         case 'ArrowRight':
//             console.log("RIGHT!");
//             break
//         default:
//             console.log("IGNORED!")
//     }
// })
