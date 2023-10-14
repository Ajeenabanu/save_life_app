const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());

app.use(cors());

const mongoose = require("mongoose");

let routes = require("./routes/route");

app.use("/", routes);

mongoose
  .connect("mongodb://localhost:27017/donation", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(3001, () =>
      console.log(`Server Running on Port: http://localhost:${3001}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));
