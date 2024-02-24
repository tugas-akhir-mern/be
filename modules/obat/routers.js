
const { LibHTTPRouter } = require("../../libs/https");
const {
  ObatControllerList,
  ObatControllerCreate,
  ObatControllerDetail,
  ObatControllerUpdate,
  ObatControllerDelete
} = require("./controllers");
const {
  ObatMiddlewareCreate,
  ObatMiddlewareUpdate,
  ObatMiddlewareList,
  ObatMiddlewareDetail,
  ObatMiddlewareDelete
} = require("./middlewares");

const ObatRouter = LibHTTPRouter();

ObatRouter.get("", ObatMiddlewareList, ObatControllerList);
ObatRouter.post("", ObatMiddlewareCreate, ObatControllerCreate);
ObatRouter.get("/:id", ObatMiddlewareDetail, ObatControllerDetail);
ObatRouter.put("/:id", ObatMiddlewareUpdate, ObatControllerUpdate);
ObatRouter.delete("/:id", ObatMiddlewareDelete, ObatControllerDelete);

/**
 * You need to register your application in the index.js file 
 * so that it can be accessed and used as an API, as in the following example:
 *  
 *  // ...
 *  const { ObatRouter } = require("./modules/obat/routers");
 *  
 *  // ...
 *  LibModuleRegister(app, "obat", ObatRouter);
 * 
 * Copy and paste the registration code above inside your index.js file.
 * Run the application and try accessing your API with a client tool such as postman.
 */

module.exports = {
  ObatRouter,
};  
