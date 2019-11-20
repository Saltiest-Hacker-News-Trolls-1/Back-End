const { decodeToken, getUserByID } = require('./../services')
// check req.headers,
// decode token
// return authorized: true if token decodes,
// return false if no token or token does not decode
module.exports = async (req, res, next) => {
    let user
    console.log('authReq', req.headers)
    if (!(req.headers && req.headers.authorization)) {
        return res.status(400).json({ status: "Please log in'" });
    }
    const token = req.headers.authorization

    console.log('headerTOken', token)
    decodeToken(token, (err, payload) => {
        if (err) {
            console.log("usersAuthErr2", err)
            // return res.status(400).json({ status: "Please log in'" });
        }
        console.log('tokenPayoad', payload.sub)
        user = getUserByID(payload.sub)
    });
    if(user){
        req.userID = user.id
        return next()
    }

    return res.status(400).json({ status: "Please log in'" });
};
