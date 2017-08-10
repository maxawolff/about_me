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
  answer1 = answer1.toUpperCase();
  console.log('Changed their answer to ' + answer1 + ' in order to check if they provided a valid answer');
  if(answer1 === 'YES' || answer1 === 'Y'){
    alert(incorrectResponse);
    console.log('They got the wrong answer');
  }
  else if (answer1 === 'NO' || answer1 === 'N') {
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
  answer2 = answer2.toUpperCase();
  console.log('Changed their answer to ' + answer2 + ' in order to check if they provided a valid answer');
  if(answer2 === 'YES' || answer2 === 'Y'){
    alert(incorrectResponse);
    console.log('They got the wrong answer');
  }
  else if (answer2 === 'NO' || answer2 === 'N') {
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
  answer3 = answer3.toUpperCase();
  console.log('Changed their answer to ' + answer3 + ' in order to check if they provided a valid answer');
  if(answer3 === 'YES' || answer3 === 'Y'){
    alert(correctResponse);
    console.log('They got the right answer');
    correctAnswers++;
  }
  else if (answer3 === 'NO' || answer3 === 'N') {
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
  answer4 = answer4.toUpperCase();
  console.log('Changed their answer to ' + answer4 + ' in order to check if they provided a valid answer');
  if(answer4 === 'YES' || answer4 === 'Y'){
    alert(correctResponse);
    console.log('They got the right answer');
    correctAnswers++;
  }
  else if (answer4 === 'NO' || answer4 === 'N') {
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
  answer5 = answer5.toUpperCase();
  console.log('Changed their answer to ' + answer5 + ' in order to check if they provided a valid answer');
  if(answer5 === 'YES' || answer5 === 'Y'){
    alert(correctResponse);
    console.log('They got the right answer');
    correctAnswers++;
  }
  else if (answer5 === 'NO' || answer5 === 'N') {
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
    whichBand = whichBand.toLowerCase();
    if(bandsSeen.includes(whichBand)){
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
  alert('thanks for playing ' + theirName + ', you got ' + correctAnswers + ' answers correct, that\'s actually a terrible score, try harder next time');
}
else if(correctAnswers < 6){
  alert('thanks for playing ' + theirName + ', you got ' + correctAnswers + ' answers correct, you did pretty well.');
}
else{
  alert('thanks for playing ' + theirName + ', you got ' + correctAnswers + ' answers correct, way to nail it!');
}
