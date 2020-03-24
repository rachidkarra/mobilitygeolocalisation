class Vivant {
    constructor(nom) {
        this._nom = nom;
    }

    get nom() {
        return this._nom;
    }
    set nom(n) {
        if (n == 'Virus') {
            this._nom = 'RotaVirus';
        } else {
            this._nom = 'Un autre organisme vivant';
        }
    }
}

//constructeur
let vivant = new Vivant('Bacterie');
console.log(vivant._nom);
//Accees direct
vivant._nom = 'Champignon';
console.log(vivant._nom);
//Setters
vivant.nom = 'Virus';    // _nom
console.log(vivant.nom);
vivant.nom = 'Flore';
console.log(vivant.nom);