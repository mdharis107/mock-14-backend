const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("This is the HomePage");
});

// app.use("/quiz")

app.listen(PORT, async (req, res) => {
  try {
    await connection;
    console.log("Connected to Database");
  } catch (err) {
    console.log("Error connecting the Database");
    console.log(err);
  }
  console.log(`listening on the ${PORT}`);
});
