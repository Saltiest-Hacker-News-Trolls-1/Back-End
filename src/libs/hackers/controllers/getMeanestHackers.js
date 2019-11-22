const { getMeanestHackers } = require('../services')

module.exports = async (req, res, next) => {
    console.log('hhh', meanestHackers)

    try {
        if (process.env.NODE_ENV === 'development') {
            return res.json([{ id: "john", negativity: -.5, compoundkarma: 250, commentcount: 25 },
            { id: "dan", negativity: .5, compoundkarma: 15, commentcount: 78 },
            { id: "sally", negativity: -0.120390, compoundkarma: 10, commentcount: 1 },
            { id: "john", negativity: -.5, compoundkarma: 300, commentcount: 23 },
            { id: "dan", negativity: .52438, compoundkarma: 65, commentcount: 43 },
            { id: "sally", negativity: -0.0, compoundkarma: 234, commentcount: 560 },
            { id: "john", negativity: -.5, compoundkarma: 8, commentcount: 90 },
            { id: "dan", negativity: .512348, compoundkarma: 234, commentcount: 44 },
            { id: "sally", negativity: 0.0, compoundkarma: 456, commentcount: 12 },
            { id: "sally", negativity: -1.00000000000000000000, compoundkarma: 5, commentcount: 41 }])
        }
        const meanestHackers = await getMeanestHackers()
    
        return res.json(meanestHackers)
    } catch(e){
        console.log("hhhh", e)
    }
    
}