




const PI = 3.141592653589793;
// PI = 3.14;      //  Erreur: Assignment to constant variable.
// PI = PI + 10;   //  Erreur: Assignment to constant variable.


const maPetiteEntreprise = {
    nom: 'NeConnaisPaslaCrise',
    ChiffreAffaire: 2000
}

maPetiteEntreprise.ChiffreAffaire = 3000;
console.log(maPetiteEntreprise.ChiffreAffaire); // pas de probleme


// Changer un element de la table

const tableObject = new Array({ nom: "pomme", prix: 3 },
                        { nom: "banane", prix: 6 },
                        { nom: "fraise", prix: 10 });

tableObject[0].nom = "avocat";

console.log(tableObject);