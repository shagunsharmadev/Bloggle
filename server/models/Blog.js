import mongoose from 'mongoose'

const blogSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    title: {
        type:String,
        required:true
    },
    content: {
        type:String,
        required:true
    }
},{timestamps:true})

export default mongoose.model("Blog", blogSchema);