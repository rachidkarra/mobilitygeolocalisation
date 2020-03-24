let disOrdredTable = [03, 4, 100, 20, 33];
console.log(disOrdredTable);
console.log(disOrdredTable.sort()) 


/* However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

Because of this, the sort() method will produce an incorrect result when sorting numbers.

You can fix this by providing a "compare function"  */

console.log(disOrdredTable.sort(function(a,b){return a-b;}));


//---------------------------------------------------//

let fruits = new Array('orange', 'kiwi', 'fraise');
let autreFruits = new Array('cerises', 'ananas');
// concatenation et tri
console.log(fruits.concat(autreFruits).sort());
//  Rend un string
let stringfyFruits = fruits.join(',');
console.log(typeof stringfyFruits);


//------------- Filter method on array---------------------//
 const fruitSouk = [{nom : "pomme", prix : 3},
               {nom : "banane", prix : 6},
               {nom : "fraise", prix : 10}];

const filtredfruitsSouk = fruitSouk.filter((fruit) => {
    return fruit.prix >5 ;
})
console.log(filtredfruitsSouk);


//------------- Find method on array---------------------//
 const fruitSouk = [{nom : "pomme", prix : 3},
               {nom : "banane", prix : 6},
               {nom : "fraise", prix : 10}];

const filtredfruitsSouk = fruitSouk.find((fruit) => {
    return fruit.nom == 'fraise' ;
})
console.log(filtredfruitsSouk); 

//------------- forEach method on array---------------------//
const fruitSouk = [{nom : "pomme", prix : 3},
               {nom : "banane", prix : 6},
               {nom : "fraise", prix : 10}];

fruitSouk.forEach((fruit) => {
   console.log(fruit.nom);
})
