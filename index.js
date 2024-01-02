const express = require("express");
const cors = require("cors");
const router = require("./src/routes/routes");
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen((process.env.PORT || 3000), () => {
  console.log(`App running on: ${process.env.PORT}`);
});

app.get("/", (req, res) => {
  res.send("This is the main page for the API");
});
