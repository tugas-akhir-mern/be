
const { LibPaginationResponse } = require("../../libs/paginations");
const { LibHTTPResponseException } = require("../../libs/https");
const { Kamar } = require("./models");
const { KamarFilter } = require("./filters");

const KamarControllerList =  async (req, res) => {
  try {
  
    const results = Kamar.find(KamarFilter(req));
    return LibPaginationResponse(req, res, results);
    
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const KamarControllerCreate = async (req, res) => {
  try {
    await Kamar.create(req.cleanedData);
    res.status(201).json(req.cleanedData);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const KamarControllerDetail = async (req, res) => {
  try {
    let kamar = await Kamar.findOne({ _id: req.params.id });
    if (!kamar) throw { status: 404, message: "Not found" };

    res.status(200).json(kamar);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const KamarControllerUpdate = async (req, res) => {
  try {
    // Your code here
    res.status(200).json({
      controller: "KamarControllerUpdate",
      params: req.params,
      body: req.body
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const KamarControllerDelete = async (req, res) => {
  try {
    // Your code here
    res.status(204).json({
      controller: "KamarControllerDelete",
      params: req.params
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

module.exports = {
  KamarControllerList,
  KamarControllerCreate,
  KamarControllerDetail,
  KamarControllerUpdate,
  KamarControllerDelete,
};
