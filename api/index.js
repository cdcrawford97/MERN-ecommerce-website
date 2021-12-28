const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Importing routes
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");

// App Initialization
const app = express();
dotenv.config();

// Middlewares
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// Listen for server and connect to MongoDB
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URL)
	.then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
	.catch((error) => console.log(error));