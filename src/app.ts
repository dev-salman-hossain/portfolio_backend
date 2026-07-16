import express, { Application, Request, Response } from "express";
import cors from 'cors'
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";
import port from './config/env.js'


const createApp=()=>{
    const app:Application = express()
    app.use(express.json())
    app.use(cors())
    app.use(rateLimit())
    app.use(cookieParser())
    return app
}


export default createApp