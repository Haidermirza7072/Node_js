const http = require('http');

const app = http.createServer((req,res) => {
    
    switch(req.url) {
        case '/':
            res.end("<h1> Home Page </h1>");
            break;
        case '/about':
            res.end(`<h1> About page </h1>
                    <p> This is the about page </p>`);
            break;
        default:
            res.end("<h1> 404 page not found </h1>");
    }
});

app.listen(5000, () => {
    console.log(`listen to port http://localhost:${5000}`);
})