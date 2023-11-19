// esercizio 1 Dichiarare una variabile chiamata "numero" e assegnarle il valore 5. Stampare il valore della variabile sulla console.

// let numero;

// numero = 5;

// console.log(numero);

// esercizio 2 Dichiarare una costante chiamata "PI" e assegnarle il valore di 3.14. Stampare il valore della costante sulla console.

// const PI = 3.14;

// console.log(PI);

// esercizio 3 Dichiarare una variabile chiamata "nome" e assegnarle il valore "Marco". Successivamente, modificare il valore della variabile in "Luca". Stampare il nuovo valore sulla console.

// let nome = "Marco";

// nome = "Luca";

// console.log(nome);

// esercizio 4 Dichiarare una variabile chiamata "saluto" e assegnarle il valore "Ciao, come stai?". Stampare il valore della variabile sulla console.

// let saluto = "Ciao, come stai?";

// console.log("Eccoti, " + saluto);

// esercizio 5 Dichiarare una variabile chiamata "vero" e assegnarle il valore true. Stampare il valore della variabile sulla console.

// let vero;

// vero = true;

// console.log(vero);

// esercizio 6 Dichiarare una variabile chiamata "numeri" e assegnarle un array contenente i numeri da 1 a 5. Stampare l'array sulla console.

// let numeri = [1,2,3,4,5,6,7,8];

// console.log(numeri);

// esercizio 7 Dichiarare una variabile chiamata "persona" e assegnarle un oggetto con le seguenti proprietà: "nome" (con valore "Mario") e "età" (con valore 30). Stampare l'oggetto sulla console.

// // let persona = {

// //     nome:  "Vincenzo",
// //     età: 35,
// //     colorePreferito: "Nero"

// // }

// console.log(persona);

// esercizio 8 Dati di numeri: usa i  importanti operatori matematici per i due  numeri e stampa il risultato sulla console.

// let numero1 = 20;
// // let numero2 = 30;
// // let somma = numero1 + numero2;
// // let sottrazione = numero1 - numero2;
// // let moltiplicazione = numero1 * numero2;
// // let divisione = numero1 / numero2;
// // let incremento = (numero1 +1, numero2 +1);
// // let decremento =  (numero1 -1, numero2 -1);
// // let radiceQuadrata = Math.pow(numero1,numero2);
// // let trasformaInStringa = (numero1.toString());

// // console.log(somma);
// // console.log(sottrazione);
// // console.log(moltiplicazione);
// // console.log(divisione);
// // console.log(incremento);
// // console.log(decremento);
// // console.log(radiceQuadrata);
// // console.log(trasformaInStringa);

// esercizio 9 Dati di numeri: Usa gli operatori di comparazione per i  numeri e stampa il risultato sulla console.

// let numero1 = 5;
// let numero2 = 10;

// console.log("Il primo numero è maggiore del secondo?" + numero1 > numero2);
// console.log("Il primo numero e il secondo sono uguali?" + numero1 == numero2);
// console.log("i due numeri sono differenti?" + numero1 != numero2);
// console.log("Il primo numero è minore-uguale al secondo?" + numero1 <= numero2);

// esercizio 10 Dati di numeri: Usa gli operatori di logici per verificare due condizioni e stampa il risultato sulla console.

// let condizione1 = true;
// let condizione2 = false;

// console.log("Il risultato della valutazione tra le due condizioni con l'operatore AND è: " + (condizione1 && condizione2));
// console.log("Il risultato della valutazione tra le due condizioni con l'operatore OR è: " + (condizione1 || condizione2));
// console.log("Il risultato con l'operatore NOT è: " + ! condizione2);

// let numero1 = 15;
// let numero2 = 23;

// console.log((numero1 > 0 && numero2 >20) || (numero1 ==10 && numero2 ==20));
// console.log(!numero1 ==15);

// esercizio 11 Date due stringhe: Pratica le basi su come lavorare con le stringhe e stampa il risultato sulla console.

// let stringa1 = "Hello";
// let stringa2 = "World";
// let stringaNumero = "32";
// let stringa3 = "ciao Vincenzo";
// let sottostringa3 = "ciao";
// let parteStringa = stringa3.slice(0,9);
// let arrayStringa = stringa3.split("");

// console.log("La lunghezza delle due stringhe è " + (stringa1 + stringa2).length);
// console.log(stringa1.concat(" " + stringa2));
// console.log("Le due tringhe sono uguali? " +  (stringa1 === stringa2));
// console.log("Le due stringhe sono diverse? " + (stringa1 !== stringa2));
// console.log("Ora la stringa " + Number(stringaNumero) + " un numero");
// console.log("La sottostringa è presente nella stringa? " + stringa3.includes(sottostringa3));
// console.log(parteStringa);
// console.log(stringa3.toLowerCase());
// console.log(stringa3.toUpperCase());
// console.log("La stringa ora è un array: " + arrayStringa);

