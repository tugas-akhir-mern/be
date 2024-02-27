
const { LibPaginationResponse } = require("../../libs/paginations");
const { LibHTTPResponseException } = require("../../libs/https");

const PerawatanControllerList =  async (req, res) => {
  try {
    // Your code here

    // example:
    // const results = YourModel.find(YourFilter(req));
    // return LibPaginationResponse(req, res, results);


    res.status(201).json({
      controller: "PerawatanControllerList",
      query: req.query
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const PerawatanControllerCreate = async (req, res) => {
  try {
    // Your code here
    res.status(201).json({
      controller: "PerawatanControllerCreate",
      body: req.body
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const PerawatanControllerDetail = async (req, res) => {
  try {
    // Your code here
    res.status(200).json({
      controller: "PerawatanControllerDetail",
      params: req.params
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const PerawatanControllerUpdate = async (req, res) => {
  try {
    // Your code here
    res.status(200).json({
      controller: "PerawatanControllerUpdate",
      params: req.params,
      body: req.body
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const PerawatanControllerDelete = async (req, res) => {
  try {
    // Your code here
    res.status(204).json({
      controller: "PerawatanControllerDelete",
      params: req.params
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

module.exports = {
  PerawatanControllerList,
  PerawatanControllerCreate,
  PerawatanControllerDetail,
  PerawatanControllerUpdate,
  PerawatanControllerDelete,
};
