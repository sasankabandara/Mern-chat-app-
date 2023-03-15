const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const { errorHandler, notFound } = require("./middleWare/errorMiddleware");

const app = express();
dotenv.config();
connectDB();

app.use(express.json()); // to accept json data

app.get("/", (req, res) => {
  res.send("Api is running "); //to know my api is properly running(test massage)
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT; // i tried to hide my port number in env file but in case of error i put || 5000 as well

app.listen(PORT, console.log(`Server started on port ${PORT}`.yellow.bold)); // set port 8000 to run server i configured this in packeage.json so it runs with npm start command
