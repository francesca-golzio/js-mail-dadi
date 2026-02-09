/* Is this working? */
//console.log('🟢 Yes. it is!');


/* DADI */ 
/* variabili | array | prompt | operatori js | console.log() | for() */ 

/* Creo una lista di invitati (contiene 'email') */ 
const party_guest_list = [ 
  'paolino.paperino@duckmail.com','paperon.depaperoni@duckmail.com','mikey.mouse@topolinmail.com','bruce.wayne@gothmail.com','freccia.verde@greenmail.com','jones.indiana@relichmail.com','james.bond@007mail.com','arthur.pendragon@camelmail.com' ]

/* Chiedo all'Utente la sua 'email' e la conservo in una variabile*/
const user_email = prompt('Type your email, please');
//console.log(user_email);

/* Controllo se l'email fa parte della lista */
/* Restituisco un messaggio appropriato (ricordo di usare 'for()')*/
/* const match = 'Hello there, welcome to the party!';
const error = 'Sorry, this User has no acces to the party.';
let user_allowed = false;

for (i = 0; user_allowed || i < party_guest_list.length; i++) {
 console.log('sono nel ciclo');
 
 if(user_email == party_guest_list[i]) {
  user_allowed = true;
  } 
}
if(user_allowed) {
    console.log(match);    
  } else    {
    console.log(error);    
  };  */

  let message = 'non puoi entrare';
  for (i = 0;  i < party_guest_list.length; i++) {
   if(user_email == party_guest_list[i]) {
  message = 'puoi entrare';
  } 
}
console.log(message);
