const { getTopMeanestHackers } = require('../services')

module.exports = (req, res, next) => {
    const topHackers = getTopMeanestHackers(20)
    return res.json(topHackers)
}