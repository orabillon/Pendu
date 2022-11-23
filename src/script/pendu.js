//  ██████╗ ██████╗ ███╗   ██╗████████╗███████╗██╗  ██╗████████╗███████╗         ██╗███████╗██╗   ██╗    ██████╗ ███████╗███╗   ██╗██████╗ ██╗   ██╗
// ██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔════╝╚██╗██╔╝╚══██╔══╝██╔════╝         ██║██╔════╝██║   ██║    ██╔══██╗██╔════╝████╗  ██║██╔══██╗██║   ██║
// ██║     ██║   ██║██╔██╗ ██║   ██║   █████╗   ╚███╔╝    ██║   █████╗           ██║█████╗  ██║   ██║    ██████╔╝█████╗  ██╔██╗ ██║██║  ██║██║   ██║
// ██║     ██║   ██║██║╚██╗██║   ██║   ██╔══╝   ██╔██╗    ██║   ██╔══╝      ██   ██║██╔══╝  ██║   ██║    ██╔═══╝ ██╔══╝  ██║╚██╗██║██║  ██║██║   ██║
// ╚██████╗╚██████╔╝██║ ╚████║   ██║   ███████╗██╔╝ ██╗   ██║   ███████╗    ╚█████╔╝███████╗╚██████╔╝    ██║     ███████╗██║ ╚████║██████╔╝╚██████╔╝
//  ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚══════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝     ╚════╝ ╚══════╝ ╚═════╝     ╚═╝     ╚══════╝╚═╝  ╚═══╝╚═════╝  ╚═════╝ 
//                                                                                                                                                  

const dictionnaire = ['armoire' , 'attendre', 'apollon','abeille','aeroport','aquarium','architecture',
                       'Bouquet','bonheur','bonbon','bouilloire','bourgeon','brouette','boutique',
                       'chat','cachette','cadenas','cadeau','calendrier','casquette','cerveau','voiture','espace','mission',
                       'impossible','paquebot','ultime','frontiere','vaisseau','ans','torche','torchon','serviette','ordinateur',
                       'encyclopedie','portable','pepin','tasse','chien','pendule','train','montre'];

let alph = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let alphabet = [];
let resultat = null;
let MotADeviner;
let mot = "";
let nbCoups= 0;
let nbCoupVictoire = 0;


function rnd(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

function tirageMot(){
    mot = dictionnaire[rnd(0,dictionnaire.length)];
    MotADeviner = new Mot(mot,false);
} 

function creerAlphabet(){
    alph.forEach(lettre => {
        let lettreAlphabet = new LettreChoix(lettre);
        lettreAlphabet.image.addEventListener('click',function () {
            lettreAlphabet.setVisible(false);
            traitementJeu(lettreAlphabet.lettre);
        });
        alphabet.push(lettreAlphabet);
    });
}

function afficheAlphabet(){
    divLettre.innerHTML = "";
    alphabet.forEach(lettre => {
        if(lettre.visible)
        divLettre.append(lettre.image);
    });
}

function affichePendu(){
    divPendu.innerHTML = "";
    let image = new Image();
    image.src = `../../images/Pendu${nbCoups}.png`;
    divPendu.append(image);
} 

function gagner(){
    resultat = new Mot("GAGNE",true);
    resultat.afficheMot(divLettre);
    btnNouvellePartie.style.display = "block";
    divproposition.style.display = "none";
}

function afficherInterfaceJeu()
{
    affichePendu();

    if (nbCoups == 11){
        MotADeviner.reveleMot();
        resultat = new Mot("PERDU",true);
        resultat.afficheMot(divLettre);
        btnNouvellePartie.style.display = "block";
        divproposition.style.display = "none";
    }
    else if(MotADeviner.getNbLettreRestante() == 0 && nbCoups<11){
        gagner();
    }
    else{       
        afficheAlphabet();
    }
    
    MotADeviner.afficheMot(divMot);
}

function traitementJeu(pLettre){
    if (MotADeviner.proposerLettre(pLettre) == 0)
    {
        nbCoups++;
    }
    afficherInterfaceJeu();
    
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
let divproposition = document.getElementById('proposition');
let regleJeu = document.getElementById('regleJeu');
let jeux = document.getElementById('jeu');
let btnRegle = document.getElementById('regle');
let btnNouvellePartie = document.getElementById('nouvellePartie');
let btnPropo = document.getElementById('propo');
let proposition = document.getElementById('laPropo');

// création des variables
let regleIsVisible = false;

// cache les partie non utile du jeu
regleJeu.style.display = "none";
jeux.style.display = "none";
divproposition.style.display = "none";

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
    divproposition.style.display = "block";
    jeu();
});

btnPropo.addEventListener('click', () => {
    
    let motProposer = proposition.value;

    if (MotADeviner.proposerMot(motProposer)){
        MotADeviner.reveleMot();
        MotADeviner.afficheMot(divMot);
        gagner();
    }
    else
    {
        nbCoups++;
        afficherInterfaceJeu();
    }
    proposition.value = "";
});

function jeu(){
    // remise a zero si nouvelle partie consecutive
    nbCoups = 0;
    alphabet = [];
    resultat = null;

    tirageMot();
    creerAlphabet();
    afficherInterfaceJeu();
}



// ---------------------------------------------------------------

//      ██╗███████╗██╗   ██╗    ██╗   ██╗███████╗██████╗ ███████╗██╗ ██████╗ ███╗   ██╗    ███████╗██╗   ██╗██╗     ██╗         ████████╗███████╗██╗  ██╗████████╗
//      ██║██╔════╝██║   ██║    ██║   ██║██╔════╝██╔══██╗██╔════╝██║██╔═══██╗████╗  ██║    ██╔════╝██║   ██║██║     ██║         ╚══██╔══╝██╔════╝╚██╗██╔╝╚══██╔══╝
//      ██║█████╗  ██║   ██║    ██║   ██║█████╗  ██████╔╝███████╗██║██║   ██║██╔██╗ ██║    █████╗  ██║   ██║██║     ██║            ██║   █████╗   ╚███╔╝    ██║   
// ██   ██║██╔══╝  ██║   ██║    ╚██╗ ██╔╝██╔══╝  ██╔══██╗╚════██║██║██║   ██║██║╚██╗██║    ██╔══╝  ██║   ██║██║     ██║            ██║   ██╔══╝   ██╔██╗    ██║   
// ╚█████╔╝███████╗╚██████╔╝     ╚████╔╝ ███████╗██║  ██║███████║██║╚██████╔╝██║ ╚████║    ██║     ╚██████╔╝███████╗███████╗       ██║   ███████╗██╔╝ ██╗   ██║   
//  ╚════╝ ╚══════╝ ╚═════╝       ╚═══╝  ╚══════╝╚═╝  ╚═╝╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝    ╚═╝      ╚═════╝ ╚══════╝╚══════╝       ╚═╝   ╚══════╝╚═╝  ╚═╝   ╚═╝   

// --------------------------------------------------------------
// let choix = 0;

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
