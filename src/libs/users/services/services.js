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

const getUserByID = UserModel => async id => {
  id = parseInt(id, 10)
  return await UserModel.findOne({
    where: {
      id
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
  let payload;
  const foundUser = await UserModel.findAll({
    where: {
      name
    }
  });
  if (foundUser.length > 0) {
    console.log('validateUser', password, foundUser[0].password)
    const passwordsMatch = await compare(password, foundUser[0].password);

    if (passwordsMatch) {
      payload = foundUser[0]
    }
  }
  return payload;
};

const setUserPassword = UserModel => async (password, id) => {
  const foundUser = await UserModel.findOne({
    where: {
      id
    },
  })
  console.log('ggg', password)
  foundUser.password = password
  await foundUser.save()
  return foundUser
}

const deleteAccount = (UserModel) => async (id) => {
  id = parseInt(id, 10)
  const foundUser = await UserModel.findOne({
    where: {
      id
    },
  })
  console.log('zzz', foundUser)
  const userDeleted = await foundUser.destroy()
  return userDeleted
}

const encodeToken = userID => {
  console.log('encodeToken userID', userID)
  const payload = {
    exp: moment()
      .add(14, "days")
      .unix(),
    iat: moment().unix(),
    sub: userID
  };
  return jwt.encode(payload, secret);
}

const decodeToken = (token, callback) => {
  try {
    console.log("token", token)
    const payload = jwt.decode(token, secret);
    console.log("payload", payload)

    const now = moment().unix();
    // check if the token has expired
    if (now > payload.exp) callback("Token has expired.");
    else callback(null, payload);
  } catch (e) {
    console.log("decodeErr", e);
  }
}


module.exports = UserModel => ({
  saveUser: saveUser(UserModel),
  userExists: userExists(UserModel),
  encryptPassword: encryptPassword(UserModel),
  validateUser: validateUser(UserModel),
  getUserByID: getUserByID(UserModel),
  setUserPassword: setUserPassword(UserModel),
  deleteAccount: deleteAccount(UserModel),
  encodeToken,
  decodeToken,
});