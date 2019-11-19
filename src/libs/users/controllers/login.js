const { validateUser, encodeToken } = require('../services');

// get user by username,
// compare passwords
// if passwords match, encode a token with userId,
// return token 
module.exports = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const validUser = await validateUser(username, password);
    if (validUser) {
      const token = await encodeToken(validUser.id);
      return res.json({ token });
    }
    throw new Error('Try again')

  } catch (e) {
    next(e);
  }
};