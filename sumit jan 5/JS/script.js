// let jMass= 78;
// let jheight= 1.69;
// let jresult = jMass/jheight**2;
// console.log(jresult);

// let mkmass=95;
// let mkheight=1.76;
// let mkresult= mkmass/mkheight**2;
// console.log(mkresult);

// let fresult= mkresult > jresult;
// console.log(fresult);

// if(mkresult>jresult){
//     console.log('markBMI is greater');
// }
// else{
//     console.log('JohnBMI is greater')
// }

// let number1=prompt("Enter the first Numbar");
// let number2=prompt("Enter the second Number");

// let result=Number(number1)+Number(number2);
// alert(result);

// let name= "Sumit";
// let surname="Adhikari";
// let age= 24;
// let title="front-end developer";
// let salary= "4lakh";

// let concat= 'My name is '+ name + surname + " i'm"+ age +' years old.'+ " i'm"+title + ' my salary is'+ salary+ 'per month.'
// console.log(concat);
// let temp= `My name is ${name} ${surname}. i'm ${age} years old. i'm ${title}. My Salary is ${salary} per month.`
// console.log(temp);

'use strict'
// let hasDrivinglisence = false;
// let hasPass = true;

// if(hasPass){
//     hasDrivinglisence = true;
// }
// if(hasDrivinglisence){
//     console.log("Now you can drive vehicles");
// }

//  let day = prompt("Enter a day")

//  switch (day) {
//     case 'sunday':
//         alert("beer khane")
//         break;
//         case 'monday':
//         alert("pani khane")
//         break;
//         case 'tuesday':
//         alert("wiskey khane")
//         break;
//         case 'wednesday':
//         alert("rum khane")
//         break;
//         case 'thursday':
//         alert("wine khane")
//         break;
//         case 'friday':
//         alert("juice khane")
//         break;
//         case 'saturday':
//         alert("monostor khane")
//         break;
 
//     default: alert("kei ta khanu parxa yr")
//         break;
//  }
// ---------------------------------------------------------------------------------------

//  let day = prompt("Enter a day")

//  switch (day) {
//     case 'sunday':
//         console.log("beer khane")
//         break;
//         case 'monday':
//         console.log("pani khane")
//         break;
//         case 'tuesday':
//         console.log("wiskey khane")
//         break;
//         case 'wednesday':
//         console.log("rum khane")
//         break;
//         case 'thursday':
//         console.log("wine khane")
//         break;
//         case 'friday':
//         console.log("juice khane")
//         break;
//         case 'saturday':
//         console.log("monostor khane")
//         break;
 
//     default: console.log("kei ta khanu parxa yr")
//  }
// -----------------------------------------------------------------------------------
// let day = prompt("Enter a day")
//  switch (day) {
//     case 'sunday':
//         document.getElementById('day').textContent ="beer khane";
      
//         break;
//         case 'monday':
//             document.getElementById('day').textContent = "pani khane!";
//         break;
//         case 'tuesday':
//             document.getElementById('day').textContent = "wiskey khane!";
//         break;
//         case 'wednesday':
//             document.getElementById('day').textContent = "rum khane!";
//         break;
//         case 'thursday':
//             document.getElementById('day').textContent = "wine khane!";
//         break;
//         case 'friday':
//             document.getElementById('day').textContent = "juice khane!";
//         break;
//         case 'saturday':
//             document.getElementById('day').textContent = "monostor khane!";
//         break;
 
//     default:  document.getElementById('day').textContent ="kei ta khanu parxa yr";
//         break;
//  }
let day= prompt("Enter a day")
let message = document.getElementById('day')
switch (day) {
        case 'sunday':
            message.textContent ="beer khane";
            break;
            case 'monday':
                message.textContent = "pani khane!";
            break;
            case 'tuesday':
                message.textContent = "wiskey khane!";
            break;
            case 'wednesday':
                message.textContent = "rum khane!";
            break;
            case 'thursday':
                message.textContent = "wine khane!";
            break;
            case 'friday':
                message.textContent = "juice khane!";
            break;
            case 'saturday':
                message.textContent = "monostor khane!";
            break;
     
        default:  message.textContent ="kei ta khanu parxa yr";
            break;
     }
