'use strict';

/////////////Challenge2//////////////

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

/*
//////////////Challenge1////////////////

////Jonas solution////
const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: JavaScript', '1:Python', '2: Rust', '3:C++'],
  // This generates [0,0,0,0]More in the next section
  ansewrs: new Array(4).fill(0),
  registerNewAnswer() {
    const ansewr = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    //RegisterNewAnsewr
    typeof ansewr === 'number' &&
      ansewr < this.ansewrs.length &&
      this.ansewrs[ansewr]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.ansewrs);
    } else if (type === 'string') {
      console.log(`Poll resuls are ${this.ansewrs.join(', ')}`);
    }
  },
};

// poll.registerNewAnswer();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ ansewrs: [5, 2, 3] }, 'string');
//  [5, 2, 3];
// [1, 5, 3, 9, 6, 1];

//// My solution////

const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: JavaScript', '1:Python', '2: Rust', '3:C++'],
  // This generates [0,0,0,0]More in the next section
  ansewrs: new Array(4).fill(0),
  registerNewAnswer() {
    const num = prompt(`${this.question}\n${this.options.join('\n')}`);
    this.ansewrs[num]++;
    this.displayResults(this.ansewrs);
  },
  displayResults(type) {
    const output = typeof type === 'string' ? `Poll results are ${type}` : type;
    console.log(output);
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

const testData1 = [5, 2, 3];
const testData2 = [1, 5, 3, 9, 6, 1];

poll.displayResults(testData1);
poll.displayResults(testData2);
*/
