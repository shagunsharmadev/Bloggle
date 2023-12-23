import generateToken from '../helper/generateToken.js'
import User from '../models/User.js'
import bcrypt from 'bcrypt'

export const register = async(req,res) => {
    try {
       const {username,email,password,name} = req.body
       if(!username || !email || !password || !name) {
        return res.status(400).json ({
            message:"All fields are required"
        })
       }
    
       const user = await User.findOne({email})
       if(user) {
        return res.status(400).json ({
            message:"User already exists"
        })
       }
       const hashedPass = await bcrypt.hash(password,10)

       const newUser = await User.create({
         username,
         email,
         name,
         avatar: {
           public_id: "Bloggle/Profiles/default_profile_nsnxfk",
           url: "https://res.cloudinary.com/dnlgbefvz/image/upload/v1703334115/Bloggle/Profiles/default_profile_nsnxfk.webp",
         },
         password: hashedPass,
       });

       await newUser.save()

       const token = generateToken(newUser._id)

       const userToSend = await User.findById(newUser._id).select("-password")

       return res.status(201).cookie("token",token).json ({
        message:"User Created Successfully",
        user:userToSend,
        token
       })

    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}

export const login = async(req,res)=>{
    try {
        const {email,password} = req.body
        if (!email || !password) {
            return res.status(400).json({
                message:"All fields are required"
            })
        }

        const user = await User.findOne({email})
        if (!user) {
            return res.status(404).json({
                message:"User not found"
            })
        }

        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch) {
            return res.status(400).json({
                message:"Password doesn't match"
            })
        }

        const token = generateToken(user._id)

        const userToSend = await User.findById(user._id).select("-password")

        return res.status(200).cookie("token",token).json({
            message:"Login Successfully",
            user:userToSend,
            token
        })
    } catch (error) {
        return res.status(500).json ({
            message:error.message
        })
        
    }
}

export const getUserProfile = async (req,res) => {
    try {

        const {username} = req.params
        const user = await User.findOne({ username }).populate({
          path: "blogs",
          model: "Blog",
          populate: {
            path: "owner",
            model: "User",
          },
        });
        if(!user) {
            return res.status(404).json({
                message:"User not found"
            })
        }
        
        res.status(200).json({
            user
        })
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })        
    }
}

export const editBio =async (req,res) => {
    try {
        const {username, bio} = req.body
        const user =await User.findOne({username})
        if(!user) {
            return res.status(404).json({
                message:"User not found"
            })
        }     
        user.bio = bio
        
        await user.save()
        res.status(200).json({
            message:"Bio Updated Successfully"
        })
    }catch(error) {
        return res.status(500).json({
            message:error.message
        })
    }
}

export const getUser = async (req,res) => {
    try {
        const {id} = req.params
        const user = await User.findById(id)
        if(!user) {
            return res.status(404).json({
                message:"User not found"
            })
        }
        res.status(200).json({
            user
        })
    }catch(error) {
        return res.status(500).json({
            message:error.message
        })
    }
}
