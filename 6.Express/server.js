// EJS stands for Embedded JavaScript
// It is templating engine
// A templating engine is a tool that allows you to embed JavaScript into HTML for dynamic content rendering.

const express = require('express');
const app = express();

app.set('view engine','ejs')
const PORT = 7000;

app.get("/",(req,res) => {
    res.render("index");
});

app.get("/about",(req,res) =>{
    res.render("about");
});

app.listen(PORT,() => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})