const { decodeToken, getUserByID } = require('./../services')
// check req.headers,
// decode token
// return authorized: true if token decodes,
// return false if no token or token does not decode
module.exports = async (req, res, next) => {
    let user
    console.log('authReq', req.headers)
    // let authorized = false
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

// function ensureAuthenticated(
//     req: RequestWithUser,
//     res: Response,
//     next: NextFunction
// ): Response | undefined {
//     if (!(req.headers && req.headers.authorization)) {
//         return res.status(400).json({
//             status: "Please log in"
//         });
//     }

//     const header = req.headers.authorization.split(" ");
//     const token = header[1];
//     // console.log("usersAuthReq", header)

//     // console.log("usersAuthHeader", header)
//     // console.log("usersAuthToken", token)


//     decodeToken(token, (err: Error, payload: TokenData) => {
//         if (err) {
//             // console.log("usersAuthErr2", err)
//             return res.status(401).json({
//                 status: "Token has expired"
//             });
//         }
//         let knexUser;

//         knexUser = knex("users")
//             .where({ id: parseInt(payload.sub, 10) })
//             .first()
//             .then((user: KnexUser) => {
//                 req.user = user.id;
//                 return next();
//             })
//             .catch((e: Error) => {
//                 // console.log("usersAuthErr", e)
//                 return next(err)
//             });

//         return knexUser;
//     });
// }