// 
class Fruit {
    constructor(nom) {
        this.nom = nom;
    }
    quantite(qte) {
        console.log(qte + ' kilo(s) de ' + this.nom + ' SVP.');
    }
}

class Meuble {
    constructor() {
    }
    static quantite(qte) {
        console.log(qte + ' Meuble(s) SVP.');
    }
}

let monFruit = new Fruit('Fraise');
//Instance
monFruit.quantite(2);
//Static
Meuble.quantite(4);