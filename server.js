<<<<<<< HEAD
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

app.use(express.static(path.join(__dirname, "./public")));


app.use("/register", routes);

app.get("/", (req, res) => {
  res.status(200).json({message: `This is working`});
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "./public", "index.html"));
});

const PORT =  9000;
connectDB();
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
=======
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
>>>>>>> 512771d3aefeb7aaa5b5d400985b7c2342eff7d1
});