import express from "express"
import { login, register, getUserProfile, editBio, getUser } from "../controllers/user.js"

const router = express.Router()

router.post('/register',register)
router.post('/login',login)
router.get('/:username',getUserProfile)
router.put('/edit/bio',editBio)
router.get('/user/:id',getUser)

export default router