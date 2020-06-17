 
const mongoose = require("mongoose")
const colorSchema = new mongoose.Schema({
   color: {
       type: Array,
   }
}, {timestamps: true})

module.exports = mongoose.model("Color", colorSchema);