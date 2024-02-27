
const { LibPaginationResponse } = require("../../libs/paginations");
const { LibHTTPResponseException } = require("../../libs/https");
const { DetailObat } = require("./models");
const { DetailObatFilter } = require("./filters");

const DetailObatControllerList =  async (req, res) => {
  try {
  
    const results = DetailObat.find(DetailObatFilter(req));
    return LibPaginationResponse(req, res, results);
    
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const DetailObatControllerCreate = async (req, res) => {
  try {
    await DetailObat.create(req.cleanedData);
    res.status(201).json(req.cleanedData);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const DetailObatControllerDetail = async (req, res) => {
  try {
    let DetailObat = await DetailObat.findOne({ _id: req.params.id });
    if (!DetailObat) throw { status: 404, message: "Not found" };

    res.status(200).json(DetailObat);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const DetailObatControllerUpdate = async (req, res) => {
  try {
    // Your code here
    res.status(200).json({
      controller: "DetailObatControllerUpdate",
      params: req.params,
      body: req.body
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const DetailObatControllerDelete = async (req, res) => {
  try {
    // Your code here
    res.status(204).json({
      controller: "DetailObatControllerDelete",
      params: req.params
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

module.exports = {
  DetailObatControllerList,
  DetailObatControllerCreate,
  DetailObatControllerDetail,
  DetailObatControllerUpdate,
  DetailObatControllerDelete,
};
