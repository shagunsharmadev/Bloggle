import generateToken from '../helper/generateToken.js'
import User from '../models/User.js'
import bcrypt from 'bcrypt'

export const register = async(req,res) => {
    try {
       const {username,email,password} = req.body
       if(!username || !email || !password) {
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
        password:hashedPass
       })

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
