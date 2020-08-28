const db = require("../model");
const User = db.users;
const Customer = db.customers;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


exports.signin = async (req,res)=>{


    let user = await User.findOne({
        where:{email:req.body.email}
    });
    if(!user) return res.status(400).json({
        error:"Invalid email or Password"
    })

    const password =await bcrypt.compare(req.body.password,user.password);
    if(!password) return res.status(400).json({
        error:"email or password incorrect"
    })

    var token = jwt.sign({ id: user.id }, process.env.SECRET, {
        expiresIn: 86400 // 24 hours
    });
    // res.send(token);
    res.cookie("token",token,{expire:new Date()+9999});
    //send response to frontend
    const {user_id,email,firstname,role} = user;
    return res.send({token,user:{user_id,firstname,email,role}})


}