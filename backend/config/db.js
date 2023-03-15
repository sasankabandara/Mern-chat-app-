const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.Mongo_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline); //making sure whether DB is connected
  } catch (error) {
    console.log(`erorr:${error.message}`.red.bold);
    process.exit();
  }
};
module.exports = connectDB;
