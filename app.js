'use strict';

var question1 = 'Question 1. Do I own any pets?';
var question2 = 'Question 2. Was I born in Washington State?';
var question3 = 'Question 3. Have I ever coded before joining Code Fellows?';
var question4 = 'Question 4. Have I ever been outside of the country?';
var question5 = 'Question 5. Have I ever been to a live concert?';
var question6 = 'What is my favorite number? I\'ll give you 4 guesses, it is between 0 and 1000';
var correctResponse = 'Yep, That\'s right!';
var incorrectResponse = 'Nope, that\'s not right';
var favoriteNumber = 144;
/*
alert('Hello there, this is my about me page. Were going to play a little game so that you can learn more about me. Please answer the following 5 questions in a yes or no fashion.');
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
}
else{
  alert('It looks like your answer was not a yes or no response, please answer with a yes or no next time');
  console.log('They answered improperly, the answer needed to be a yes or no');
}

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
}
else{
  alert('It looks like your answer was not a yes or no response, please answer with a yes or no next time');
  console.log('They answered improperly, the answer needed to be a yes or no');
}

var answer3 = prompt(question3);
console.log('Asked the user the following question: ' + question3 + ' And they responded with ' + answer3);
answer3 = answer3.toUpperCase();
console.log('Changed their answer to ' + answer3 + ' in order to check if they provided a valid answer');
if(answer3 === 'YES' || answer3 === 'Y'){
  alert(correctResponse);
  console.log('They got the right answer');
}
else if (answer3 === 'NO' || answer3 === 'N') {
  alert(incorrectResponse);
  console.log('They got the wrong answer');
}
else{
  alert('It looks like your answer was not a yes or no response, please answer with a yes or no next time');
  console.log('They answered improperly, the answer needed to be a yes or no');
}

var answer4 = prompt(question4);
console.log('Asked the user the following question: ' + question4 + ' And they responded with ' + answer4);
answer4 = answer4.toUpperCase();
console.log('Changed their answer to ' + answer4 + ' in order to check if they provided a valid answer');
if(answer4 === 'YES' || answer4 === 'Y'){
  alert(correctResponse);
  console.log('They got the right answer');
}
else if (answer4 === 'NO' || answer4 === 'N') {
  alert(incorrectResponse);
  console.log('They got the wrong answer');
}
else{
  alert('It looks like your answer was not a yes or no response, please answer with a yes or no next time');
  console.log('They answered improperly, the answer needed to be a yes or no');
}

var answer5 = prompt(question5);
console.log('Asked the user the following question: ' + question5 + ' And they responded with ' + answer5);
answer5 = answer5.toUpperCase();
console.log('Changed their answer to ' + answer5 + ' in order to check if they provided a valid answer');
if(answer5 === 'YES' || answer5 === 'Y'){
  alert(correctResponse);
  console.log('They got the right answer');
}
else if (answer5 === 'NO' || answer5 === 'N') {
  alert(incorrectResponse);
  console.log('They got the wrong answer');
}
else{
  alert('It looks like your answer was not a yes or no response, please answer with a yes or no next time');
  console.log('They answered improperly, the answer needed to be a yes or no');
}
*/
for (var i = 0; i < 4; i++){
  var answer6 = prompt(question6);
  console.log('user guessed ' + answer6);
  var answer6 = parseInt(answer6);
  if(answer6 === favoriteNumber){
    alert('That\'s right, great guess!');
    break;
  }
  else{
    alert('Nope, guess again');
  }
}
