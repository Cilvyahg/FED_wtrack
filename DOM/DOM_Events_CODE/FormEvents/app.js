const form = document.querySelector('#form');
const input = document.querySelector('#input');
const h2 = document.queryCommandValue('h2');

form.addEventListener('submit', function (e) {
  e.preventDefault();  // prevents it from going to the /dogs and stays on the same page instead
  const dogName = input.value;
  const list = document.createElement('UL');
  form.insertAdjacentElement('afterend', list);
  const newLi = document.createElement('LI');
  newLi.innerText = dogName;
  list.append(newLi);
  input.value = " "; // resetting the input so it will be empty again after the submit.
});






// const tweetForm = document.querySelector('#tweetForm');
// const tweetsContainer = document.querySelector('#tweets');
// tweetForm.addEventListener('submit', function (e) {
//     e.preventDefault();

//     // const usernameInput = document.querySelectorAll('input')[0];
//     // const tweetInput = document.querySelectorAll('input')[1];
//     const usernameInput = tweetForm.elements.username;
//     const tweetInput = tweetForm.elements.tweet;
//     addTweet(usernameInput.value, tweetInput.value)
//     usernameInput.value = '';
//     tweetInput.value = '';
// });

// const addTweet = (username, tweet) => {
//     const newTweet = document.createElement('li');
//     const bTag = document.createElement('b');
//     bTag.append(username)
//     newTweet.append(bTag);
//     newTweet.append(`- ${tweet}`)
//     tweetsContainer.append(newTweet);
// }
