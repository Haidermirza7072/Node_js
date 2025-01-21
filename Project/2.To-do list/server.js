const express = require("express");
const app = express();
const PORT = 777;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define the home route
app.get("/", (req, res) => {
    console.log("GET / request received");
    res.send("Welcome to the server! Use POST / to insert data or GET /users to view data.");
});

// Define a route to view data
let arr = [];
app.get("/users", (req, res) => {
    res.json(arr);
});

// Define a route to insert data
app.post("/", (req, res) => {
    console.log(req.body);
    arr.push(req.body);
    res.json("Your data has been inserted!");
});
// delete
app.delete("/users/:index",(req,res)=>{
    console.log(req.params.index)
    const {index}=req.params;
    console.log(index)
    arr.splice(index,1);
    res.json("your data has been deleted:")
})
console.log("arr......")

// update
app.put("/users",(req,res)=>{
    console.log(req.query.index)
    const{index}=req.query
    arr.splice(index,1,req.body)
    res.json("Your data has been updated:")
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
