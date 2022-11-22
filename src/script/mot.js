class Mot{
    constructor(pMot){
        this.mot = pMot;
        this.lstLettre = [];
        this.lettreRestant = 0;

        mot.split("").forEach(lettre => {
            this.lstLettre.push(new Lettre(lettre));
            this.lettreRestant++;
        });
    }

    affichageMot(){
        let m = "";
        this.lstLettre.toUpperCase().forEach(lettre => {
            if(lettre.visible)
                m += lettre.lettre;
            else
                m += "-" 
        });
        
        return m;
    }

    afficheMot(pElement){

        this.lstLettre.forEach(lettre => {
            if(lettre.visible)
               pElement.append(lettre.image);
            else
               {
                let tiret = new Image();
                tiret.src = "../../images/tiret.png"
                pElement.append(tiret);
               } 
                
        });
        
    }

    proposerLettre(pLettre){
        let lettrePresente = 0;
        this.lstLettre.forEach(lettre => {
            if((lettre.lettre).toUpperCase() == pLettre){
                lettre.setVisible(true);
                this.lettreRestant--;
                lettrePresente++;
            }   
        });

        return lettrePresente;
    }

    proposerMot(pMot){
        if(pMot == this.mot){
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
}