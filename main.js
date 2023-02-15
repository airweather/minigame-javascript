const container = document.querySelector('.image-container');
const startButton = document.querySelector('.start-button');
const gameText = document.querySelector('.game-text');
const playTime = document.querySelector('.play-time');

const tileCount = 16;

Array(tileCount).fill().forEach((_, i) => {
  const li = document.createElement('li');
  li.setAttribute('data-index', i);
  li.classList.add(`list${i}`);
  container.appendChild(li);
})