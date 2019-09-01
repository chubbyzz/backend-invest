const db = require('invest/app/models/index');

module.exports = {
    resetDatabase: async () => {
        await db.sequelize.sync({force: true});
    }
}