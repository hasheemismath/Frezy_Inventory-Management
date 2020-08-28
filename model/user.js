module.exports = (sequelize,Sequelize)=>{
    const Users = sequelize.define("users",{

        user_id:{
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

        role: {
            type:   Sequelize.ENUM,
            values: ['Admin', 'Manager', 'Officer'],
            defaultValue: 'Officer',
            validate:{
                notEmpty:true,
                len:[10-15]
            },
            message :"Role name should be enum value"
        },

        password:{
            type: Sequelize.STRING,
            validate:{
                notEmpty: true,
                len:[5-10]
            }
        }
    },{ timestamps: true });

    Users.associate = function(models) {
        Users.hasOne(models.customers, {foreignKey: 'user_id'})
    };

    return Users;
}
