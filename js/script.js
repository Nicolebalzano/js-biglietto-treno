// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va stampato in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca.
// Prima di scrivere il codice impostate il ragionamento nei commenti!
// Bonus:
// Applicare de controlli sull'input dell'utente


// RACCOLTA DATI
/* 
- kilometri da percorrere
- età del passeggero
*/
// ELABORAZIONE LOGICA
/* 
Calcolo del prezzo totale del biglietto in base alle informazioni inserite
-Prezzo del biglietto = numeroKilometri * 0.21
Applica sconto 20% se il passeggero è minorenne
Applica sconto 40% se il passeggero è over 65
*/
// OUTPUT
/* 
Prezzo finale che tiene conto delle variabili precedente, 
questo deve avere max 2 decimali dopo la virgola.
*/

// RACCOLTA DATI
const kilometriDaPercorrereStr = prompt("Quanti kilometri devi percorrere?");
const kilometriDaPercorrere = parseInt(kilometriDaPercorrereStr);
console.log("Vuoi percorrere:" + " " + kilometriDaPercorrere + "Km");

const etaPasseggeroStr = prompt("Quanti anni hai?");
const etaPasseggero = parseInt(etaPasseggeroStr);
console.log("Hai:" + " " + etaPasseggero + " " + "anni");

//ELABORAZIONE LOGICA
const prezzoBigliettoStr = kilometriDaPercorrere * 0.21;
const prezzoBiglietto = parseInt(prezzoBigliettoStr);

const scontoMinorenni = (prezzoBiglietto / 100) * 20;
const bigliettoMinorenni = prezzoBiglietto - scontoMinorenni;

const scontoOver = (prezzoBiglietto / 100) * 40;
const bigliettoOver = prezzoBiglietto - scontoOver;

 if (etaPasseggero < 18) {
   console.log("Con lo sconto Minorenni applicato il tuo biglietto ora costa:" + " " + bigliettoMinorenni + "€");
} else if(etaPasseggero > 65) {
    console.log("Con lo sconto Over 65 applicato il tuo biglietto ora costa:" + " " + bigliettoOver + "€");
} else {
    console.log("Il tuo biglietto costa:" + " " + prezzoBiglietto + "€");
}
