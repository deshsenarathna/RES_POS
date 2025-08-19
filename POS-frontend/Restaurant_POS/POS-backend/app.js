require('dotenv').config();
const express = require('express');

const connectDb = require('./config/database');
const config = require('./config/config');
const globalErrorHandler = require('./middlewares/globalErrorHandler');
const createHttpError = require('http-errors');
const app = express();
const router = require('./routes/userRoute');
const cookieParser = require('cookie-parser');
const  cors = require("cors");

const PORT = config.PORT;

connectDb();

// Middleware
app.use(cors({
    credentials:true,
    origin:['http://localhost:5173']
}));
app.use(express.json());
app.use(cookieParser());


app.get('/', (req, res) => {

  res.json({message : 'Hello, World!'});
})

//Other endpoints
app.use("/api/user", require('./routes/userRoute'));
app.use("/api/order", require('./routes/orderRoutes'));
app.use("/api/table", require('./routes/tableRoutes'));
app.use("/api/payment", require('./routes/paymentRoutes'));


// Global error handler(should write after the end points)
app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});