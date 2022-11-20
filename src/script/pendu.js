const dictionnaire = ['armoire'];

// , 'attendre', 'apollon','abeille','aeroport','aquarium','architecture',
//                       'Bouquet','bonheur','bonbon','bouilloire','bourgeon','brouette','boutique',
//                       'chat','cachette','cadenas','cadeau','calendrier','casquette','cerveau'];

//
let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let MotADeviner;
let mot = "";
let nbCoups= 11;
let nbCoupVictoire = 0;


function rnd(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

function tirageMot(){
    mot = dictionnaire[rnd(0,dictionnaire.length)];
    MotADeviner = new Mot(mot);
} 

function afficheAlphabet(pElement){
    alphabet.forEach(lettre => {
        let image = new Image();
        image.src = `../../images/${lettre}.png`;
        pElement.append(image);
    });
}

function affichePendu(pElement){
    let image = new Image();
    image.src = `../../images/Pendu${nbCoups}.png`;
    $(pElement).append(image);
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

// cache les element de jeu
$('#regleJeu').hide();
$('#jeu').hide();

// affiche et cache les regles 
$('#regle').click(() => {
    $('#regleJeu').toggle();
});

// lance une nouvelle partie 
$('#nouvellePartie').click(() => {
    $('#nouvellePartie').hide();
    $('#regle').hide();
    $('#regleJeu').hide();
    $('#jeu').show();
    jeu();
});



let divMot = document.getElementById('mot');
let divPendu = document.getElementById('pendu');
let divLettre = document.getElementById('lettre');

function jeu(){
    tirageMot();
    affichePendu(divPendu);
    MotADeviner.afficheMot(divMot);
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
