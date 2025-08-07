const mongoose = require('mongoose');
const config = require('./config');

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(config.databaseURI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
     console.error(`Error: ${error.message}`);
     process.exit();
  }
}

module.exports = connectDb;