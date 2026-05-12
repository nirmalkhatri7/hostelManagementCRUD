const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes"); //authentication

const studentRoutes = require("./routes/studentRoutes.js");
const roomRoutes = require('./routes/roomRoutes');
const complaintRoutes = require('./routes/complaintRoutes');


const app = express();


//middleware
app.use(express.json()); 
app.use(cors());
app.use("/api/auth", authRoutes);
app.use("/api/Students", studentRoutes);
app.use('/api/rooms', roomRoutes);         
app.use('/api/complaints', complaintRoutes);




app.get("/", (req, res) => {
  res.send("API is running...");
});


//DataBase connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.listen(5001, () => {
  console.log("Server running on port 5001");
});