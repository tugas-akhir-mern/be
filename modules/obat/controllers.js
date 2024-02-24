
const { LibPaginationResponse } = require("../../libs/paginations");
const { LibHTTPResponseException } = require("../../libs/https");
const { Obat } = require("./models");
const { ObatFilter } = require("./filters");

const ObatControllerList =  async (req, res) => {
  try {
  
    const results = Obat.find(ObatFilter(req));
    return LibPaginationResponse(req, res, results);
    
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const ObatControllerCreate = async (req, res) => {
  try {
    await Obat.create(req.cleanedData);
    res.status(201).json(req.cleanedData);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const ObatControllerDetail = async (req, res) => {
  try {
    let obat = await Obat.findOne({ _id: req.params.id });
    if (!obat) throw { status: 404, message: "Not found" };

    res.status(200).json(obat);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const ObatControllerUpdate = async (req, res) => {
  try {
    // Your code here
    let obat = await Obat.findOne({ _id: req.params.id });
    if (!obat) throw { status: 404, message: "Not found" };

    await Obat.findByIdAndUpdate(req.params.id, req.cleanedData);
    res.status(200).json(req.cleanedData);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const ObatControllerDelete = async (req, res) => {
  try {
    let obat= await Obat.findOne({ _id: req.params.id });
    if (!obat) throw { status: 404, message: "Not found" };

    await Obat.findByIdAndDelete(req.params.id);

    res.status(204).json(null);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

module.exports = {
  ObatControllerList,
  ObatControllerCreate,
  ObatControllerDetail,
  ObatControllerUpdate,
  ObatControllerDelete,
};
