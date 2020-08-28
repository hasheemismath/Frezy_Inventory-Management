module.exports = (sequelize,Sequelize)=>{
    const Payment = sequelize.define("payments",{
        payment_id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        checkNumber: {
            type:Sequelize.INTEGER
        },

        paymentDate: {
            type:Sequelize.DATE,
            validate:{
                notEmpty:true,
                min:5,
                max:45,
                len: [4,20]
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

    Payment.associate = function(models) {
        Payment.belongsTo(models.customers, {foreignKey: 'customer_id'})
    };

    return Payment;
}