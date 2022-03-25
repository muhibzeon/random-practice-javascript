'use strict';

let num = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(typeof guess);

  if (!guess) {
    displayMessage('🔴 No Number ');
  }
  //when player wins
  else if (guess === num) {
    displayMessage('🩲 Correct Guess!!!');

    document.querySelector('.number').textContent = num;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;

      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //when guess doesnt match
  else if (guess !== num) {
    if (score > 1) {
      displayMessage(guess > num ? '⚔️ Too High!' : '⚔️ Too Low!');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🔴 You lost!');

      document.querySelector('.score').textContent = 0;
    }
  }
  //   } else if (guess > num) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '⚔️ Too High!';

  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '🔴 You lost!';

  //       document.querySelector('.score').textContent = 0;
  //     }
  //   } else if (guess < num) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '';

  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '🔴 You lost!';

  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.score').textContent = 20;
  num = Math.trunc(Math.random() * 20) + 1;

  displayMessage('?');
  document.querySelector('.number').style.width = '15rem';

  displayMessage('Start guessing...');

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
});
