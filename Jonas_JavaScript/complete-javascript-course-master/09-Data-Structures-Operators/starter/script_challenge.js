'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

/////////Jonas solution for challenge 4///////////
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const outPut = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${outPut.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});

/*
//////////My solution for Coding Challenge4/////////////
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const splitText = document.querySelector('textarea').value.split('\n');
  console.log(splitText);
  const correctName = [];

  for (const n of splitText) {
    const trimedName = n.trim().toLowerCase();
    const [split1, split2] = trimedName.split('_');

    const upperName = [
      split1[0].toUpperCase() + split1.slice(1),
      split2[0].toUpperCase() + split2.slice(1),
    ].join('');
    console.log(upperName);
  }
});

// THIS TEST DATA (pasted to textarea)
// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure

// SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅

/*
/////////Jonas solution for challenge 3///////////
//1
const events = new Set(gameEvents.values());

//2
gameEvents.delete(64);

//3
console.log(
  `An event happend, on average, every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop;
console.log(time);
console.log(
  `An event happend, on average, every ${time / gameEvents.size} minutes`
);

//4
//the same as mine!!!


///////////Challenge3/////////////
//1
console.log(gameEvents);

const x = [...gameEvents.values()];
console.log(x);

const events = [...new Set(x)];
console.log(events);

//2
gameEvents.delete(64);
console.log(gameEvents);

//3

//4
for (const [key, value] of gameEvents) {
  const time = key <= 45 ? '[FIRST HALF]' : '[SECOND HALF]';
  console.log(`${time} ${key}: ${value}`);
}


////////////////////Jonas solution for challenge2/////////////

//1
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

//2
const odds = Object.values(game.odds);

let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;

console.log(average);

//3
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;

  console.log(`Odd of ${teamStr} ${odd}`);
}

// BONUS
// So the solution is to loop over the array, and add the array elements
//as object properties, and then increase the count as we encounter
//a new occurence of a certain element
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

console.log(scorers);


////////////// My solution for coding challenge 2/////////////////

const entries = Object.entries(game.scored);
console.log(entries);

for (const [goal, player] of game.scored.entries()) {
  console.log(`Goal ${goal + 1} : ${player}`);
}

const x = Object.values(game.odds);
console.log(x);

const calcOdds = function () {
  let sum = 0;
  for (const n of x) {
    sum += n;
  }
  const ave = sum / x.length;
  return ave;
};

const i = calcOdds();
console.log(i);

for (const [key, value] of Object.entries(game.odds)) {
  console.log(
    `Odd of ${game[key] && 'victory'} ${game[key] || 'draw'}: ${value}`
  );
}

function makeScore() {
  let scores = {};
  for (const [goal, player] of game.scored.entries()) {
    Object.assign(scores, { [player]: goal + 1 });
    // scores = { [player]: goal + 1 };
    console.log(scores);
  }
  console.log(scores);
}

makeScore();


////////////// My solution for coding challenge 1/////////////////

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fealdPlayers] = players1;
console.log(gk, fealdPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const playersFinal = [...players1, 'Thiago', ' Countinho', 'Perisic'];
console.log(playersFinal);

const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

const printGoal = function (scoredPlayers) {
  for (let i = 0; scoredPlayers.length > i; i++) {
    console.log(scoredPlayers[i]);
  }

  console.log(`There were ${scoredPlayers.length} goals in today's match`);
};

printGoal(game.scored);

team1 < team2 && console.log('Team1 is likely to win');
team2 < team1 && console.log('Team2 is likely to win');


////////////////////Jonas solution for cosing challenge 1/////////////////////

//1
const [players1, players2] = game.players;
console.log(players1, players2);

//2
const [gk, ...fealdPlayers] = players1;
console.log(gk, fealdPlayers);

//3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

//5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//6

//7
team1 < team2 && console.log('Team1 is likely to win');
team2 < team1 && console.log('Team2 is likely to win');
*/
