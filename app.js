const express = require('express');
const app = express();
const port = 3000; // You can change the port number if needed

// Define a route for the homepage
app.get('/', (req, res) => {
  res.send('Hello, I am Jarif');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
