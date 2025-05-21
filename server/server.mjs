import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000; // Choose your desired port

app.use(cors());
app.use(express.json());

let posts = [
  { id: 1, title: "Hello World", body: "This is a sample post."},
  { id: 2, title: "Another Post", body: "React and Express are cool!"},
];


// GET all posts
app.get("/api/posts", (req, res) => {
  res.json(posts);
});

// POST a new post
app.post("/api/posts", (req, res) => {
  const { title, body } = req.body;
  const newPost = { id: posts.length + 1, title, body };
  posts.push(newPost);
  res.status(201).json(newPost);
});

app.listen(PORT, () => {
  console.log(`Backend running on https://localhost:${PORT}`);
})