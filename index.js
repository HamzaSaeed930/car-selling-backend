const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bcrypt = require("bcrypt");
const User = require('./models/userModel');
const authRoutes = require("./routes/authRoutes");
const carRoutes = require("./routes/carRoutes");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/auth", carRoutes);


app.get("/", (req, res) => res.send("Server is running!"));

// async function insert() {
//     try {
//       const hashedPassword = await bcrypt.hash("123456abc", 10); // Hash the password
//       await User.create({
//         email: "Amjad@desolint.com",
//         password: hashedPassword,
//       });
//       console.log("User inserted with hashed password!");
//     } catch (error) {
//       console.error("Error inserting user:", error.message);
//     }
//   }

//   insert();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log(`MongoDB connected ${process.env.MONGO_URI}`))
  .catch((err) => console.error("MongoDB connection error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
