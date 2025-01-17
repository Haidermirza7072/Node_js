const express = require("express")

const app = express()


// Step 2 :
    app.use(express.json()) // used to covert the data we are getting from server into object form  

    app.use(express.urlencoded({extended:true }))
// step 1:
    app.post("/user",(req,res) =>{
        console.log(req.body);
    })



app.listen(3000, () => {
    `console.log(listen to server http://localhost:${3000});`
 })




// ###################################################




// var arr = []
// app.post("/users",(req,res)=>{
//     arr.push(req.body)
//     // res.json("data inserted")
// })


// app.get("/user",(req,res)=>{
//     res.json(arr)
// })



