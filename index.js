function start() {
  let welcome = prompt('Welcome to my guessing game. Would you wish to play a game?');
if(welcome === 'yes') {
  play(2, 0);
}
}
start();

function play(inc = 2, points = 0) {
  console.log(inc);
  let guess = Math.floor(Math.random() * inc) + 1;
  console.log(guess);
  let guessQuest = prompt(`Could you guess the magic number? between 1 and ${inc}`);
  parseInt(guessQuest);
  if(guessQuest == guess) {
    console.log('congratulations!');
    play(inc + 1, points + 1);
  } else {
    console.log(`Sorry that was wrong. \nCorrect number was ${guess}. \nYour total points earned were ${points}`);
    let choice = prompt('Would you like to try the game again?');
    if(choice == 'yes') {
      start();
    } else {
      console.log('Too bad. Thank you for trying my game though!');
      return;
    }
  }
} 