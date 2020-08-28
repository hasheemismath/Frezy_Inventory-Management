module.exports = (sequelize,Sequelize)=>{
    const OrderDetails = sequelize.define("orderDetails",{
        // orderdetails_id:{
        //     type: Sequelize.INTEGER,
        //     autoIncrement: true,
        //     primaryKey: true
        // },
        checkNumber: {
            type:Sequelize.INTEGER
        },

        priceEach: {
            type:Sequelize.DOUBLE,
            validate:{
                notEmpty:true,
                min:5,
                max:45,
                len: [4,20]
            }
        },
        orderlineNumber: {
            type:Sequelize.DOUBLE,
            validate:{
                notEmpty:true,
                min:5,
                max:45,
                len: [4,20]
            }
        },
        order_id:{
            type:Sequelize.INTEGER,
            references:     {
                model:"orders",
                key: 'order_id'
            },
            primaryKey: true
        },
        product_id:{
            type:Sequelize.INTEGER,
            references:     {
                model:"products",
                key: 'product_id'
            },
            primaryKey: true
        }


    },{ timestamps: true});

    OrderDetails.associate = function(models) {
        OrderDetails.belongsTo(models.products, {foreignKey: 'product_id'});
        OrderDetails.belongsTo(models.orders, {foreignKey: 'order_id'})

    };

    return OrderDetails;
}