
const mongoose = require("mongoose");

const KategorikamarSchema = new mongoose.Schema(
  { 
    /** Your schema here */ 

    nama: { type: String },
    status:{type: String, enum:["available","notavailable"],default:"available"},
    kapasitas: { type:Number,default: 0 },
    harga:{ type:Number,default: 0 },
    created: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

const Kategorikamar = mongoose.model("Kategorikamar", KategorikamarSchema);

module.exports = {
  Kategorikamar,
};
    
