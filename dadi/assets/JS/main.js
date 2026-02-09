/* Is this working? */
//console.log('🟢 Yes. it is!');

/* 🎲 Gioco dei dadi */

/* Generaro un numero random da 1 a 6, per i 2 giocatori (User, PC) */
let userDice = Math.floor(Math.random() * 6 + 1);
console.log(userDice);
let pcDice = Math.floor(Math.random() * 6 + 1);
console.log(pcDice);  

/* Stabilisco il vincitore, in base a chi fa il punteggio più alto. */

  /* Confronto i due risultati e restituisco un messaggio sul vincitore */
  let message;

  if (userDice > pcDice) {
    message = 'Congrats, your number is greater, YOU WIN!'
  } else if (userDice < pcDice) {
    message = 'Sorry, your number is smaller, PC WINS, try again...'
  } else {
    message = 'Numbers are equal, NOBODY WINS, try again!'
  }
  
  console.log(message);    








