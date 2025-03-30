const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/user");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
require("dotenv").config();
console.log(process.env.MONGODB_USERNAME)
console.log(process.env.MONGODB_PASSWORD)
console.log(process.env.MONGODB_APP_NAME)

const MONGO_URL = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@thedailyscopedb.rxyozgq.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.MONGODB_APP_NAME}`;
console.log(MONGO_URL)
// Database Connection
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));
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