require("sequelize")

module.exports = {
    dialect: 'mysql',
    host: process.env.CLEARDB_DATABASE_URL,
    username: 'b8d4f404a89fc6',
    password: '7c516d84',
    database: process.env.CLEARDB_DATABASE,
    define: {
        timestamps: true,
    },
}