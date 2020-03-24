// Aucun access au DOM depuis le WebWorker
addEventListener('message', data => {
    console.log('Script reçu', data);
    let count=0;
    for(let i =0; i<10000000000;i++){
     // Des taches qui vont se faire sans interragir ou bloquer l'interface ou détériorer l'expérience utilisateur
     count++;
    }
    postMessage("Ok, je vais essayer ----worker.js----");
   
});