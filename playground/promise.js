var somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('hey it worked!');
    reject('this is an error')
  }, 2500);
});

// can only resolve/reject a promise once
// once the state is set to resolve/rejected it can't be changed

somePromise.then(message => {
    console.log(`mesage: ${message}`);
})
.catch(error => console.log(`error: ${error}`))
