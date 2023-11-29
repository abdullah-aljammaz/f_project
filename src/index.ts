import express from 'express';

const app =express ()
const port = 1177

app.get("/test",function(req,res){
    res.send("Hello world")
})
app.listen(port,()=>{
    console.log(`Login ${port}`)
})