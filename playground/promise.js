var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('Arguments must be numbers');
      }
    }, 1500);
  });
};

asyncAdd(5, 2).then((result) => {
  console.log(`result: ${result}`);
}, (error) => {
  console.log(`error: ${error}`)
});

// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('hey it worked!');
//     // reject('this is an error')
//   }, 2500);
// });
//
// // can only resolve/reject a promise once
// // once the state is set to resolve/rejected it can't be changed
// 
// somePromise.then(message => {
//     console.log(`mesage: ${message}`);
// })
// .catch(error => console.log(`error: ${error}`))
//
// // You can provide two functions as arguments to the then prototype on promises.
// // instead of explicitly chaining .then().catch();
//
// somePromise.then((result) => {
//   console.log(`message: ${result}`)
// }, (errorMessage) => {
//   console.log(`error: ${errorMessage}`)
// });
