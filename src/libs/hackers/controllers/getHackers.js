const { getTopMeanestHackers } = require('../services')

module.exports = async(req, res, next) => {
    const topHackers = await getTopMeanestHackers(20)
    return res.json(topHackers)
}