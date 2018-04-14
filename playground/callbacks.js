var getUser = (id, callback) => {
  let user = {
    id: id,
    name: 'Carly'
  };

  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(6, (user) => {
  console.log(user);
});
