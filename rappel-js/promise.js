var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//1 -------
/* let p = new Promise((resolve, reject) => {
  let a = 1;
  if (a == 1) {
    resolve('Success');
  } else {
    reject('Failed');
  }
});

p.then((message) => {       // message c'est ce que nous avons passer dans resolve(...)
  console.log('this is the then message ' + message);
}).catch((message) => {
  console.log('this is the catch message ' + message);
}); */

// 2-------
/*
var promise = new Promise(function(resolve, reject) {
    resolve(1);
  });

  promise.then(function(val) {
    console.log(val); // 1
    return val + 2;
  }).then(function(val) {
    throw new SyntaxError('----------------Erreur declenchee------------------');
    console.log(val); // 3
  }).catch((val) => {
    console.log('Rejected '+val);
  })
*/

//3-------
 function get(url) {
  // Return a new promise.
  return new Promise(function (resolve, reject) {
    // Do the usual XHR stuff
    var req = new XMLHttpRequest();

    req.open('GET', url);

    req.onload = function () {
      // This is called even on 404 etc
      // so check the status
      if (req.status == 200) {
        // Resolve the promise with the response text
        resolve(req.responseText);
      }
      else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(req.statusText));
      }
    };

    // Handle network errors
    req.onerror = function () {
      reject(Error("Network Error"));
    };

    // Make the request
    req.send();
  });
} 

//------- use promise with then(success, fail)
 get('http://jsonplaceholder.typicode.com/todos/1').then(function (response) {
  console.log("Success!", response);
}, function (error) {
  console.error("Failed!", error);
}) 

//------- use promise with then(success) catch
/* get('http://jsonplaceholder.typicode.com/todos/1')
  .then(function (response) {
    console.log("Success!", response);
  })
  .catch(function (error) {
    console.error("Failed!", error);
  }) */