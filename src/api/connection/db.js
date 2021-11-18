require("sequelize")

module.exports = {
    dialect: 'mysql',
    host: '34.151.232.43',
    username: 'root',
    password: '7797',
    database: 'emotions',
    define: {
        timezone: 'UTC-03:00',
        timestamps: true,
    },
}