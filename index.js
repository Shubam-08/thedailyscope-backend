const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/user");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5050;
const corsOptions = {
  origin: process.env.CORS_ORIGIN || "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
// Routes
app.get("/", (req, res) => {
  res.json({ info: "BACKEND IS RUNNING" });
});

app.use("/user", userRoute);


app.listen(port, () => {
  console.log(`MY Server is running on port ${port}.`);
});