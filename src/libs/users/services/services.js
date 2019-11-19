const { hash, compare } = require('bcrypt')
const jwt = require('jwt-simple')
const moment = require('moment')

let secret = process.env.TOKEN_SECRET || "changeme";

const saveUser = (UserModel) => async (name, password) => {
  const NewUser = await UserModel.create({ name, password })
  return NewUser
}

const userExists = UserModel => async name => {
  const Users = await UserModel.findAndCountAll({
    where: {
      name
    },
    limit: 1
  })
  return Users.count > 0
}

const getUserByName = UserModel => async name => {
  return UserModel.findOne({
    where: {
      name
    },
  })
}

const encryptPassword = () => async password => {
  if (!password) {
    throw new Error('Password is required');
  }
  return hash(password, 2);
}

const validateUser = UserModel => async (name, password) => {
  let payload = false
  const foundUser = await UserModel.findAll({
    where: {
      name
    }
  });
  if (foundUser.length > 0) {
    const passwordsMatch = await compare(password, foundUser[0].password);

    if (passwordsMatch) {
      payload = true
    }
  }
  return payload;
};


const encodeToken = () => async userID => {
  const payload = {
    exp: moment()
      .add(14, "days")
      .unix(),
    iat: moment().unix(),
    sub: userID
  };
  return jwt.encode(payload, secret);
}

module.exports = UserModel => ({
  saveUser: saveUser(UserModel),
  userExists: userExists(UserModel),
  encryptPassword: encryptPassword(UserModel),
  validateUser: validateUser(UserModel),
  encodeToken: encodeToken(UserModel),
  // logOut: logoutUser(UserModel)
});