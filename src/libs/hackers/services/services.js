const getTopHackers = db => async (x) => {
    const topXHackers = await db.sequelize.query(`SELECT negativity, positivity, commentcount, id  FROM users WHERE negativity IS NOT NULL ORDER BY commentcount DESC LIMIT 10;`, {
        type: db.sequelize.QueryTypes.SELECT
    })
    return topXHackers
}

const getMeanestHackers = db => async()=>{
    try{
        const meanHackers = await db.sequelize.query(`SELECT negativity, karma, commentcount, id  FROM users WHERE commentcount > 50 IS NOT NULL ORDER BY negativity DESC LIMIT 10;`, {
            type: db.sequelize.QueryTypes.SELECT,
        })
        return meanHackers
    } catch(e){
        console.log('meanesterror', e)
    }
}

module.exports = (db) => ({
    getTopHackers: getTopHackers(db),
    getMeanestHackers: getMeanestHackers(db)
    
})