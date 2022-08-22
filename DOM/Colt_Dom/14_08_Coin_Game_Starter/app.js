// eslint-disable-next-line no-unused-vars
function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

const coin = document.querySelector('#coin');

const moveCoin = function () {
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);

  coin.style.top = `${y}px`;
  coin.style.left = `${x}px`;
};

moveCoin();

const avatar = document.querySelector('#player');
console.log(avatar);

window.addEventListener('keyup', function (e) {
  console.log(e.key);
  console.log(e);

  if (e.key === 'ArrowDown' || e.key === 'Down') {
    const currentTop = extractPosition(avatar.style.top);
    avatar.style.top = `${currentTop + 50}px`;
  } else if (e.key === 'ArrowUp' || e.key === 'Up') {
    const currentTop = extractPosition(avatar.style.top);
    avatar.style.top = `${currentTop - 50}px`;
  } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
    const currentLeft = extractPosition(avatar.style.left);
    avatar.style.left = `${currentLeft - 50}px`;
    avatar.style.transform = 'scale(-1,1)'; // x-axis negative flips the image
  } else if (e.key === 'ArrowRight' || e.key === 'Right') {
    const currentRight = extractPosition(avatar.style.left);
    avatar.style.left = `${currentRight + 50}px`;
    avatar.style.transform = 'scale(1, 1)';
  }

  if (isTouching(avatar, coin)) {
    // if this return true, move the coin again
    moveCoin();
  }
});

const extractPosition = function (pos) {
  if (!pos) {
    return 100;
  }

  return parseInt(pos.slice(0, -2));
};
