
const { LibHTTPRouter } = require("../../libs/https");
const {
  PerawatanControllerList,
  PerawatanControllerCreate,
  PerawatanControllerDetail,
  PerawatanControllerUpdate,
  PerawatanControllerDelete
} = require("./controllers");
const {
  PerawatanMiddlewareCreate,
  PerawatanMiddlewareUpdate,
  PerawatanMiddlewareList,
  PerawatanMiddlewareDetail,
  PerawatanMiddlewareDelete
} = require("./middlewares");

const PerawatanRouter = LibHTTPRouter();

PerawatanRouter.get("", PerawatanMiddlewareList, PerawatanControllerList);
PerawatanRouter.post("", PerawatanMiddlewareCreate, PerawatanControllerCreate);
PerawatanRouter.get("/:id", PerawatanMiddlewareDetail, PerawatanControllerDetail);
PerawatanRouter.put("/:id", PerawatanMiddlewareUpdate, PerawatanControllerUpdate);
PerawatanRouter.delete("/:id", PerawatanMiddlewareDelete, PerawatanControllerDelete);

/**
 * You need to register your application in the index.js file 
 * so that it can be accessed and used as an API, as in the following example:
 *  
 *  // ...
 *  const { PerawatanRouter } = require("./modules/perawatan/routers");
 *  
 *  // ...
 *  LibModuleRegister(app, "perawatan", PerawatanRouter);
 * 
 * Copy and paste the registration code above inside your index.js file.
 * Run the application and try accessing your API with a client tool such as postman.
 */

module.exports = {
  PerawatanRouter,
};  
