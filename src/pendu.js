const dictionnaire = ['armoire', 'attendre', 'apollon','abeille','aeroport','aquarium','architecture',
                      'Bouquet','bonheur','bonbon','bouilloire','bourgeon','brouette','boutique',
                      'chat','cachette','cadenas','cadeau','calendrier','casquette','cerveau'];

let MotADeviner = "";
let tabLettre = [];  
let tabDecouvert = [];                

function rnd(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

function tirageMot(){
    MotADeviner = dictionnaire[rnd(0,dictionnaire.length)];
    tabLettre   = MotADeviner.split('');
    tabLettre.forEach(element => {
        tabDecouvert.push(0);
    });
} 

// Partie 
tirageMot()

console.log(tabLettre);
console.log(tabDecouvert);

