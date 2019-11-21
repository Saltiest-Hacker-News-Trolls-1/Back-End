const getTopMeanestHackers = db => async(x) => {
    const topXHackers = await db.sequelize.query(`SELECT TOP ${x} users ORDER BY DESC;`)
    return topXHackers
}

module.exports =(db) => ({
    getTopMeanestHackers: getTopMeanestHackers(db)
})