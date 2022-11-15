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
        console.log(m);
    }

    proposerLettre(pLettre){
        this.lstLettre.forEach(lettre => {
            if(lettre.lettre == pLettre){
                lettre.setVisible(true);
                this.lettreRestant--;
            }
                
           
        });

        this.affichageMot();
    }
}