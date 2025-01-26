const ValidationLogin =  (user, password) => {
  if(user === '' && password === '') {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  ValidationLogin,
}