// esercizio 12 Lavora con il Template Literal: Pratica le basi  e stampa il risultato sulla console.

// let stringa = "Bentornato nel nostro Store, cosa vorresti acquistare?"
// let num1 = 123;
// let num2 = 234;
// let persona = {
//   nome: "Vincenzo",
//   cognome: "Tito",
//   anni: 35
// };

// let nome = prompt("Inserisci il tuo nome");
// let cognome = prompt ("Inserisci il tuo cognome");

// console.log(`Un commesso dice al cliente appena entrato: ${stringa}`);
// console.log(`La somma è di : ${num1 + num2}`)
// console.log(`Il cognome della persona è ${persona.cognome}`);
// console.log(`Ciao ${nome} ${cognome} ! Bentornato`);

// esercizio 12 Lavora con l' IF statement: Pratica le basi  e stampa il risultato sulla console.

// let numero = 1567823;

// if (numero > 0) {
//   console.log("Il numero è positivo");

// }else if(numero == 0){
//   console.log("Il numero è uguale a zer0");

// }else{
//   console.log("Il numero è negativo");
// }

// if(numero % 2 ==0){
//   console.log("Il numero è pari");
// }else{
//   console.log("Il numero è dispari");
// }

// let eta = 13;

// if(eta >= 18){

//   console.log("La persona può guidare");

// }else{
//   console.log("La persona non può guidare");
// }

// let punteggio = 87;

// if(punteggio >= 90){

//   console.log("Il tuo punteggio è eccellente");

// }else if(punteggio >= 80){

//   console.log("Il tuo punteggio è ottimo");

// }else if(punteggio >= 70) {

//   console.log("Il tuo punteggio è buono");

// }else{
//   console.log("Mi dispiace non hai superato il test");
// }

// let etaPersona = 19;
// let haLaPatente = true;

// if(etaPersona >= 18 && haLaPatente){

//   console.log("La persona è maggiorenne e può guidare");

// } else if(etaPersona>=18 && !haLaPatente){

//   console.log("La persona è maggiorenne ma non puà guidare");

// }else{

//   console.log("La persona non è maggiorenne");

// }

// let anno = 2024;

// if(anno  % 4 == 0 && anno % 100 !==0){

//   console.log("L'anno è bisestile ed ha 366 giorni");

// } else{

//   console.log("L'anno non è bisestile ed ha 365 giorni");

// }

// let numero = 41;
// let giornoSettimana;

// if(numero == 1){
//   giornoSettimana = "Lunedi";
//   console.log("Oggi è " + giornoSettimana);
// }else if(numero == 2){
//   giornoSettimana = "Martedi";
//   console.log("Oggi è " + giornoSettimana);
// }else if(numero == 3){
//   giornoSettimana = "Mercoledi";
//   console.log("Oggi è " + giornoSettimana);
// }else if(numero == 4){
//   giornoSettimana = "Giovedi";
//   console.log("Oggi è " + giornoSettimana);
// }else if(numero == 5){
//   giornoSettimana = "Venerdi";
//   console.log("Oggi è " + giornoSettimana);
// }else if(numero == 6){
//   giornoSettimana = "Sabato";
//   console.log("Oggi è " + giornoSettimana);
// }else if(numero == 7){
//   giornoSettimana = "Domenica";
//   console.log("Oggi è " + giornoSettimana);
// }else{
//   console.log("Numero non valido");
// }

// esercizio 13 Lavora con l'operatore Ternario : Pratica le basi  e stampa il risultato sulla console.

// let numero = 5;
// let stringa = "";
// let risultato = (numero >= 0) ? "positivo" : "negativo";
// let pariDispari = (numero%2==0) ? "pari" : "dispari";
// let stringaVuota = (stringa.length == 0) ? "vuota" : " non vuota";
// let maggioreMinore = (numero > 0) ? "maggiore di zero" : (numero < 0) ? "minore di zero" : "uguale a zero";

// console.log(risultato);
// console.log(pariDispari);
// console.log("La strimga è : " + stringaVuota);
// console.log("Il numero in questione è " + maggioreMinore);

// esercizio 14 Lavora con lo switch : Pratica le basi  e stampa il risultato sulla console.

// let mezzoDiTrasporto = parseInt(prompt(
//   "Scegli il tuo mezzo di trasporto\n\n1 per auto\n\n2 per moto\n\n3 per bicicletta"
// ));

