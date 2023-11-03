const express = require('express');
const app = express();
const port = 3001; // You can change the port number if needed

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

// Define your portfolio data
const portfolioData = {
  name: 'Your Name',
  description: 'Web Developer | Designer | Your Description Here',
};

// Define routes
app.get('/', (req, res) => {
  res.render('index', portfolioData);
});

app.get('/cv', (req, res) => {
  res.send('CV Page');
});

app.get('/projects', (req, res) => {
  res.send('Projects Page');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
