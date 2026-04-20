const express = require('express');
const app = express();

app.use(express.static('public'));

const posts = [
  {
    id: 1,
    title: "A Calm Morning",
    content: "There is something peaceful about early mornings...",
    image: "https://picsum.photos/600/400?1"
  },
  {
    id: 2,
    title: "Designing Clean Interfaces",
    content: "Design is not just how it looks, but how it feels...",
    image: "https://picsum.photos/600/400?2"
  },
  {
    id: 3,
    title: "Building with Purpose",
    content: "Every project should solve a real problem...",
    image: "https://picsum.photos/600/400?3"
  }
];

app.get('/api/posts', (req, res) => res.json(posts));
app.get('/api/posts/:id', (req, res) => {
  const post = posts.find(p => p.id == req.params.id);
  res.json(post);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running"));
