const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// const corsOptions = {
//     origin: 'http://localhost:3000/blogpostpage',
//     // methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     // credentials: true,
//   };
  
//   app.use(cors(corsOptions));
  
app.use(cors())

app.use(bodyParser.json());

const postRoutes = require('./routes/Posts');
app.use('/posts', postRoutes);


  require("dotenv").config({
    path: "./.env",
  });

// MongoDB connection

mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`mongod connected with server: ${data.connection.host}`);
    });

// Define your routes and middleware here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
