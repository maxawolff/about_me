'use strict';

var question1 = 'Question 1. Do I own any pets?';
var question2 = 'Question 2. Was I born in Washington State?';
var question3 = 'Question 3. Have I ever coded before joining Code Fellows?';
var question4 = 'Question 4. Have I ever been outside of the country?';
var question5 = 'Question 5. Have I ever been to a live concert?';
var question6 = 'What is my favorite number?';
var question7 = 'Can you guess a band that I have seen live?';
var correctResponse = 'Yep, That\'s right!';
var incorrectResponse = 'Nope, that\'s not right';
var favoriteNumber = 144;
var bandsSeen = ['iron maiden', 'avenged sevonfold', 'rush', 'streetlight manifesto', 'slayer', 'metallica'];
var correctAnswers = 0;

var theirName = prompt('Why hello there, my name is Max, what\'s yours?');
alert('Hi ' + theirName + ', nice to meet you. This is my about me page, before I let you take a look around I\'d like to ask you a few questions. Please respond to the first five with a yes or no, the rest will be self explanatory.');

function askOne() {
  var answer1 = prompt(question1);
  console.log('Asked the user the following question: ' + question1 + ' And they responded with ' + answer1);
  if(answer1.toUpperCase === 'YES' || answer1.toUpperCase === 'Y'){
    alert(incorrectResponse);
    console.log('They got the wrong answer');
  }
  else if (answer1.toUpperCase === 'NO' || answer1.toUpperCase === 'N') {
    alert(correctResponse);
    console.log('They got the right answer');
    correctAnswers++;
  }
  else{
    alert('It looks like your answer was not a yes or no response, please answer with a yes or no next time');
    console.log('They answered improperly, the answer needed to be a yes or no');
  }
}
function askTwo() {
  var answer2 = prompt(question2);
  console.log('Asked the user the following question: ' + question2 + ' And they responded with ' + answer2);
  if(answer2.toUpperCase() === 'YES' || answer2.toUpperCase() === 'Y'){
    alert(incorrectResponse);
    console.log('They got the wrong answer');
  }
  else if (answer2.toUpperCase() === 'NO' || answer2.toUpperCase() === 'N') {
    alert(correctResponse);
    console.log('They got the right answer');
    correctAnswers++;
  }
  else{
    alert('It looks like your answer was not a yes or no response, please answer with a yes or no next time');
    console.log('They answered improperly, the answer needed to be a yes or no');
  }
}
function askThree() {
  var answer3 = prompt(question3);
  console.log('Asked the user the following question: ' + question3 + ' And they responded with ' + answer3);
  if(answer3.toUpperCase() === 'YES' || answer3.toUpperCase() === 'Y'){
    alert(correctResponse);
    console.log('They got the right answer');
    correctAnswers++;
  }
  else if (answer3.toUpperCase() === 'NO' || answer3.toUpperCase() === 'N') {
    alert(incorrectResponse);
    console.log('They got the wrong answer');
  }
  else{
    alert('It looks like your answer was not a yes or no response, please answer with a yes or no next time');
    console.log('They answered improperly, the answer needed to be a yes or no');
  }
}
function askFour() {
  var answer4 = prompt(question4);
  console.log('Asked the user the following question: ' + question4 + ' And they responded with ' + answer4);
  if(answer4.toUpperCase() === 'YES' || answer4.toUpperCase() === 'Y'){
    alert(correctResponse);
    console.log('They got the right answer');
    correctAnswers++;
  }
  else if (answer4.toUpperCase() === 'NO' || answer4.toUpperCase() === 'N') {
    alert(incorrectResponse);
    console.log('They got the wrong answer');
  }
  else{
    alert('It looks like your answer was not a yes or no response, please answer with a yes or no next time');
    console.log('They answered improperly, the answer needed to be a yes or no');
  }
}
function askFive(){
  var answer5 = prompt(question5);
  console.log('Asked the user the following question: ' + question5 + ' And they responded with ' + answer5);
  if(answer5.toUpperCase() === 'YES' || answer5.toUpperCase() === 'Y'){
    alert(correctResponse);
    console.log('They got the right answer');
    correctAnswers++;
  }
  else if (answer5.toUpperCase() === 'NO' || answer5.toUpperCase() === 'N') {
    alert(incorrectResponse);
    console.log('They got the wrong answer');
  }
  else{
    alert('It looks like your answer was not a yes or no response, please answer with a yes or no next time');
    console.log('They answered improperly, the answer needed to be a yes or no');
  }
}
function askSix() {
  for (var i = 0; i < 4; i++){
    var answer6 = prompt(question6 + ' You have ' + (4 - i) + ' guesses left');
    console.log('user guessed ' + answer6);
    var answer6 = parseInt(answer6);
    var guessedWrong = true;
    if(answer6 === favoriteNumber){
      alert('That\'s right, great guess!');
      correctAnswers++;
      guessedWrong = false;
      break;
    }
    else if(answer6 < 144){
      alert('Nope, that answe is too small. ' + (3 - i) + ' guesses left');
    }
    else if(answer6 > 144){
      alert('Nope, that answe is too large.' + (3 - i) + ' guesses left');
    }
    else{
      alert('Is that even a number? You were supposed to guess a number between 1 and 1000 ' + (3 - i) + ' guesses left');
    }
  }
  if(guessedWrong){
    alert('Looks like you couldn\'t guess it. The correct number was 144');
  }
}
function askSeven(){
  for (var i = 0; i < 6; i ++){
    var whichBand = prompt(question7);
    var guessedWrong = true;
    console.log('user guessed ' + whichBand);
    if(bandsSeen.includes(whichBand.toLowerCase())){
      alert('that\'s right, great guess! The correct answers were Iron Maiden, Streetlight Manifesto, Avenged Sevonfold, Rush, Slayer, and Metallica!');
      correctAnswers++;
      guessedWrong = false;
      break;
    }
    else{
      alert('Guess again, ' + (5 - i) + ' guesses left');
    }
  }

  if(guessedWrong){
    alert('Looks like you couldn\'t guess it. The correct answers were Iron Maiden, Streetlight Manifesto, Avenged Sevonfold, Rush, Slayer, and Metallica');
  }
};
askOne();
askTwo();
askThree();
askFour();
askFive();
askSix();
askSeven();

if(correctAnswers < 2){
  alert('Thanks for playing ' + theirName + ', you got ' + correctAnswers + ' answers correct. That\'s actually a terrible score, try harder next time');
}
else if(correctAnswers < 6){
  alert('Thanks for playing ' + theirName + ', you got ' + correctAnswers + ' answers correct. You did pretty well.');
}
else{
  alert('Thanks for playing ' + theirName + ', you got ' + correctAnswers + ' answers correct. Way to nail it!');
}
