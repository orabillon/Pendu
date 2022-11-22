class Lettre{
    constructor(pLettre){
        this.lettre = pLettre;
        this.visible = false;
        this.image = new Image();
        this.image.src =  `/images/${pLettre}1.png`;
    }

    setVisible(pVisible){
        this.visible = pVisible;
    }
}

class LettreChoix{
    constructor(pLettre){
        this.lettre = pLettre;
        this.visible = true;
        this.image = new Image();
        this.image.src =  `/images/${pLettre}.png`;
    }

    setVisible(pVisible){
        this.visible = pVisible;
    }
}