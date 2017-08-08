'use strict';

var question1 = 'Question 1. Do I own any pets?';
var question2 = 'Question 2. Was I born in Washington State?';
var question3 = 'Question 3. Have I ever coded before joining Code Fellows?';
var question4 = 'Question 4. Have I ever been outside of the country?';
var question5 = 'Question 5. Have I ever been to a live concert?';
var correctResponse = 'Yep, That\'s right!';
var incorrectResponse = 'Nope, that\'s not right';

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
