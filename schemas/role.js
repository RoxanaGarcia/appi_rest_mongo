const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roleSchema = new Schema({
  id: String,
  name: String,
  description: String,
  
});

const roleModel = mongoose.model("roles", roleSchema);

module.exports = roleModel;