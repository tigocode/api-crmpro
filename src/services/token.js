const jwt = require('jsonwebtoken');

const GerarToken = (user, JWT_SECRET) => {
  const userLog = { 'user': user }
  const token = jwt.sign(userLog, JWT_SECRET, { expiresIn: '365d' });

  return token;
};

module.exports = {
  GerarToken,
}
