
const mongoose = require("mongoose");

const ObatSchema = new mongoose.Schema(
  { 
    /** Your schema here */ 
    created: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

const Obat = mongoose.model("Obat", ObatSchema);

module.exports = {
  Obat,
};
    
