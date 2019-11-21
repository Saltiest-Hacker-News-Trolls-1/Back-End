const getTopMeanestHackers = db => async(x) => {
    const topXHackers = await db.sequelize.query(`SELECT negativity, id  FROM users WHERE negativity IS NOT NULL ORDER BY negativity ASC  LIMIT 10;`)
    return topXHackers
}

module.exports =(db) => ({
    getTopMeanestHackers: getTopMeanestHackers(db)
})