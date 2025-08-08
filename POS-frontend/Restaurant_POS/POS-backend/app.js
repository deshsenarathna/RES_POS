require('dotenv').config();
const express = require('express');

const connectDb = require('./config/database');
const config = require('./config/config');
const globalErrorHandler = require('./middlewares/globalErrorHandler');
const createHttpError = require('http-errors');
const app = express();
const router = require('./routes/userRoute');
const cookieParser = require('cookie-parser');

const PORT = config.PORT;

connectDb();

// Middleware
app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {

  res.json({message : 'Hello, World!'});
})

//Other endpoints
app.use("/api/user", require('./routes/userRoute'));


// Global error handler(should write after the end points)
app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});