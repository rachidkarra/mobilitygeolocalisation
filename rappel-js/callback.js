 function salutation(name) {
    console.log('Bonjour ' + name);
  }
  
  function fonctionNom(callback) {
    var name = "rachid";
    callback(name);
  }
  
  fonctionNom(salutation); 


  //----------------


/*   function mangerFruit(subject, callback) {
    console.log(`Je commence avec : ${subject}.`);
    callback();
  }
  function alertFin(){
    console.log('J\'ai fini mon fruit');
  }
  mangerFruit('fraise', alertFin); */