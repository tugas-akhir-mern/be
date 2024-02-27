
const mongoose = require("mongoose");

const PerawatanSchema = new mongoose.Schema(
  { 
    /** Your schema here */ 
    created: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

const Perawatan = mongoose.model("Perawatan", PerawatanSchema);

module.exports = {
  Perawatan,
};
    
