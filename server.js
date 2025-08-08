const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./database/dbConnection");
const routes = require("./routes/routes");
const path = require("path")

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/register", routes);

app.get("/", (req, res) => {
  res.status(200).json({message: `This is working`});
});

const PORT =  9000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});