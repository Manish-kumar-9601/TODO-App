import { Router } from "express";
import { signUpUser } from "../controller/signUp.controller.js";
import { login } from "../controller/login.controller.js";

const router = Router();
router.post('/signUp', signUpUser)
router.post("/login", login)

export default router