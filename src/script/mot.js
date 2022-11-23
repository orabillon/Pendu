class Mot{
    constructor(pMot,pVisible){
        this.mot = pMot;
        this.lstLettre = [];
        this.lettreRestant = 0;

        this.mot.split("").forEach(lettre => {
            this.lstLettre.push(new Lettre(lettre,pVisible));
            this.lettreRestant++;
        });
    }

    affichageMot(){
        let m = "";
        this.lstLettre.forEach(lettre => {
            if(lettre.visible)
                m += lettre.lettre;
            else
                m += "-";
        });
        
        return m;
    }

    afficheMot(pElement){

        pElement.innerHTML = ""; 
        this.lstLettre.forEach(lettre => {
            if(lettre.visible)
               pElement.append(lettre.image);
            else
               {
                let tiret = new Image();
                tiret.src = "../../images/tiret.png";
                pElement.append(tiret);
               } 
                
        });
        
    }

    proposerLettre(pLettre){
        let lettrePresente = 0;
        this.lstLettre.forEach(lettre => {
            if((lettre.lettre).toUpperCase() == pLettre.toUpperCase()){
                lettre.setVisible(true);
                this.lettreRestant--;
                lettrePresente++;
            }   
        });

        return lettrePresente;
    }

    proposerMot(pMot){
        if(pMot.toUpperCase() == this.mot.toUpperCase()){
            return true;
        }
        return false;
    }

    getListeLettre(){
        return this.lstLettre;
    }

    getNbLettreRestante(){
        return this.lettreRestant;
    }

    getMot(){
        return this.mot;
    }

    reveleMot(){
        this.lstLettre.forEach(lettre => {
                lettre.setVisible(true); 
        });
    }
}