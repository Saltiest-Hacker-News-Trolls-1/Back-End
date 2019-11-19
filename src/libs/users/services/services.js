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

const validateUser = UserModel => async (username, password) => {
  let payload;
  const foundUser = await UserModel.findOne({ username });
  if (foundUser) {
    const passwordsMatch = await compare(password, foundUser.password);
    if (passwordsMatch) {
      // payload = { id: foundUser.id, username: foundUser.username };
      console.log('worked', foundUser)
    }
  }
  return payload;
};

const loginUser = UserModel => 

module.exports = UserModel => ({
  saveUser: saveUser(UserModel),
  userExists: userExists(UserModel),
  encryptPassword: encryptPassword(UserModel),
  validateUser: validateUser(UserModel),
  loginUser: loginUser(UserModel),
  // logOut: logoutUser(UserModel)
});