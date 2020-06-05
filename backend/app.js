const express = require('express');
const app = express();
const routes = require("./routes");
const cors = require('cors');
const cookieParser = require("cookie-parser")
const DEFAULT_PORT = 5000;

app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.get("/version",(req,res) => {
  res.send("1.0");
});

app.listen(DEFAULT_PORT, function () {
  console.log(`Server listening on port ${DEFAULT_PORT}!`);
});


routes(app);

