function AjouterFruit() {
    var fruit = document.getElementById("fruit");
    //L'element
     var newLi = document.createElement("li");
     // Contenu
     var newContent = document.createTextNode(fruit.value);
     //Ajout text
     newLi.appendChild(newContent);

     //var laListe =  document.getElementById("liste").innerHTML ;

     document.getElementById("liste").appendChild(newLi);
  }