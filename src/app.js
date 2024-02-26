import  express  from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors'


const app =  express()

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true 
}))

app.use(express.json({limit : "16kb"}))
app.use(express.urlencoded({extended :true , limit : "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

//routes import // as this is routes thats why import in middle standard 
import userRouter from './models/user.routes.js';
//routes declaration
app.use("/api/v2/users",userRouter);

export {app}