const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

const posts = [
  {
    id: 1,
    title: "A Day in My Life as a Developer",
    content: "Today I worked on building scalable web apps and explored new AI tools..."
  },
  {
    id: 2,
    title: "How I Built My First AI Project",
    content: "Starting from zero, I built an AI model using TensorFlow..."
  },
  {
    id: 3,
    title: "Why Clean UI Matters",
    content: "Users don’t just use apps, they experience them..."
  }
];

// API to get all posts
app.get('/api/posts', (req, res) => {
  res.json(posts);
});

// API to get single post
app.get('/api/posts/:id', (req, res) => {
  const post = posts.find(p => p.id == req.params.id);
  res.json(post);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running"));
