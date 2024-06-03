// Chiedi all’utente il suo nome
// Poi chiedi il suo cognome
// Poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito23




// Chiedi all’utente il suo nome
let userName = prompt("inserisci il tuo nome");
console.log(userName);

// Chiedi all’utente il suo cognome
let userSurname = prompt("inserisci il tuo cognome");
console.log(userSurname);

// Chiedi all’utente il suo colore preferito
let userColor = prompt("inserisci il tuo colore preferito");
console.log(userColor);

// Scrivi sulla pagina nomecognomecolorepreferito23
let risultato = `${userName}${userSurname}${userColor}23`;
document.getElementById("mio_id").innerHTML = risultato;


