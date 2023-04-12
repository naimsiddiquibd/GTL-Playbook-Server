const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = require("./app");

// Connect to MongoDB Atlas
const atlasUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.fphq6.mongodb.net/?retryWrites=true&w=majority`;

const atlasConnection = mongoose.createConnection(atlasUri, { useNewUrlParser: true, useUnifiedTopology: true });

atlasConnection.on('connected', () => {
  console.log('Connected to MongoDB Atlas');
});

atlasConnection.on('error', (err) => {
  console.error('Error connecting to MongoDB Atlas:', err);
});

// Connect to MongoDB Local
mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
    console.log(`Database connection is successful`.red.bold);
});

// Server
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`App is running at port ${port}`.yellow.bold);
})