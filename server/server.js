const http=require ("http")
const app=require ("./app")
const mongoose=require("mongoose")
let PORT=5000;
//MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/nodeTasks")
.then(()=>{
    console.log("DB is Connected");
}).catch((err)=>{
    console.log(err);
})
let server=http.createServer(app)
server.listen(PORT,(err)=>{
    if(err)console.log(err);
    console.log(`server is running on port${PORT}...`);
})