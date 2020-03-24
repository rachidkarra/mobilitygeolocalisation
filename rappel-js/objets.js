
const entreprise = {
    nom: "VertBio",
    pdg :{
        nom: "khaldawi",
        prenom: "yassine"
    },
    raisonSociale: "itemOdi",
    identificationFiscale: 2334,
    calculFisc:  () => {
        let taux = 14
        return 4*365*taux
    },
    payerTaxes: function(montant){
        return montant * 4;    //+ this.identificationFiscale
    }
}

console.log(entreprise.nom);
console.log(entreprise['nom']);
console.log(entreprise.pdg.nom)

console.log(entreprise.calculFisc());
console.log(entreprise.payerTaxes(2));