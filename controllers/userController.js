const db = require("../model");
const User = db.users;
const Customer = db.customers;
const bcrypt = require("bcrypt");


exports.getUser = async (req,res)=>{



    res.status(200).json(await User.findAll({
        where: {
            firstname: "Hasheem1"
        },
        include: Customer
    }))

}

exports.createUser=async (req,res)=>{
    let user = await User.findOne({
        where:{email:req.body.email}
    });
    if(user) return res.status(400).json({error:"User already Registered"});
    user = new User(req.body);


    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password,salt);

    user.save()
        .then(user => {
            res.send({ message: "User was registered successfully!" ,user});

        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
}

exports.createCustomer=(req,res)=>{
    Customer.create(req.body)
        .then(user => {
            res.send({ message: "Customer was registered successfully!" ,user});

        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
}