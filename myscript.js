/*
 * L'utente inserisce due parole in successione, con due prompt. 
 * Il software stampa prima la parola più corta, poi la parola più lunga.
 */

// let primaParola = prompt("Inserisci la prima parola");
// let secondaParola = prompt("Inserisci la seconda parola");

// if (primaParola.length > secondaParola.length) {
//     console.log (secondaParola)
//     console.log (primaParola)
// } else if (primaParola.length < secondaParola.length) {
//     console.log (primaParola)
//     console.log (secondaParola)
// } else {
//     console.log("La lunghezza delle due parole è la stessa")
// }


/*
 * Il software deve chiedere per 10 volte all'utente di inserire un numero.
 * Il programma stampa la somma di tutti i numeri inseriti. 
 */

// let sommaNumeri = 0;

// for ( let i = 0; i < 10; i++) {
//     let numeroSingolo = parseInt (prompt ("Inserisci un numero"))
//     sommaNumeri = sommaNumeri + numeroSingolo;
// }

// if (isNaN(sommaNumeri)) {
//     console.log ("Inserire solo valori numerici!")
// } else {
//     console.log(sommaNumeri);
// }

/**
 *   In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
 *   chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.
//  */

//  const invitati = ["gerry", "luca", "giovanni", "mimmo", "miriana"];

//  let nomeInserito = prompt("Inserisci il tuo nome");

//  let nomeVerifica = "Non sei invitato alla festa";

//  for (let i = 0 ; i < invitati.length; i++) {
//     let nomeDaVerificare = invitati [i];
//     if (nomeInserito == nomeDaVerificare) {
//         nomeVerifica = "Buona Festa"
//     }
//  }

//  console.log (nomeVerifica);


/**
 * Crea un array vuoto.
 * Chiedi per 6 volte all'utente di inserire un numero,
 * se è dispari inseriscilo nell'array.
 */

// const numeriDispari = [];

// for (let i = 0; i < 6; i++) {
//     let numeroInserito = parseInt (prompt("Inserisci un numero"))
//     let resto = ( numeroInserito % 2)

//     if (resto === 1) {
//         numeriDispari.push (numeroInserito);
//     }
 
// }
//  console.log(numeriDispari);


/**
 * Calcola la somma e la media dei primi 10 numeri
 */

// let somma = 0;

// for (let i = 0; i < 10; i++){
//    somma = somma + i;
// }

// console.log(somma);
// console.log (somma / 10);




/*
 *	Crea un array vuoto.
 * 	Chiedi all'utente di inserire cinque parole.
 *	Quando una parola è scritta con tutti i caratteri in maiuscolo stampa un alert,
 *	altrimenti inseriscila nell'array.
 *
 */

// let listaParole = [];

// for (let i = 0; i < 5; i++){
//     let parola = prompt("Inserisci una parola");

//    if ( parola.toUpperCase() == parola) {
//        alert ("Perfavore non scrivere tutte maiuscole")
//    } else {
//        listaParole.push(parola);
//    }
// }
//  console.log(listaParole);


/**
 *  Il software deve chiedere per 5 volte all'utente di inserire un numero.
 *  Il programma stampa la somma di tutti i numeri inseriti.
 *  Esegui questo programma in due versioni, con il for e con il while.
 */

// let somma = 0;

// for (let i = 0 ; i < 5 ; i++) {
//     let numeroRichiesto = parseInt( prompt ("Inserisci un numero"));
//     somma += numeroRichiesto;
// }

// console.log(somma);

// let somma = 0;
// let j = 0;

// while (j < 5) {
//     let numeroRichiesto = parseInt( prompt ("Inserisci un numero"));
//     somma += numeroRichiesto;
//     j++;
// }

// console.log(somma);



/**
 * 
 * Generatore di "nomi cognomi" casuali: prendendo una lista di nomi e 
 * una lista di cognomi, Gatsby vuole generare una falsa lista di 8 invitati.
 * Stampiamo la lista in modo ordinato in html come elementi <li> figli di un unico <ul>.
 * 
 */


//   listaNomi = ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter"];
//   listaCognomi = ["Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", "Cannon", "Cast", "Deitz", "Dewalt", "Ebner", "Frick", "Hancock", "Haworth", "Hesch", "Hoffman", "Kassing", "Knutson", "Lawless", "Lawicki", "Mccord", "McCormack", "Miller", "Myers", "Nugent", "Ortiz", "Orwig", "Ory", "Paiser", "Pak", "Pettigrew", "Quinn", "Quizoz", "Ramachandran", "Resnick", "Sagar", "Schickowski", "Schiebel", "Sellon", "Severson", "Shaffer", "Solberg", "Soloman", "Sonderling", "Soukup", "Soulis", "Stahl", "Sweeney", "Tandy", "Trebil", "Trusela", "Trussel", "Turco", "Uddin", "Uflan", "Ulrich", "Upson", "Vader", "Vail", "Valente", "Van Zandt", "Vanderpoel", "Ventotla", "Vogal", "Wagle", "Wagner", "Wakefield", "Weinstein", "Weiss", "Woo", "Yang", "Yates", "Yocum", "Zeaser", "Zeller", "Ziegler", "Bauer", "Baxster", "Casal", "Cataldi", "Caswell", "Celedon", "Chambers", "Chapman", "Christensen", "Darnell", "Davidson", "Davis", "DeLorenzo", "Dinkins", "Doran", "Dugelman", "Dugan", "Duffman", "Eastman", "Ferro", "Ferry", "Fletcher", "Fietzer", "Hylan", "Hydinger", "Illingsworth", "Ingram", "Irwin", "Jagtap", "Jenson", "Johnson", "Johnsen", "Jones", "Jurgenson", "Kalleg", "Kaskel", "Keller", "Leisinger", "LePage", "Lewis", "Linde", "Lulloff", "Maki", "Martin", "McGinnis", "Mills", "Moody", "Moore", "Napier", "Nelson", "Norquist", "Nuttle", "Olson", "Ostrander", "Reamer", "Reardon", "Reyes", "Rice", "Ripka", "Roberts", "Rogers", "Root", "Sandstrom", "Sawyer", "Schlicht", "Schmitt", "Schwager", "Schutz", "Schuster", "Tapia", "Thompson", "Tiernan", "Tisler"];


//   for ( let i = 0; i < 8; i++ ) {
//     let nomeCasuale = listaNomi[Math.floor(Math.random()*listaNomi.length)];
//     let cognomeCasuale = listaCognomi[Math.floor(Math.random()*listaCognomi.length)];

//     let listaInvitati = document.getElementById("lista-invitati").innerHTML;
//     document.getElementById("lista-invitati").innerHTML = listaInvitati +"<li>"+ nomeCasuale +" " + cognomeCasuale + "</li>"  ;
    
//  }