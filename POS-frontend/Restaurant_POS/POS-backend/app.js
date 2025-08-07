require('dotenv').config();
const express = require('express');

const connectDb = require('./config/database');
const config = require('./config/config');
const globalErrorHandler = require('./middlewares/globalErrorHandler');
const createHttpError = require('http-errors');
const app = express();

const PORT = config.PORT;

connectDb();

app.get('/', (req, res) => {
  
    const err = createHttpError(404, 'Not Found');
    throw err;
  res.json({message : 'Hello, World!'});
})

// Global error handler(should write after the end points)
app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});