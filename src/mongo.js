const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://charityproject.zhvcaht.mongodb.net/")
.then(()=>{
    console.log("Mongo Db connected");
})
.catch(err=>{
    console.log(err);
})

const newSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true 
    }
})

const collection = mongoose.model("collection",newSchema);
module.exports = collection;