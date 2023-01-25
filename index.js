const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// Import routes
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const dietingRoute = require("./routes/dieting");
const workoutRoute = require("./routes/workout");

dotenv.config();
// Connect to DB
mongoose.connect(
  "mongodb+srv://real_user:alan113@brocluster.bassv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  () => {
    console.log("connected to DB");
    console.log(mongoose.connection.readyState);
  }
);

// MiddleWare
app.use(express.json());

// Route middlewares
app.use("/api/user", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/dieting", dietingRoute);
app.use("/api/workout", workoutRoute);

app.listen(3000, () => console.log("server running"));
