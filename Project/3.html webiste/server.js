const express = require('express');
const app = express();
const port = 777;


app.set('view engine', 'ejs');
app.use(express.static('public'));



// Routing created by Hiader Mirza 
app.get('/', (req, res) => {
  res.render('home'); 
});

app.get('/about-us', (req, res) => {
  res.render('about-us'); 
});

app.get('/service', (req, res) => {
  res.render('service'); 
});

app.get('/contact-us', (req, res) => {
  res.render('contact-us'); 
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
