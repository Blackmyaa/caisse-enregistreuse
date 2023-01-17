/* déclaration des variables*/
let nbrBillet500;
let nbrBillet200;
let nbrBillet100;
let nbrBillet50;
let nbrBillet20;
let nbrBillet10;
let nbrBillet5;
let nbrPiece2;
let nbrPiece1;
let nbrPiece05;
let nbrPiece02;
let nbrPiece01;
let nbrPiece005;
let nbrPiece002;
let nbrPiece001;


let sommeARendre = 0;
let sommeARendre1 = 0;

const depense = document.getElementById('depense');
const argentDonne = document.getElementById('argentDonne');
const buttonaddon2 = document.getElementById('button-addon2');



buttonaddon2.addEventListener("click", rendreMonnaie);
buttonaddon2.addEventListener("click", afficherResultat);


/* création des fonctions */
function rendreMonnaie() {
   sommeARendre1 = argentDonne.value - depense.value;
   sommeARendre = 0.001 + Math.round(sommeARendre1 * 100) / 100;
   message.innerHTML = "Le rendu monnaie est de " + sommeARendre.toFixed(2) + "€";
   console.log(sommeARendre1);

}
function afficherResultat() {
   nbrBillet500 = 0;
   nbrBillet200 = 0;
   nbrBillet100 = 0;
   nbrBillet50 = 0;
   nbrBillet20 = 0;
   nbrBillet10 = 0;
   nbrBillet5 = 0;
   nbrPiece2 = 0;
   nbrPiece1 = 0;
   nbrPiece05 = 0;
   nbrPiece02 = 0;
   nbrPiece01 = 0;
   nbrPiece005 = 0;
   nbrPiece002 = 0;
   nbrPiece001 = 0;


   while (sommeARendre >= 500) {
      sommeARendre = sommeARendre - 500;
      nbrBillet500 = nbrBillet500 + 1;
   }
   message500.innerHTML = nbrBillet500;


   while (sommeARendre >= 200) {
      sommeARendre = sommeARendre - 200;
      nbrBillet200 = nbrBillet200 + 1;
   }
   message200.innerHTML = nbrBillet200;


   while (sommeARendre >= 100) {
      sommeARendre = sommeARendre - 100;
      nbrBillet100 = nbrBillet100 + 1;
   }
   message100.innerHTML = nbrBillet100;


   while (sommeARendre >= 50) {
      sommeARendre = sommeARendre - 50;
      nbrBillet50 = nbrBillet50 + 1;
   }
   message50.innerHTML = nbrBillet50;


   while (sommeARendre >= 20) {
      sommeARendre = sommeARendre - 20;
      nbrBillet20 = nbrBillet20 + 1;
   }
   message20.innerHTML = nbrBillet20;


   while (sommeARendre >= 10) {
      sommeARendre = sommeARendre - 10;
      nbrBillet10 = nbrBillet10 + 1;
   }
   message10.innerHTML = nbrBillet10;


   while (sommeARendre >= 5) {
      sommeARendre = sommeARendre - 5;
      nbrBillet5 = nbrBillet5 + 1;
   }
   message5.innerHTML = nbrBillet5;


   while (sommeARendre >= 2) {
      sommeARendre = sommeARendre - 2;
      nbrPiece2 = nbrPiece2 + 1;
   }
   message2.innerHTML = nbrPiece2;


   while (sommeARendre >= 1) {
      sommeARendre = sommeARendre - 1;
      nbrPiece1 = nbrPiece1 + 1;
   }
   message1.innerHTML = nbrPiece1;


   while (sommeARendre >= 0.5) {
      sommeARendre = sommeARendre - 0.5;
      nbrPiece05 = nbrPiece05 + 1;
   }
   message50ct.innerHTML = nbrPiece05;


   while (sommeARendre >= 0.2) {
      sommeARendre = sommeARendre - 0.2;
      nbrPiece02 = nbrPiece02 + 1;
   }
   message20ct.innerHTML = nbrPiece02;

   while (sommeARendre >= 0.1) {
      sommeARendre = sommeARendre - 0.1;
      nbrPiece01 = nbrPiece01 + 1;
   }
   message10ct.innerHTML = nbrPiece01;

   while (sommeARendre >= 0.05) {
      sommeARendre = sommeARendre - 0.05;
      nbrPiece005 = nbrPiece005 + 1;
   }
   message5ct.innerHTML = nbrPiece005;

   while (sommeARendre >= 0.02) {
      sommeARendre = sommeARendre - 0.02;
      nbrPiece002 = nbrPiece002 + 1;
   }
   message2ct.innerHTML = nbrPiece002;
console.log(sommeARendre);
   if (sommeARendre > 0.01) {
      nbrPiece001 = 1;
   } else { nbrPiece001 = 0; }
   message1ct.innerHTML = nbrPiece001;
}
