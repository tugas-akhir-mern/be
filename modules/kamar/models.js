
const mongoose = require("mongoose");

const KamarSchema = new mongoose.Schema(
  { 
    /** Your schema here */ 
    kategorikamar:[
      {
        _id:{ type: String },
        nama: { type: String },
        status:{type: String, enum:["available","notavailable"],default:"available"},
        kapasitas: { type:Number,default: 0 },
        harga:{ type:Number,default: 0 }
      }
      
    ],
    created: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

const Kamar = mongoose.model("Kamar", KamarSchema);

module.exports = {
  Kamar,
};
    
