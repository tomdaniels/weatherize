console.log('starting app');

// set time out takes a function & time in miliseconds for the callback to be fired.
setTimeout(() => {
  console.log('time out');
}, 2000);

// 
setTimeout(() => {
  console.log('0 milisicond time out');
}, 0);

console.log('finished app');
