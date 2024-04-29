const mongoose = require("mongoose");

const connection = () => {
  return mongoose
    .connect(
      "mongodb+srv://NoorElDeen:123@firstcluster.cgslo.mongodb.net/MovieDB_Log?retryWrites=true&w=majority"
    )
    .then((data) => {
      console.log("db connected");
    })
    .catch((error) => {
      console.log("error");
    });
};

module.exports = connection;
