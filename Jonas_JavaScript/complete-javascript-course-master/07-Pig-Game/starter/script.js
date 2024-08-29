'use strict';
//selecting element
let score0El = document.getElementById('score--0');
let score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');

//set first condition
let scores, scoreCu, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  activePlayer = 0;
  scoreCu = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  diceEl.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  scoreCu = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //Generating a ranfomdice roll
    let diceNumber = Math.trunc(Math.random() * 6) + 1;
    console.log(diceNumber);
    //Display dice
    diceEl.src = `dice-${diceNumber}.png`;
    diceEl.classList.remove('hidden');
    //check for ralled 1
    if (diceNumber !== 1) {
      //Add dice to current score
      scoreCu += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent = scoreCu;
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});

//Hold functionality
btnHold.addEventListener('click', function () {
  if (playing) {
    //1 Add current score to active player's score
    scores[activePlayer] += scoreCu;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2 check if player's score is >= 100
    //Finish the game
    if (scores[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--acrive');
      playing = false;
    } else {
      //Switch to the next player
      switchPlayer();
    }
  }
});

//Reset function

btnNew.addEventListener('click', init);

//---------- My solution -------------//

//Hold functionality

// btnHold.addEventListener('click', function () {
//   scores[activePlayer] += scoreCu;
//   document.getElementById(`score--${activePlayer}`).textContent =
//     scores[activePlayer];
//   scoreCu = 0;
//   document.getElementById(`current--${activePlayer}`).textContent = scoreCu;
//   activePlayer = activePlayer === 0 ? 1 : 0;
//   player0.classList.toggle('player--active');
//   player1.classList.toggle('player--active');
// });

//Reset function

// btnNew.addEventListener('click', function () {
//   //remove player--winner class
//   if (player0.classList.contains('player--winner')) {
//     player0.classList.remove('player--winner');
//   } else if (player1.classList.contains('player--winner')) {
//     player1.classList.remove('player--winner');
//   }
//   //add player--active for player0 and 1
//   player0.classList.add('player--active');
//   player1.classList.remove('player--active');

//   //remove diecePic

//   diceEl.classList.add('hidden');

//   //reset all numbers
//   document.getElementById(`current--0`).textContent = 0;
//   document.getElementById(`current--1`).textContent = 0;
//   score0El.textContent = 0;
//   score1El.textContent = 0;
//   scores[0] = 0;
//   scores[1] = 0;
//   scoreCu = 0;
//   activePlayer = 0;

//   //let playing true
//   playing = true;
//   console.log(playing);
// });
