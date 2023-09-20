const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/portfolio', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

const urlSchema = new mongoose.Schema({
  name: String,
  url: String,
  imagePath: String
});

const Url = mongoose.model('Url', urlSchema);

// Endpoint to retrieve the top 8 entries
app.get('/website-portfolio/mas_amicus/', async (req, res) => {
  try {
    const top8Urls = await Url.find().sort({ _id: -1 }).limit(8);
    res.json(top8Urls);
  } catch (error) {
    console.error("The error is: " + error);
    res.status(500).json({ message: error.message });
  }
});

app.listen(5173, () => {
  console.log('Server started on port 5173');
});
