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
//
// outputContainer.innerText = 'Il prezzo del biglietto è di ' + price + ' €. Trenitalia ti augura buon viaggio!';
// }
// else{
// alert('Devi inserire valori corretti');
// }


// fammelo scrivere meglio

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
var price=(base*discount).toFixed(2);

outputContainer.innerText = 'Il prezzo del biglietto è di ' + price + ' €. Trenitalia ti augura buon viaggio!';
}
else{
alert('Devi inserire valori corretti');
}
