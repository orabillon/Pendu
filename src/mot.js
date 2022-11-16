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
        this.lstLettre.forEach(lettre => {
            if(lettre.visible)
                m += lettre.lettre;
            else
                m += "-" 
        });
        return m;
    }

    proposerLettre(pLettre){
        let lettrePresente = 0;
        this.lstLettre.forEach(lettre => {
            if(lettre.lettre == pLettre){
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