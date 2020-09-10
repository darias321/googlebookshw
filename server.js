const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static("./client/build"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(
    "Express server listening on port http://localhost:" + PORT + "."
  );
});

const apiRoutes = require("./routes/routes.js");
