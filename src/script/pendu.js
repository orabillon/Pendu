//  ██████╗ ██████╗ ███╗   ██╗████████╗███████╗██╗  ██╗████████╗███████╗         ██╗███████╗██╗   ██╗    ██████╗ ███████╗███╗   ██╗██████╗ ██╗   ██╗
// ██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔════╝╚██╗██╔╝╚══██╔══╝██╔════╝         ██║██╔════╝██║   ██║    ██╔══██╗██╔════╝████╗  ██║██╔══██╗██║   ██║
// ██║     ██║   ██║██╔██╗ ██║   ██║   █████╗   ╚███╔╝    ██║   █████╗           ██║█████╗  ██║   ██║    ██████╔╝█████╗  ██╔██╗ ██║██║  ██║██║   ██║
// ██║     ██║   ██║██║╚██╗██║   ██║   ██╔══╝   ██╔██╗    ██║   ██╔══╝      ██   ██║██╔══╝  ██║   ██║    ██╔═══╝ ██╔══╝  ██║╚██╗██║██║  ██║██║   ██║
// ╚██████╗╚██████╔╝██║ ╚████║   ██║   ███████╗██╔╝ ██╗   ██║   ███████╗    ╚█████╔╝███████╗╚██████╔╝    ██║     ███████╗██║ ╚████║██████╔╝╚██████╔╝
//  ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚══════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝     ╚════╝ ╚══════╝ ╚═════╝     ╚═╝     ╚══════╝╚═╝  ╚═══╝╚═════╝  ╚═════╝ 
//                                                                                                                                                  

const dictionnaire = ['armoire'];

// , 'attendre', 'apollon','abeille','aeroport','aquarium','architecture',
//                       'Bouquet','bonheur','bonbon','bouilloire','bourgeon','brouette','boutique',
//                       'chat','cachette','cadenas','cadeau','calendrier','casquette','cerveau'];

//
let alph = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let alphabet = [];
let MotADeviner;
let mot = "";
let nbCoups= 0;
let nbCoupVictoire = 0;

function autreTraitementClick(pLettre){
    divMot.innerHTML = ""; 
    divLettre.innerHTML = "";
    divPendu.innerHTML = "";

    afficheAlphabet(divLettre);
    if (MotADeviner.proposerLettre(pLettre) == 0)
    {
        nbCoups++;
    }
    MotADeviner.afficheMot(divMot);
    affichePendu(divPendu);
}

