import express from "express";
import cors from "cors";
import mongoose from "mongoose"; // Import Mongoose

// Import Routes
import userRoutes from "./Routes/user.js";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection String
const mongoURI =
  "mongodb+srv://dharmadeep:QuiteNest@cluster0.dcwzg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

// Basic Route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Use Routes
app.use("/user", userRoutes);

// Listen on a specific port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
