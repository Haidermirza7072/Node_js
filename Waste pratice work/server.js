const express = require('express');
const app = express();
const port = 5000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'))
// Define routes
app.get('/', (req, res) => {
    res.render('home'); // Renders home.ejs
});

app.get('/about', (req, res) => {
  res.render('about'); // <-- Check for typos here
});

app.get('/service', (req, res) => {
    res.render('service'); // Renders service.ejs
});

app.get('/contact-us', (req, res) => {
    res.render('contact-us'); // Renders contact-us.ejs
});

// 404 Error Handling
app.use((req, res) => {
    res.status(404).send('Page Not Found');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
