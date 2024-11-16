import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
const app = express();

import bookRoute from "./routes/book.route.js";
import userRoute from "./routes/user.route.js";

app.use(cors());
app.use(express.json());
dotenv.config();

// Connect MongoDB
const PORT = process.env.PORT || 8080;
const URI = process.env.MongoDBURI;

try {
  mongoose.connect(URI);
  console.log("MongoDb Connected!");
} catch (error) {
  console.error("ERROR: ", error);
}

// Defining Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`SERVER STARTED AT PORT: ${PORT}`);
});
