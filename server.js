const express= require('express');
const app=express();

app.listen(3000,()=>(
    console.log("Server at 3000")
))
app.get('/', (req, res) => {
    res.send("Hello");
});



app.post('/users', (req, res) => {
    res.send("User created");
});