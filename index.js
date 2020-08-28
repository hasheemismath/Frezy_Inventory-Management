const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
require('dotenv').config();
const app = express();

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(express.json())
//middlewares
app.use(bodyparser.urlencoded({
    extended: true
}));


const db = require("./model");

// db.sequelize.sync({force:true}).then(()=>{
//     console.log("Drop and resync Db");
// })

// db.sequelize
//     .query('SET FOREIGN_KEY_CHECKS = 0', {raw: true})
//     .then(function(results) {
//         db.sequelize.sync({force: true});
//     });

 db.sequelize.sync();

const userRoute = require('./routes/userRoute');
const authRoute = require('./routes/user.authRoute');

app.use('/api',userRoute);
app.use('/api',authRoute);

const port = process.env.PORT || 8000;
app.listen(port,()=>{
    console.log(`Server is up and running port: ${port}`)
})