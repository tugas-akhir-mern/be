
const mongoose = require("mongoose");

const ObatSchema = new mongoose.Schema(
  { 
    /** Your schema here */ 
  
    nama: { type: String },
    Dosis:{type: String, enum:["Dewasa","Anak"],default:"uknown"},
    aturanMinum: { type:Number,default: 0 },
    harga:{ type:Number,default: 0 },
    created: { type: Date, default: Date.now },
    qty:{type:Number, default:0},
  },
  { versionKey: false }
);

const Obat = mongoose.model("Obat", ObatSchema);

module.exports = {
  Obat,
};
    
