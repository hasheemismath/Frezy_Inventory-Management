module.exports = (sequelize,Sequelize)=>{
    const Product = sequelize.define("products",{
        product_id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        productName: {
            type:Sequelize.STRING,
            validate:{
                notEmpty:true,
                min:5,
                max:15,
                len: [4,10]
            }
        },

        description: {
            type:Sequelize.STRING,
            validate:{
                notEmpty:true,
                min:5,
                max:45,
                len: [4,20]
            }
        },
        inStock:{
            type:Sequelize.INTEGER,
            validate:{
                notEmpty:true,
                len:[5-20]
            }
        },
        price: {
            type:Sequelize.DOUBLE,
            validate:{
                notEmpty:true
            }
        },
        productOne_id:{
            type:Sequelize.INTEGER,
            references:     {
                model:"productOne",
                key: 'productOne_id'
            }
        },
        category_id:{
            type:Sequelize.INTEGER,
            references:     {
                model:"categories",
                key: 'category_id'
            }
        }

    },{ timestamps: true});

    Product.associate = function(models) {
        Product.hasMany(models.orderDetails, {foreignKey: 'order_id'});
        Product.hasOne(models.productOne, {foreignKey: 'productOne_id'});
        Product.hasOne(models.categories, {foreignKey: 'category_id'});

    };

    return Product;
}