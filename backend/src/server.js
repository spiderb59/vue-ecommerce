import express from 'express';

const app = express();

app.get('/hello', (req,res)=>{
    res.send("Hello");
});

app.listen(8122, ()=>{
    console.log("Server Running")
});
