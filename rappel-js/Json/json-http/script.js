function JsonParse(){ 
let etudiant = '[{"nom":"Khaldawi","prenom":"ahmed"},{"nom":"Khaldawi","prenom":"yassine"}]';
    let eleve = '{"nom"  :  "khalid","prenom"  :  "yassine","livres" :["les miserables","Le banquet"]}';
    
    let obj1 = JSON.parse(eleve);
    let obj2 = JSON.parse(etudiant);
    document.getElementById("nom").innerHTML = obj1.nom;    
    document.getElementById("livres").innerHTML = obj1.livres[1]; 
    console.log( obj1.livres[1]);
    //console.log(obj2.length); 
    for(let i =0 ; i < obj2.length;i++){
       console.log(obj2[i].nom); 
    }
}
