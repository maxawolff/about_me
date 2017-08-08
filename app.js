'use strict';

var question1 = 'Question 1. Do I own any pets?';
var question2 = 'Question 2. Was I born in Washington State?';
var question3 = 'Question 3. Have I ever coded before joining Code Fellows?';
var question4 = 'Question 4. Have I ever been outside of the country?';
var question5 = 'Question 5. Have I ever been to a live concert?';

alert('Hello there, this is my about me page. Were going to play a little game so that you can learn more about me. Please answer the following 5 questions in a yes or no fashion.');
var answer1 = prompt(question1);
console.log('Asked the user the following question ' + question1 + ' and they responded with ' + answer1);
answer1 = answer1.toUpperCase();
console.log('changed their answer to ' + answer1 + ' in order to check if they provided a valid answer');
