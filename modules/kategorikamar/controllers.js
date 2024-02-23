
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
    // Your code here
    res.status(200).json({
      controller: "KategorikamarControllerDetail",
      params: req.params
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const KategorikamarControllerUpdate = async (req, res) => {
  try {
    // Your code here
    res.status(200).json({
      controller: "KategorikamarControllerUpdate",
      params: req.params,
      body: req.body
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const KategorikamarControllerDelete = async (req, res) => {
  try {
    // Your code here
    res.status(204).json({
      controller: "KategorikamarControllerDelete",
      params: req.params
    });
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
