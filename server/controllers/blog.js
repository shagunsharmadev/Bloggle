import Blog from "../models/Blog.js"
import User from "../models/User.js"

export const createBlog = async (req,res) => {
    try {
        const {owner,title,content} = req.body
        if(!owner || !title || !content){
            return res.status(400).json({
                message:"All fields are required"
            })
        }
        const user = await User.findById(owner)
        if(!user) {
            return res.status(404).json({
                message:"User not found"
            })
        }
        const blog = await Blog.create({
            owner,
            title,
            content
        })

        await blog.save()
        user.blogs.push(blog)
        await user.save()
        
        return res.status(201).json({
            message: 'Blog Created Successfully!'
        })

    }catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}