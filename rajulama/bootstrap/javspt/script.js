// let firstname = "raju";
// let secondname = "lama";
// let fullname = firstname + secondname;
// console.log(fullname);

//let num1 = prompt("enter the number1");
//let num2 = prompt("enter tthe number2");
//let num3 = Number(num1);
//et num4 = Number(num2);
//let result = num3 + num4;
//console.log(result);
//lert(result);

/*const name = "Raju";
const age = 25;
const salary = "12lakhs";
const title = "web Developer";
const essy = "i am a web developer";
const abc =
  "my name is " +
  name +
  "my age is " +
  age +
  "my annual income is " +
  salary +
  "i am a" +
  title +
  ".";
console.log(abc);

const hero = `My name is ${name}. My age is ${age} years old. I am a ${title}. My salary is ${salary} per annum. `;
console.log(hero);
*/

/*const name = "Raju";
const age = 30;
const nationality = "Nepal";
const bio =
  "my name is " +
  name +
  " i am " +
  age +
  " years old. " +
  " i am from " +
  nationality +
  ".";
console.log(bio);

const realm = `My name is ${name}. I am ${age} years old. i am from ${nationality}.`;
console.log(realm);
*/

/*const baja = "Guitar";
const love = "music";
const school = "guitar class";
const lvl = "plays guitar well";
const band = "led zeplin";
const compose = "Stairway to Heaven";
const status = "popular";
const organize = "world tour";
const story =
  "Jimmy page buys " +
  baja +
  "." +
  " He loves " +
  love +
  " He joins " +
  school +
  " Now he " +
  lvl +
  " He forms the band called " +
  band +
  " He  composes the one the iconic song in the history called " +
  compose +
  "He gets" +
  status +
  "among the music indstry and finally goes for the " +
  organize;
console.log(story);

const easy = `Jimmy page buys ${baja}. He loves ${love}. He joins ${school}. Now he ${lvl}. He forms the band called ${band}. They composes the song called ${compose}. They gets ${status} among the people and finally the goes for ${organize}`;
console.log(easy);
*/

/*("use strict");

let hasDriverLiscence = false;
let hasPass = true;

if (hasPass) {
  hasDriverLiscence = true;
}
if (hasDriverLiscence) {
  console.log("can ride bikes.");
}

//switch = use for multiple condition.
//KV = key value
*/
"use strict";
const day = prompt("enter the day");
//const day = "friday";

switch (day) {
  case "sunday":
    alert("ghumna jane");
    break;
  case "monday":
    alert("game khelne");
    break;
  case "tuesday":
    alert("party hanne");
    break;
  case "wednesday":
    alert("go fo a ride");
    break;
  case "thursday":
    alert("rest day");
    break;
  case "friday":
    alert("sutne");
    break;

  case "saturday":
    alert("uthne");
    break;

  default:
    alert("input milena");
    break;
}

const hello = document.getElementById("day");
console.log(hello);
hello.textContent = "hello world! k chha khabar.";
