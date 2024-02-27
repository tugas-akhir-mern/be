
const { LibHTTPRouter } = require("../../libs/https");
const {
  DetailObatControllerList,
  DetailObatControllerCreate,
  DetailObatControllerDetail,
  DetailObatControllerUpdate,
  DetailObatControllerDelete
} = require("./controllers");
const {
  DetailObatMiddlewareCreate,
  DetailObatMiddlewareUpdate,
  DetailObatMiddlewareList,
  DetailObatMiddlewareDetail,
  DetailObatMiddlewareDelete
} = require("./middlewares");

const DetailObatRouter = LibHTTPRouter();

DetailObatRouter.get("", DetailObatMiddlewareList, DetailObatControllerList);
DetailObatRouter.post("", DetailObatMiddlewareCreate, DetailObatControllerCreate);
DetailObatRouter.get("/:id", DetailObatMiddlewareDetail, DetailObatControllerDetail);
DetailObatRouter.put("/:id", DetailObatMiddlewareUpdate, DetailObatControllerUpdate);
DetailObatRouter.delete("/:id", DetailObatMiddlewareDelete, DetailObatControllerDelete);

/**
 * You need to register your application in the index.js file 
 * so that it can be accessed and used as an API, as in the following example:
 *  
 *  // ...
 *  const { DetailObatRouter } = require("./modules/detailObat/routers");
 *  
 *  // ...
 *  LibModuleRegister(app, "detailObat", DetailObatRouter);
 * 
 * Copy and paste the registration code above inside your index.js file.
 * Run the application and try accessing your API with a client tool such as postman.
 */

module.exports = {
  DetailObatRouter,
};  
