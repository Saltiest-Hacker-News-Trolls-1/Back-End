const { encryptPassword, getUserByID, setUserPassword } = require('../services');

// get user by id,
// take new passwod off of body, hash it
// set user's password to new password
// 
module.exports = async (req, res, next) => {
    try {
        const { password } = req.body;
        const newPassword = encryptPassword(password)
        const userUpdated = setUserPassword(newPassword, req.userID)
        return req.json(userUpdated)
        // const tryAgain = new Error("Try Again!")
        // tryAgain.httpStatusCode = 400
        // throw tryAgain
    } catch (e) {
        next(e);
    }
};