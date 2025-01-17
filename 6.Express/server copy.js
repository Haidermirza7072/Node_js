//npm i express 

const express = require('express'); // This line include 

const app = express(); // This line include

const PORT = 7000;

app.get("/",(req,res) => { // by get method we fetcg data in express
    res.end("<h1> This is Home page. </h1>");
})

app.get("/about",(req,res) =>{
    res.end("<h1> This is About page. </h1>");
})

app.listen(PORT,() => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})