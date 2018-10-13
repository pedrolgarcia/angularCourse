"use strict";
// Variáveis
var message = "Help me, Obi-Wan Kenobi. You're my only hope!";
console.log(message);
var episode = 4;
/*episode = '4' gera um erro pois foi definido o tipo number para a variável e estamos tentanto atribuir uma string
                como é ocorre o transpile pro js, roda normalmente */
console.log("This is episode " + episode);
episode = episode + 1;
console.log("Next episode is " + episode);
var favoriteDroid; // = favoriteDroid: any
// o tipo any permite qualquer declarar qualquer alor à variável
favoriteDroid = 'BB-8';
favoriteDroid = 10;
console.log("My favorite droid is " + favoriteDroid);
