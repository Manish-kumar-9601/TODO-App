import { Router } from "express";
import { GetUser, SignUpUser } from "../controller/signUp.controller.js";
import { Login } from "../controller/login.controller.js";

const router = Router();
router.post('/signUp', SignUpUser)
router.post("/login", Login)
router.get("/getUser",GetUser)
export default router