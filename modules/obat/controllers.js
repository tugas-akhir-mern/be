
const { LibPaginationResponse } = require("../../libs/paginations");
const { LibHTTPResponseException } = require("../../libs/https");

const ObatControllerList =  async (req, res) => {
  try {
    // Your code here

    // example:
    // const results = YourModel.find(YourFilter(req));
    // return LibPaginationResponse(req, res, results);


    res.status(201).json({
      controller: "ObatControllerList",
      query: req.query
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const ObatControllerCreate = async (req, res) => {
  try {
    // Your code here
    res.status(201).json({
      controller: "ObatControllerCreate",
      body: req.body
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const ObatControllerDetail = async (req, res) => {
  try {
    // Your code here
    res.status(200).json({
      controller: "ObatControllerDetail",
      params: req.params
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const ObatControllerUpdate = async (req, res) => {
  try {
    // Your code here
    res.status(200).json({
      controller: "ObatControllerUpdate",
      params: req.params,
      body: req.body
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const ObatControllerDelete = async (req, res) => {
  try {
    // Your code here
    res.status(204).json({
      controller: "ObatControllerDelete",
      params: req.params
    });
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
