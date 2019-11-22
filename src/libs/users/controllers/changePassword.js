const { encryptPassword, setUserPassword } = require('../services');

// get user by id,
// take new passwod off of body, hash it
// set user's password to new password
// 
module.exports = async (req, res, next) => {
    try {
        const { password } = req.body;
        console.log('changePasslala', password, req.userID)
        const newPassword = await encryptPassword(password)
        const userUpdated = setUserPassword(newPassword, req.userID)
        return res.json(userUpdated)
        // const tryAgain = new Error("Try Again!")
        // tryAgain.httpStatusCode = 400
        // throw tryAgain
    } catch (e) {
        next(e);
    }
};