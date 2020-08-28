module.exports = (sequelize,Sequelize)=>{
    const Order = sequelize.define("orders",{
        order_id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        orderDate: {
            type:Sequelize.DATE,
            validate:{
                notEmpty:true,
                min:5,
                max:15,
                len: [4,10]
            }
        },

        requiredDate: {
            type:Sequelize.DATE,
            validate:{
                notEmpty:true,
                min:5,
                max:45,
                len: [4,20]
            }
        },
        shippedDate:{
            type:Sequelize.DATE,
            validate:{
                notEmpty:true,
                len:[5-20]
            }
        },
        status: {
            type:Sequelize.STRING,
            validate:{
                notEmpty:true
            }
        },
        comment: {
            type:Sequelize.STRING,
            validate:{
                notEmpty:true
            }
        },
        customer_id:{
            type:Sequelize.INTEGER,
            references:     {
                model:"customers",
                key: 'customer_id'
            }
        }

    },{ timestamps: true});

    Order.associate = function(models) {
        Order.belongsTo(models.customers, {foreignKey: 'customer_id'});
        Order.hasMany(models.orderDetails, {foreignKey: 'order_id'})

    };

    return Order;
}