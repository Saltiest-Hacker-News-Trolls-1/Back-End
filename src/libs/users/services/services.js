const { hash, compare } = require('bcrypt')

const saveUser = (UserModel) => async (name, password) => {
  const NewUser = await UserModel.create({ name, password })
  return NewUser
}

const userExists = UserModel => async username => {
  const Users = await UserModel.findAndCountAll({
    where: {
      name: username
    },
    limit: 1
  })
  return Users.count > 0
}

const encryptPassword = () => async password => {
  if (!password) {
    throw new Error('Password is required');
  }
  return hash(password, 2);
}

module.exports = UserModel => ({
  saveUser: saveUser(UserModel),
  userExists: userExists(UserModel),
  encryptPassword: encryptPassword(UserModel),
  // validateUser: validateUser(UserModel),
  // loginUser: loginUser(UserModel),
  // logOut: logoutUser(UserModel)
});