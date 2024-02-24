
const { LibPaginationResponse } = require("../../libs/paginations");
const { LibHTTPResponseException } = require("../../libs/https");
const { Kategorikamar } = require("./models");
const { KategorikamarFilter } = require("./filters");

const KategorikamarControllerList =  async (req, res) => {
  try {
  
    const results = Kategorikamar.find(KategorikamarFilter(req));
    return LibPaginationResponse(req, res, results);
    
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const KategorikamarControllerCreate = async (req, res) => {
  try {
    await Kategorikamar.create(req.cleanedData);
    res.status(201).json(req.cleanedData);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const KategorikamarControllerDetail = async (req, res) => {
  try {
    let kamar = await Kategorikamar.findOne({ _id: req.params.id });
    if (!kamar) throw { status: 404, message: "Not found" };

    res.status(200).json(kamar);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const KategorikamarControllerUpdate = async (req, res) => {
  try {
    // Your code here
    let kategori = await Kategorikamar.findOne({ _id: req.params.id });
    if (!barang) throw { status: 404, message: "Not found" };

    await Kategorikamar.findByIdAndUpdate(req.params.id, req.cleanedData);
    res.status(200).json(req.cleanedData);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const KategorikamarControllerDelete = async (req, res) => {
  try {
    let barang = await Kategorikamar.findOne({ _id: req.params.id });
    if (!barang) throw { status: 404, message: "Not found" };

    await Kategorikamar.findByIdAndDelete(req.params.id);

    res.status(204).json(null);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

module.exports = {
  KategorikamarControllerList,
  KategorikamarControllerCreate,
  KategorikamarControllerDetail,
  KategorikamarControllerUpdate,
  KategorikamarControllerDelete,
};
