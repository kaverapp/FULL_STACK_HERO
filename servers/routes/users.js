let mongoose=require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/starter")
    .then(()=>console.log("database connected succesfully "))
    .catch(Error=>console.log("there was an error connecting the database",Error));


const User=new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    username: String,
    mobno: Number,
});

module.exports=mongoose.model("user",User);