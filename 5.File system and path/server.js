// This is used to connect multiple file in main file with routing with switch case.

const http = require('http');
const path = require('path');
const fs = require('fs');

const app = http.createServer((req,res) => {

    switch(req.url){
        case '/':
            const indexpath = path.join(__dirname,"pages/index.html");

            fs.readFile(indexpath,(err,content) =>{
                if(err){
                    console.log(err);
                }
                else{
                    res.end(content);
                }
            })
        break;

        case '/about':
            const aboutpath = path.join(__dirname,"pages/about.html");

            fs.readFile(aboutpath,(err,content) => {
                if(err){
                    console.log(err);
                }
                else{
                    res.end(content);
                }
            })
    }
})

app.listen( 5000, () =>{
    console.log(`Server is running on port http://localhost:${5000}`)
})