function rnd(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

function tirageMot(){
    mot = dictionnaire[rnd(0,dictionnaire.length)];
    MotADeviner = new Mot(mot);
} 

function creerAlphabet(){
    alph.forEach(lettre => {
        let lettreAlphabet = new LettreChoix(lettre)
        lettreAlphabet.image.addEventListener('click',function () {
            lettreAlphabet.setVisible(false);
            autreTraitementClick(lettreAlphabet.lettre);
        });
        alphabet.push(lettreAlphabet);
    });
}

function afficheAlphabet(pElement){
    alphabet.forEach(lettre => {
        if(lettre.visible)
           pElement.append(lettre.image)
    });
}

function affichePendu(pElement){
    let image = new Image();
    image.src = `../../images/Pendu${nbCoups}.png`;
    pElement.append(image);
} 


//      ██╗███████╗██╗   ██╗    ██╗   ██╗███████╗██████╗ ███████╗██╗ ██████╗ ███╗   ██╗    ██╗  ██╗████████╗███╗   ███╗██╗     
//      ██║██╔════╝██║   ██║    ██║   ██║██╔════╝██╔══██╗██╔════╝██║██╔═══██╗████╗  ██║    ██║  ██║╚══██╔══╝████╗ ████║██║     
//      ██║█████╗  ██║   ██║    ██║   ██║█████╗  ██████╔╝███████╗██║██║   ██║██╔██╗ ██║    ███████║   ██║   ██╔████╔██║██║     
// ██   ██║██╔══╝  ██║   ██║    ╚██╗ ██╔╝██╔══╝  ██╔══██╗╚════██║██║██║   ██║██║╚██╗██║    ██╔══██║   ██║   ██║╚██╔╝██║██║     
// ╚█████╔╝███████╗╚██████╔╝     ╚████╔╝ ███████╗██║  ██║███████║██║╚██████╔╝██║ ╚████║    ██║  ██║   ██║   ██║ ╚═╝ ██║███████╗
//  ╚════╝ ╚══════╝ ╚═════╝       ╚═══╝  ╚══════╝╚═╝  ╚═╝╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝    ╚═╝  ╚═╝   ╚═╝   ╚═╝     ╚═╝╚══════╝
                                                                                                                            
                                
let dateActuelle = new Date();

let footer = document.getElementById('footer');
footer.innerText = `Olivier Rabillon ©${dateActuelle.getFullYear()}`;

// récuperation élément jeu 
let divMot = document.getElementById('mot');
let divPendu = document.getElementById('pendu');
let divLettre = document.getElementById('lettre');
let regleJeu = document.getElementById('regleJeu');
let jeux = document.getElementById('jeu');
let btnRegle = document.getElementById('regle');
let btnNouvellePartie = document.getElementById('nouvellePartie');

// création des variables
let regleIsVisible = false;

// cache les partie non utile du jeu
regleJeu.style.display = "none";
jeux.style.display = "none";

// definition evenement du jeu
btnRegle.addEventListener('click', () => {
    if (regleIsVisible){
        regleIsVisible = false;
        regleJeu.style.display = "none";
    }
    else
    {
        regleIsVisible = true;
        regleJeu.style.display = "block";
    }
});

btnNouvellePartie.addEventListener('click', () => {
    btnNouvellePartie.style.display = "none";
    btnRegle.style.display = "none";
    regleJeu.style.display = "none";
    jeux.style.display = "block";
    jeu();
});

function jeu(){
    tirageMot();
    affichePendu(divPendu);
    MotADeviner.afficheMot(divMot);
    creerAlphabet();
    afficheAlphabet(divLettre);
}



// ---------------------------------------------------------------

//      ██╗███████╗██╗   ██╗    ██╗   ██╗███████╗██████╗ ███████╗██╗ ██████╗ ███╗   ██╗    ███████╗██╗   ██╗██╗     ██╗         ████████╗███████╗██╗  ██╗████████╗
//      ██║██╔════╝██║   ██║    ██║   ██║██╔════╝██╔══██╗██╔════╝██║██╔═══██╗████╗  ██║    ██╔════╝██║   ██║██║     ██║         ╚══██╔══╝██╔════╝╚██╗██╔╝╚══██╔══╝
//      ██║█████╗  ██║   ██║    ██║   ██║█████╗  ██████╔╝███████╗██║██║   ██║██╔██╗ ██║    █████╗  ██║   ██║██║     ██║            ██║   █████╗   ╚███╔╝    ██║   
// ██   ██║██╔══╝  ██║   ██║    ╚██╗ ██╔╝██╔══╝  ██╔══██╗╚════██║██║██║   ██║██║╚██╗██║    ██╔══╝  ██║   ██║██║     ██║            ██║   ██╔══╝   ██╔██╗    ██║   
// ╚█████╔╝███████╗╚██████╔╝     ╚████╔╝ ███████╗██║  ██║███████║██║╚██████╔╝██║ ╚████║    ██║     ╚██████╔╝███████╗███████╗       ██║   ███████╗██╔╝ ██╗   ██║   
//  ╚════╝ ╚══════╝ ╚═════╝       ╚═══╝  ╚══════╝╚═╝  ╚═╝╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝    ╚═╝      ╚═════╝ ╚══════╝╚══════╝       ╚═╝   ╚══════╝╚═╝  ╚═╝   ╚═╝   

// --------------------------------------------------------------
//let choix = 0;

// do{
//     choix = prompt("Que souhaitez vous faire ? \n\n 1: Nouvelle Partie.\n 2: Quitter ");
// } while (!(choix == "1" || choix == "2")) 

// do{
//     if (choix == 1){
//         let lstProposition = [];
//         let victoire = false;
//         let sousChoix;
//         let motProposer;
//         nbCoups = 11;
//         nbCoupVictoire = 0;
//         tirageMot();
        
//         let continuer = true;

//         while(continuer){
//             proposition = prompt(`Mot : ${MotADeviner.affichageMot()} \n Nombre de coups restant : ${nbCoups} \n vos ancienne proposition : ${lstProposition.toString()} \n Chosisser une lettre `);
//             lstProposition.push(proposition);
//             let lettrePresente = MotADeviner.proposerLettre(proposition);

//             if (MotADeviner.getNbLettreRestante() == 0 && nbCoups > 0)
//             {
//                 victoire = true;
//                 continuer = false;
//             }

//             if (lettrePresente == 0){
//                 nbCoups--;
//             }
//             else{
//                 do{
//                     sousChoix = prompt("Proposer un mot ? \n 1 : Oui \ 2: Non");
//                 } while (!(sousChoix == "1" || sousChoix == "2"))
    
//                 if(sousChoix == "1"){
//                     motProposer = prompt(`Mot : ${MotADeviner.affichageMot()} \n A quel mot penssez-vous ?`);
//                     if (MotADeviner.proposerMot(motProposer)){
//                         victoire = true;
//                         continuer = false;
//                     }
//                     else
//                     {
//                         nbCoups--;
//                     }
//                 }

//                 nbCoupVictoire++;
//             }

//             if (nbCoups == 0){
//                 victoire = false;
//                 continuer = false;
//             }
//         }

//         sMessage = "Vous avez perdu !";

//         if (victoire){
//             sMessage = `Bravo vous avez gagner en ${nbCoupVictoire} coups !`
//         }

//         alert(`${sMessage} \n Le mot a deviner était ${MotADeviner.getMot()}`)

//         do{
//             choix = prompt("Que souhaitez vous faire ? \n\n 1: Nouvelle Partie.\n 2: Quitter ");
//         } while (!(choix == "1" || choix == "2")) 

//     }

// }while(choix==1)
