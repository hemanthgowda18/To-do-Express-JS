const express=require ("express")
// const taskRouter=require("./routes/taskRoutes")
const taskRouter=require("./routes/taskRoutes1")
//app instance
let app=express()
//In Built MiddleWare to Process Incoming Data
app.use(express.json())
app.use("/app/v1/tasks",taskRouter)

module.exports=app;