import express from "express"
import { login, register, getUserProfile } from "../controllers/user.js"

const router = express.Router()

router.post('/register',register)
router.post('/login',login)
router.get('/:username',getUserProfile)

export default router