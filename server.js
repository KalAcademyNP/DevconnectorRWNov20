const express = require('express');
const mongoose = require('mongoose');
const app = express();

//Db config
const db = require('./config/keys').mongoURI;
mongoose
  .connect(db)
  .then(() => console.log('MongoDb connected'))
  .catch(err => console.log(err));
  
//First route
app.get('/', (req, res) => res.send('Hello World'));

const port = 9000;
app.listen(port, () => console.log(`Server running on port ${port}`));