import express from "express"
import dotenv from "dotenv"
import connectDB from "./database/database.js"
import userRoutes from "./routes/user.js" 
import blogRoutes from './routes/blog.js'
import cors from 'cors'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({limit:'50mb',extended:true}))

app.use('/api',userRoutes)
app.use('/api',blogRoutes)

app.listen(process.env.PORT,() => {
    console.log(`Server is running on port ${process.env.PORT}`)
})

connectDB()
