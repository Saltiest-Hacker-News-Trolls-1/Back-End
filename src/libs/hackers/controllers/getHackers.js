const { getTopMeanestHackers } = require('../services')

module.exports = (req, res, next) => {
    const topHackers = getTopMeanestHackers(20)
    return res.json([{id: "john", negativity: -.5}, {id: "dan", negativity: .5}, {id: "sally", negativity: -0.0}])
}