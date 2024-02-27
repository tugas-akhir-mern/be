
const mongoose = require("mongoose");

const DetailObatSchema = new mongoose.Schema(
  { 
    /** Your schema here */ 
    staff:[{
      id: { type: String },
      nama: { type: String },
      
    }],
    jadwalPemberian:{ type: Date, default: Date.now },
    obat:[{
      id:{ type: String },
      namaObat:{ type: String },
      Harga:{type:Number, default:0},
      qty:{type:Number, default:0},
    }],
    created: { type: Date, default: Date.now },
    idPerawatan:{ type: String },
  },
  { versionKey: false }
);

const DetailObat = mongoose.model("DetailObat", DetailObatSchema);

module.exports = {
  DetailObat,
};
    