// switch (mezzoDiTrasporto) {
//   case 1:
//     alert("Il tuo mezzo di trasporto sarà un auto, ottima scelta");

//     break;

//   case 2:
//     alert("Il tuo mezzo di trasporto sarà una moto, scelta intelligente");

//     break;

//   case 3:
//     alert("Il tuo mezzo di trasporto sarà una bicicletta, scelta intressante");

//     break;

//     default:
//       alert("Non hai selezionato nessun mezzo di trasporto")
// }

// let a = 13;
// let b = 14;
// let c = 12;
// let cheTriangolo;

// switch (true) {

//   case a == b && b == c:

//     cheTriangolo = "Equilatero";
    
   
//     break;

//   case a == b || b == c || a == c:

//     cheTriangolo = "Isoscele";
     
    
//     break;

//   default:

//     cheTriangolo = "Scaleno"
    
// }

// console.log("Il Triangolo è " + cheTriangolo);







//Scrivi un programma che dati 5 numeri restituisca in output la somma e la media

// function sommaMedia (x,y){

//     let somma = x + y;
//     let media = (x + y)/2;

//     console.log(somma,media);
// }

// sommaMedia (2,4)

//Scrivi un programma che dato:
// l'anno corrente e un anno di nascita
// determini l'età della persona, anni necessari a raggiungere ai 100

// function quantiAnni (annoCorrente, annoNascita){

//     let etaPersona = annoCorrente - annoNascita;
//     let arrivare100 =  100 - etaPersona;

//     console.log("La tua età è di " + etaPersona + " anni, e ti mancano " + arrivare100 + " anni per arrivare ai 100");
// }

// quantiAnni (2023, 1989)

//Scrivi un programma che dato:
// un numero totale di gatti e un numero di gatti presenti in fila
// restituisca il numero di file risultanti e nel caso l'ultima fila risulti incompleta indicare il numero di gatti mancanti per completarla

// function gatti(totaleGatti,gattiPerFila){

//     let totaleFile = totaleGatti / gattiPerFila;

//     if(totaleFile %2!=0){

//         totaleFile = Math.ceil(totaleFile);
//     }

//     let gattiMancanti = (totaleFile * gattiPerFila) - totaleGatti;

//     console.log("Il numero di file è di " + totaleFile + " , e i gatti mancanti sono " + gattiMancanti)
// }

// gatti (44,6)

//Scrivi una funzione che prenda 2 paramentie restituisca l'area del rettagolo

// function areaRettangolo (base, altezza){

//     let area = base * altezza;
//     console.log(area);
// }

// areaRettangolo(70,40)

//Scrivi un progranna che prenda due parametri di tipo stringa e ne restituisca la loro concatenazione.

//    function stringheConcatenate ( stringa1, stringa2){

//     let unicaStringa = (stringa1.concat('', stringa2));

//     console.log(unicaStringa)

//    }

//    stringheConcatenate("ciao sono Vincenzo e ", "questi sono esercizi sulle funzioni.")




// Scrivi un programma che prenda un parametro numero e restituisca true se il paramentro è pari, altrimenti false se dispari

// function pariDispari(numero){

// return numero%2 == 0;

// }

// console.log(pariDispari(189))




//Scrivi un programma che data una lista di nomi restituisca l'intera lista con i check.

// function checkLista (listaNomi) {

//     for (let i = 0; i < listaNomi.length; i++){

//         console.log(listaNomi[i] + "_Check");
//     }
// }

// checkLista(["Vincenzo", "Giulia","Mario", "Nicola", "Antonio"])

// Scrivi un programma che cerca un nome in una lista

// function cercaNome (listaNome, nomeDaCercare){

//     let personaPresente = false;

//     for (let i = 0; i < listaNome.length; i++) {

//         if(listaNome[i] == nomeDaCercare){

//             personaPresente = true;
//         }
//     }

//     return personaPresente;

// }




// let presente = cercaNome(["Mario","Luca","Caio","Lino","Maria"], "Vincenzo")

// if(presente){

//     console.log("La persona cercata è presente ? " + presente);

// }else{

//     console.log("La persona cercata non c'è");
// }

//Scrivi un programma che data una lista di nomi restituisca la somma degli elementi della lista

// function sommaNumeri(lista){

//     let totale = 0;

//     for (let i = 0; i < lista.length; i++) {

//         totale = totale + lista[i];

//     }

//     return totale;
// }

// sommaNumeri([1,2,3,4,5,6,7,8,9]);

// let somma = sommaNumeri([1,2,3,4,5,6,7,8,9]);

// console.log(somma);
