const express =require('express');


const app = express()//server instance create kar rhe hai

app.get("/",(req,res) => {
    res.send("hello pragnya")
})

app.get("/about",(req,res) => {
    res.send("About Page")
})


app.listen(3000)//server  ko start kr rhe hai