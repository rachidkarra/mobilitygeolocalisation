/* const fetch = require('node-fetch');

let promise = fetch('http://jsonplaceholder.typicode.com/todos/1')

promise.then(res => res.json())
    .then(user => console.log('The title is: ------- ', user.title))
    .catch(err => console.log('The error is: ------  ', err));
    
console.log('Synchronous'); */



const fetch = require('node-fetch');
const url = 'https://randomuser.me/api/?results=10';
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let authors = data.results;
  return authors.map(function(author) {
      console.log(author.name.first);
  })
})
.catch(function(error) {
  console.log(error);
});   