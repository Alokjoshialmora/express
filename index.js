const express=require("express")
const fs=require("fs")
const app=express()
port=3000
app.get('/',(req,res)=>{
    res.send("Hello World,How are you?")
})

app.get('/getHotels',(req,res)=>{
fs.readFile("./hotels.json",(err,data)=>{
    res.send(JSON.parse(data))
})
}
)

app.listen(port,()=>console.log("Server is running on port number=>",port))