const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/form/", callName);

function callName(req, res) {
  // Use child_process.spawn method from
  // child_process module and assign it
  // to variable spawn
  var spawn = require("child_process").spawn;
  const formData = req.body;

  const address = formData.houseAddress;
  const regex = /\b\d{4}\b/g;
  const zipcode = address.match(regex)[0];

  // console.log(zipcode);
  // Parameters passed in spawn -
  // 1. type_of_script
  // 2. list containing Path of the script and arguments for the script
  var process = spawn("python", [
    "./predict.py",
    parseFloat(formData.bed),
    parseFloat(formData.bath),
    parseFloat(formData.acreLot),
    zipcode,
    parseFloat(formData.housesize),
  ]);

  // // Takes stdout data from script which executed
  // // with arguments and send this data to res object
  process.stdout.on("data", function(data) {
    res.send(data.toString());
  });
}

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
