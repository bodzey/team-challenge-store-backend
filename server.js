const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 5000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
