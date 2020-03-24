
// Scope globale
varGlobale = "fraise";

function funGlobale() {
    console.log(varGlobale);

     var insideFunction = "banane";    // 2- changer var par let  (let -> block scope)
    {
        let insideBlock = "cerises";
    }
    console.log(insideBlock);   // Erreur car let scope de block
}

funGlobale();
console.log(insideFunction);  // 1- on ne peut pas acceder (var -> function scope)

//console.log(insideBlock);

// 3- Si on utilise insideFunction sans 'var' on aura un access globale