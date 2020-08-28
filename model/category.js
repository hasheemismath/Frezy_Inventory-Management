module.exports = (sequelize,Sequelize)=>{
    const Category = sequelize.define("categories",{
        category_id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        CategoryName: {
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
        }

    },{ timestamps: true});

    Category.associate = function(models) {
        Category.hasMany(models.products, {foreignKey: 'category_id'})
    };

    return Category;
}