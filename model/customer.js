module.exports = (sequelize,Sequelize)=>{
    const Customer = sequelize.define("customers",{
        customer_id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        firstname: {
            type:Sequelize.STRING,
            validate:{
                notEmpty:true,
                min:5,
                max:15,
                len: [4,10]
            }
        },

        lastname: {
            type:Sequelize.STRING,
            validate:{
                notEmpty:true,
                min:5,
                max:15,
                len: [4,10]
            }
        },
        email:{
            type:Sequelize.STRING,
            validate:{
                notEmpty:true,
                isEmail: true,
                len:[5-20]
            }
        },
        address: {
            type:Sequelize.STRING,
            validate:{
                notEmpty:true,
                min:5,
                max:15,
                len: [4,10]
            }
        },

        contactno: {
            type:Sequelize.STRING,
            validate:{
                notEmpty:true,
                min:5,
                max:15,
                len: [4,10]
            }
        },

        password:{
            type: Sequelize.STRING,
            validate:{
                notEmpty: true,
                len:[5-10]
            }
        },
        user_id:{
            type:Sequelize.INTEGER,
            references:     {
                model:"users",
                key: 'user_id'
            }
        }

    },{ timestamps: true});

    Customer.associate = function(models) {
        Customer.belongsTo(models.users, {foreignKey: 'user_id'});
        Customer.hasMany(models.orders,{foreignKey:'customer_id'});
        Customer.hasOne(models.orders,{foreignKey:'customer_id'});

    };

    return Customer;
}