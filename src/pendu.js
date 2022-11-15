const dictionnaire = ['armoire', 'attendre', 'apollon','abeille','aeroport','aquarium','architecture',
                      'Bouquet','bonheur','bonbon','bouilloire','bourgeon','brouette','boutique',
                      'chat','cachette','cadenas','cadeau','calendrier','casquette','cerveau'];

let MotADeviner;
let mot = "";
const nbrCoup = 11;
let nbCoups= 0;

function rnd(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

function tirageMot(){
    mot = dictionnaire[rnd(0,dictionnaire.length)];
    MotADeviner = new Mot(mot);
} 

// Partie 
tirageMot()

while(MotADeviner.lettreRestant != 0)
{
    MotADeviner.affichageMot();
    MotADeviner.proposerLettre(prompt("Chosisser une lettre"));
}

