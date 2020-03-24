function AjouterFruits() {
    let request = new XMLHttpRequest();
    request.open('GET', 'data.json');
    request.onreadystatechange = () => {
        if (request.status == 200 && request.readyState == 4) {
            let fruits = JSON.parse(request.responseText);
            for (let i = 0; i < fruits.length; i++) {
                AjouterFruit(fruits[i], 'liste');
                // console.log(fruits[i]);
            }
        }
    }
    request.send();
}

function AjouterFruit(fruit, destination) {
    var newLi = document.createElement("li");
    var newContent = document
            .createTextNode(fruit.nom + '  prix: ' + fruit.prix);
    newLi.appendChild(newContent);
    document.getElementById(destination).appendChild(newLi);
}