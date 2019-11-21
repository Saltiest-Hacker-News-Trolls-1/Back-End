const { deleteAccount } = require('../services');

// get user by id,
// take new passwod off of body, hash it
// set user's password to new password
// 
module.exports = async (req, res, next) => {
    try {
        const userDeleted = deleteAccount(req.userID)
        return res.json(userDeleted)
        // const tryAgain = new Error("Try Again!")
        // tryAgain.httpStatusCode = 400
        // throw tryAgain
    } catch (e) {
        next(e);
    }
};