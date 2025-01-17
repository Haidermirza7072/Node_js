const http = require("http");

const PORT = 5000

const app = http.createServer((req,res)  => {
    res.end("Hello Haider Mirza");
});

app.listen(PORT, () => {
    console.log(`listen to port http://localhost:${PORT}`);
})