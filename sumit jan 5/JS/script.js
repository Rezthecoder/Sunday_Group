let jMass= 78;
let jheight= 1.69;
let jresult = jMass/jheight**2;
console.log(jresult);

let mkmass=95;
let mkheight=1.76;
let mkresult= mkmass/mkheight**2;
console.log(mkresult);

let fresult= mkresult > jresult;
console.log(fresult);



if(mkresult>jresult){
    console.log('markBMI is greater');
}
else{
    console.log('JohnBMI is greater')
}