// Create web server
// app.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON in request body
app.use(express.json());

// Sample comments data
const comments = [
  { id: 1, text: 'This is a great post!' },
  { id: 2, text: 'I disagree with some points.' },
];

// Route for the homepage
app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

// Route for getting all comments
app.get('/api/comments', (req, res) => {
  res.json(comments);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
