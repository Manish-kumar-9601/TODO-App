import { Router } from "express"
import { registerTodo } from "../controller/registerTodo.controller.js"
import { getTodo } from "../controller/getTodos.controller.js"
import { auth } from "../middleware/auth.js"
import { deleteTodo } from "../controller/deleteTodo.controller.js"
import { editTodo } from "../controller/editTodo.controller.js"
const router = Router()
router.post("/todo",auth, registerTodo).get("/todo",auth, getTodo).delete('/todo',auth, deleteTodo).put('/todo',auth,editTodo)
export default router