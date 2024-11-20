import { Router } from "express"
import { auth } from "../middleware/auth.js"
import {AddTodo } from '../controller/addTodo.controller.js'
import {GetTodo} from '../controller/getTodos.controller.js'
import { DeleteTodo } from "../controller/deleteTodo.controller.js"
import {EditTodo}from '../controller/editTodo.controller.js'
const router = Router()
router.post("/todo", AddTodo).delete('/todo', DeleteTodo).put('/todo',EditTodo)
router.get("/todo/:userId" , GetTodo)
export default router