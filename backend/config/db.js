const mongoose = require("mongoose");

const connectDB = ()=>{
    try {
     const conn =  mongoose.connect('mongodb://localhost:27017/orazo')
        console.log(`connected mongo`);
    } catch(error){
        console.log(`error:${error}`);
        process.exit();
    }
}
module.exports = connectDB