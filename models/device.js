const mongoose = require("mongoose");
const PhoneSchema = new mongoose.Schema(
 {
 name: String,
 number: String,
 model: String
 }, 

 {
 versionKey: false,
 collection: "phones"
 }
)
module.exports = mongoose.model("Phone", PhoneSchema);