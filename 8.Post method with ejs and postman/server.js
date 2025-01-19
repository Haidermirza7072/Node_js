const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let arr = [];

// Route for POST /users
app.post("/users", (req, res) => {
    arr.push(req.body);
    res.json("Data inserted");
});

// Route for GET /user
app.get("/user", (req, res) => {
    res.json(arr);
});

// Route for GET /
app.get("/", (req, res) => {
    res.send("Welcome to the Node.js server!");
});

//delete 
app.delete("/user/:index", (req, res) => {
    console.log(req.params.index);
    const{index} = req.params;
    console.log(index);
    arr.splice(index, 1);
    res.json("Data deleted");
})

app.put('/users',(req,res) =>{
    console.log(req.querry.index);
    const {index} = req.query
    arr.splice(index,1,req.body)
    res.json("updated ")
})
// Start the server
app.listen(5000, () => {
    console.log(`Server is running at http://localhost:5000`);
});
