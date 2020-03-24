//-------------  
let message = function(){
    return "Bonjour!!!";
}
let messageC = () => {
    return "Bonjour!!!";
}
console.log(messageC() == message());

//-------------  
let somme = function(a){
    return a+1;
}
let sommeN = (a) => {
    return a+1;
}
console.log('La somme est --------: '+ sommeN(2));


//--------------
function getRandomNumber(){
    return Math.random()
}

let randomNumber = () => { return Math.random() }
console.log(getRandomNumber()+ "   " + randomNumber())

//---------------
/* document.addEventListener(onclick,function(){
    console.log('click');
})

document.addEventListener(onclick,() => console.log('click')) */


//---------------
class Person{
    constructor(name){
        this.name = name
    }
    printNameArrow(){
        setTimeout(() => {
            console.log("Arrow: "+ this.name)
        }, 100);
    }
}

let person = new Person('yassine');
person.printNameArrow();


//--------------- multiple parameters
let sum = (...args) => {
    let sum =0;
    for(let i=0; i<args.length; i++){
        sum+= args[i];
    }
    return sum;
}


console.log(sum(1,2,3));
console.log(sum(1,2,3,4));