import { config } from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
config();

const app = express();
const PORT = process.env.PORT || 5000; // Choose your desired port

// MongoDB Atlas URL
const uri = `mongodb+srv://${process.env.PUBLIC_USERNAME}:${process.env.PUBLIC_PASSWORD}@${process.env.CLUSTER}.qj3tx5b.mongodb.net/${process.env.COLLECTION}?retryWrites=true&w=majority`;
mongoose.connect(uri).then(() => {console.log('Connected to MongoDB');}).catch(err => {console.error('Error connecting to MongoDB:', err.message);});

// Define the product schema
const databaseSchema = new mongoose.Schema({
  name: String,
  id: String,
  year_level: String,
  gender: String,
  course: String,
});

const Database = mongoose.model('Database', databaseSchema, 'database');
const allowedOrigins = ['http://localhost:5173/website-portfolio/', 'http://localhost:4173'];
const corsOptions = {
  origin: function (origin, callback) {
    // Check if the origin is in the allowed origins list
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ["POST", "GET", "PUT", "DELETE"],
  credentials: true
};
app.use(cors(corsOptions));

/**
 * Structure locations for POST, GET, PUT, and DELETE
 * methods for MongoDB Atlas for use in Database application
 */
// Fetsh all data from Database
app.get('/api/database', async (req, res) => {
  try {
    const database = await Database.find();
    res.json(database);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Fetsh data by id
app.get('/api/database/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const database = await Database.findOne({ id }); // Note that .findOne({ id }) and .findOne(id) is different
    if (!database) {
      return res.status(404).json({ message: 'Database not found' });
    }
    res.json(database);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Update a student by ID
app.put('/api/database/:id', cors(corsOptions), async (req, res) => {
  try {
    const updatedStudent = await Database.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.json(updatedStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
// Delete a student by ID
app.delete('/api/database/:id', cors(corsOptions), async (req, res) => {
  try {
    const deletedStudent = await Database.findOneAndDelete({ _id: req.params.id });
    res.json(deletedStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});