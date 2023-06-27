const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true, },
  email: {type:String,required:true},
  password: {type:String,min:8,max:12}
});

module.exports = mongoose.model("User", userSchema);
