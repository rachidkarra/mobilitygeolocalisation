const worker = new Worker('worker.js');

worker.addEventListener('message', data =>{
    console.log('Le worker a renvoyée', data);
});

alert('Aucun blockage');
worker.postMessage('Manger cinq légumes par jour ----script.js----');