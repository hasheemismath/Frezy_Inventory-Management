const config = require("../config/db.config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        operatorsAliases:false,

        pool:{
            max:config.pool.max,
            min:config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user")(sequelize,Sequelize);
db.customers = require("./customer")(sequelize,Sequelize);
db.category = require("./category")(sequelize,Sequelize);
db.order = require("./order")(sequelize,Sequelize);
db.orderDetails = require("./orderDetails")(sequelize,Sequelize);
db.payment = require("./payment")(sequelize,Sequelize);
db.productOne = require("./productOne")(sequelize,Sequelize);
db.products = require("./products")(sequelize,Sequelize);



// db.users.hasOne(db.customers,{foreignKey: 'user_id'});
// db.customers.belongsTo(db.users,{foreignKey: 'user_id'});

//The possible choices are RESTRICT, CASCADE, NO ACTION, SET DEFAULT and SET NULL.

// db.role.belongsToMany(db.user,{
//     through: "user_roles",
//     foreignKey:"roleId",
//     otherKey:"userId"
// });
//
// db.user.belongsToMany(db.role,{
//     through:"user_roles",
//     foreignKey: "userId",
//     otherKey: "roleId"
// })

// db.ROLES = ["user","admin","moderator"];

module.exports = db;

