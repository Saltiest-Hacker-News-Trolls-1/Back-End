const { getTopMeanestHackers } = require('../services')

module.exports = async(req, res, next) => {
    if(process.env.NODE_ENV==='development'){
        return res.json([{ id: "john", negativity: -.5 },
        { id: "dan", negativity: .5 },
        { id: "sally", negativity: -0.120390 },
        { id: "john", negativity: -.5 },
        { id: "dan", negativity: .52438 },
        { id: "sally", negativity: -0.0 },
        { id: "john", negativity: -.5 },
        { id: "dan", negativity: .512348 },
        { id: "sally", negativity: -0.0 },
        { id: "sally", negativity: -1.00000000000000000000 }])
    }
    const topHackers = await getTopMeanestHackers(20)
    return res.json(topHackers)
}