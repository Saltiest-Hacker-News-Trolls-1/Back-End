const { getTopHackers } = require('../services')

module.exports = async (req, res, next) => {
    if (process.env.NODE_ENV === 'development') {
        return res.json([{ id: "john", negativity: -.5, positivity: 0.5, commentcount: 25 },
        { id: "dan", negativity: .5, positivity: 52438, commentcount: 78 },
        { id: "sally", negativity: -0.120390, positivity: 0.0, commentcount: 1 },
        { id: "john", negativity: -.5, positivity: -0.120390, commentcount: 23 },
        { id: "dan", negativity: .52438, positivity: -1.00000000000000000000, commentcount: 43 },
        { id: "sally", negativity: -0.0, positivity: -0.120390, commentcount: 560 },
        { id: "john", negativity: -.5, positivity: 5, commentcount: 90 },
        { id: "dan", negativity: .512348, positivity: 5, commentcount: 44 },
        { id: "sally", negativity: 0.0, positivity: .52438, commentcount: 12 },
        { id: "sally", negativity: -1.00000000000000000000, positivity: 1, commentcount: 41 }])
    }
    const topHackers = await getTopHackers(20)
    return res.json(topHackers)
}