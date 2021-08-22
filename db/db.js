const mongoose = require("mongoose");
const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  };

  //////////Q2
mongoose.connect("mongoosmongodb://localhost:27017/DB_Name", options).then(
() => {
    console.log("DB ... connected ");
  },
  (err) => {
    console.log(err);
  }
);


module.exports = mongoose