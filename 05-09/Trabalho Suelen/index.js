const express = require('express');
const mongoose = require('mongoose');
const requirDir = require('require-dir');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/amf', { useNewUrlParser: true });
requirDir('./src/models');
app.use('/sistema', require('./src/routs/routs'));
app.listen(3001);