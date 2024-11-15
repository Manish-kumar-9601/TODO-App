import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import bodyParser from 'express'
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

import todoRouter from "./routes/todo.routes.js"
import userRouter from "./routes/user.routes.js"

app.use('/v1', todoRouter);
app.use('/v1', userRouter);


export default app;
