import express from "express"      ////calling express
import  dotenv from "dotenv"       /////calling  dotenv
import AutRoutes from "./routes/auth.js"      /////calling autroutes from auth.js
import DbCon from "./utils/db.js"     /////mongodb connection
dotenv.config()


DbCon()             /////mongodb connection


const PORT=process.env.PORT          ///////port imported from .env file

const app=express()


app.use(express.json())


app.use('/auth',AutRoutes)   // exported from auth.js 

app.get('/',(req,res)=>{
    res.send('hello world')      /////use to see is the server is running or not
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)          /////import from .env as a port 
})