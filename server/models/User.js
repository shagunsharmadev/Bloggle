import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        unique:true,
        required:true,
    },
    email: {
        type:String,
        unique:true,
        required:true,
    },
    password: {
        type:String,
        required:true,
        minlength:6
    },
    avatar:{
        public_id:String,
        url:String,
    },
    name:{
        type:String,
        required:true,
    },
    bio:{
        type:String,
    },
    blogs:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Blog"
    }]

},{
    timestamps:true
})

export default mongoose.model("User",userSchema)