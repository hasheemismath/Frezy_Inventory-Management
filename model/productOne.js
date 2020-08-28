module.exports = (sequelize,Sequelize)=>{
    const ProductOne = sequelize.define("productOne",{
        productOne_id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        textDescription: {
            type:Sequelize.STRING,
            validate:{
                notEmpty:true,
                min:5,
                max:45,
                len: [4,20]
            }
        },
        image:{
            type:Sequelize.BLOB
        }

    },{ timestamps: true});

    ProductOne.associate = function(models) {
        ProductOne.hasMany(models.products, {foreignKey: 'productOne_id'})

    };

    return ProductOne;
}