// Create web server
const express = require('express');
const app = express();
const port = 3000; // You can choose any available port

// Middleware to parse JSON in request body
app.use(express.json());

// Sample comments data (you can replace this with a database)
let comments = [
  { id: 1, text: 'This is a great post!' },
  { id: 2, text: 'I disagree with some points.' },
];

// Route to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Route to get a specific comment by ID
app.get('/comments/:id', (req, res) => {
  const commentId = parseInt(req.params.id);
  const comment = comments.find((c) => c.id === commentId);

  if (!comment) {
    return res.status(404).json({ error: 'Comment not found' });
  }

  res.json(comment);
});

// Route to add a new comment
app.post('/comments', (req, res) => {
  const newComment = {
    id: comments.length + 1,
    text: req.body.text,
  };

  comments.push(newComment);
  res.status(201).json(newComment);
});

// Route to delete a comment by ID
app.delete('/comments/:id', (req, res) => {
  const commentId = parseInt(req.params.id);
  const index = comments.findIndex((c) => c.id === commentId);

  if (index === -1) {
    return res.status(404).json({ error: 'Comment not found' });
  }

  const deletedComment = comments.splice(index, 1)[0];
  res.json(deletedComment);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
