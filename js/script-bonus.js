var outputContainer = document.getElementById('output');
var km = prompt('Ciao utente. Quanti km vuoi fare oggi?');
var age = prompt('E quanti anni hai?');
var bonus=prompt('Dimmi pure un numero da 0 a 10,potresti ottenere il biglietto gratis');
if (!isNaN(km) && !isNaN(age) && !isNaN(bonus)) {
var age=parseInt(age);
var km=parseInt(km);
var bonus=parseInt(bonus);
var base=0.21*km;

var random=Math.floor(Math.random()*11);
console.log(random);
if(random === bonus){
var discount=0;
}else{
var discount=1;

if (age<18){
   discount=0.8;
}
if(age>65){
  discount=0.6;
}
}
var price=(base*discount).toFixed(2);

outputContainer.innerText = 'Il prezzo del biglietto è di ' + price + ' €. Trenitalia ti augura buon viaggio!';
}
else{
alert('Devi inserire valori corretti');
}
