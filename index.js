// Welcome to my number guessing game
// On replit I notice that it prints the question as you 
// type the prompt message. I hope this wont lead to me being
// penalized in any way

// Import the js-cookies which helps store the session in cookies
import Cookies from 'js-cookie';

function start() {
  let name = prompt('Hello, what is your name?');
  Cookies.set('UserName', name)
  let welcome = prompt(`Welcome ${name} to my guessing game. Would you wish to play a game?`);
if(welcome === 'yes') {
  play(name, 2, 0);
}
}
start();

function play(name, inc = 2, points = 0) {
  console.log(inc);
  let guess = Math.floor(Math.random() * inc) + 1;
  // console.log(guess);
  let guessQuest = parseInt(prompt(`${name} could you guess the magic number? between 1 and ${inc}`));
  // parseInt(guessQuest);
  if(guessQuest == guess) {
    console.log('congratulations!');
    play(name, inc + 1, points + 1);
  } else {
    console.log(`Game over ${name}. \nThe Correct number was ${guess}. \nYour total points earned were ${points}`);
    Cookies.set(name, points)
    let choice = prompt('Would you like to try the game again?');
    if(choice == 'yes') {
      start();
    } else {
      console.log(`Too bad. Thank you ${name} for trying my game though!`);
      return;
    }
  }
} 