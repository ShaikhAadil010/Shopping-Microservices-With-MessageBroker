const mongoose = require("mongoose");
const { DB_URL } = require("../config");

module.exports = async () => {
  try {
    await mongoose.connect(DB_URL).then((res) => {
      console.clear();
      console.warn("Database Successfully connected...");
    });
  } catch (error) {
    console.log("Error ============");
    console.log(error);
    process.exit(1);
  }
};
