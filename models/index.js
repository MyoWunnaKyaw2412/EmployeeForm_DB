const dbConfig = require('../Config/db.config');
const Sequelize = require('sequelize');


// const sequelize = new Sequelize('postgres://killo:RztpjXBkaKoALcz7KfkhH6KCgrlIWz2v@dpg-cldf3et4lnec73e8t5ag-a.singapore-postgres.render.com/blogs_qbic?ssl=true',
// {
//     dialect: dbConfig.dialect  
// })
const sequelize = new Sequelize(
    dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
        host: dbConfig.HOST, 
        dialect: dbConfig.dialect,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)

const db = {};

db.Sequelize = Sequelize; 
db.sequelize = sequelize;

db.users = require("./employee")(sequelize,Sequelize);
module.exports = db;