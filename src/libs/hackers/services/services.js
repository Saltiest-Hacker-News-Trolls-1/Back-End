const getTopMeanestHackers = db => async(x) => {
    return [{id: "john", negativity: -.5}, {id: "dan", negativity: .5}, {id: "sally", negativity: -0.0}]
}

module.exports =(db) => ({
    getTopMeanestHackers: getTopMeanestHackers(db)
})