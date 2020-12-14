// alert('elleh');
// versione 1
// var outputContainer = document.getElementById('output');
//
// var km = prompt('Ciao utente. Quanti km vuoi fare oggi?');
// var age = prompt('E quanti anni hai?');
// if (!isNaN(km) && !isNaN(age)) {
// var age=parseInt(age);
// var km=parseInt(km);
// if (age<18){
//   var price = (0.8*0.21*km).toFixed(2) ;
// }
// if(age>65){
//   var price =(0.6*0.21*km).toFixed(2);
// }
// if(age>18 && age<65){
//   var price = (0.21*km).toFixed(2);
// }

// o meglio
//
// if (age<18){
//   var price = (0.8*0.21*km).toFixed(2) ;
// }
// else if(age>65){
//   var price =(0.6*0.21*km).toFixed(2);
// }
// else{
//   var price = (0.21*km).toFixed(2);
// }
//
// outputContainer.innerText = 'Il prezzo del biglietto è di ' + price + ' €. Trenitalia ti augura buon viaggio!';
// }
// else{
// alert('Devi inserire valori corretti');
// }


// versione 2)
var outputContainer = document.getElementById('output');

var km = prompt('Ciao utente. Quanti km vuoi fare oggi?');
var age = prompt('E quanti anni hai?');
if (!isNaN(km) && !isNaN(age)) {
var age=parseInt(age);
var km=parseInt(km);

var base=0.21*km;
var discount=1;

if (age<18){
   discount=0.8;
}
if(age>65){
  discount=0.6;
}
// oppure if  0.8 else if 0.6 else 1

var price=(base*discount).toFixed(2);

outputContainer.innerText = 'Il prezzo del biglietto è di ' + price + ' €. Trenitalia ti augura buon viaggio!';
}
else{
alert('Devi inserire valori corretti');
}

// versione 3)
// var outputContainer = document.getElementById('output');
//
// var km = prompt('Ciao utente. Quanti km vuoi fare oggi?');
// var age = prompt('E quanti anni hai?');
// if (!isNaN(km) && !isNaN(age)) {
// var age=parseInt(age);
// var km=parseInt(km);
//
// var base=0.21*km;
// var discount=1;
//
// if (minorenne(age)){
//    discount=0.8;
// }
// if(anziano(age)){
//   discount=0.6;
// }
// var price=(base*discount).toFixed(2);
//
// outputContainer.innerText = 'Il prezzo del biglietto è di ' + price + ' €. Trenitalia ti augura buon viaggio!';
// }
// else{
// alert('Devi inserire valori corretti');
// }
//
// function minorenne(x){
//   if (x<18) {
//     return true;
//   }
//   else {return false;}
// }
// function anziano(x){
//   if (x>65) {
//     return true;
//   }
//   else {return false;}
// }

// versione 4)
//
// var outputContainer = document.getElementById('output');
//
// var km = prompt('Ciao utente. Quanti km vuoi fare oggi?');
// var age = prompt('E quanti anni hai?');
// if (!isNaN(km) && !isNaN(age)) {
//   var age=parseInt(age);
//   var km=parseInt(km);
//
//   var base=0.21*km;
//
//   switch (age<18) {
//     case true:
//     discount=0.8;
//     case false:
//     switch(age>65){
//     case true:
//     discount=0.6;}
//     case false:
//     discount=1;
//   }
//
//   var price=(base*discount).toFixed(2);
//
//   outputContainer.innerText = 'Il prezzo del biglietto è di ' + price + ' €. Trenitalia ti augura buon viaggio!';
// }
// else{
//   alert('Devi inserire valori corretti');
// }

// versione 5)

// var outputContainer = document.getElementById('output');
//
// var km = prompt('Ciao utente. Quanti km vuoi fare oggi?');
// var age = prompt('E quanti anni hai?');
// if (!isNaN(km) && !isNaN(age)) {
//   var age=parseInt(age);
//   var km=parseInt(km);
//
//   var base=0.21*km;
//
// age<18? discount=0.8 : (age>65? discount=0.6 : discount=1);
//
//   var price=(base*discount).toFixed(2);
//
//   outputContainer.innerText = 'Il prezzo del biglietto è di ' + price + ' €. Trenitalia ti augura buon viaggio!';
// }
// else{
//   alert('Devi inserire valori corretti');
// }
