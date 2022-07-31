const mongoose = require("mongoose");
const DB = process.env.DATABSE;

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => {
    console.log("Connection Unsuccessful, Error:",err);
  });
