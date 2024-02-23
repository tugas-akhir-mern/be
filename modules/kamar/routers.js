
const { LibHTTPRouter } = require("../../libs/https");
const {
  KamarControllerList,
  KamarControllerCreate,
  KamarControllerDetail,
  KamarControllerUpdate,
  KamarControllerDelete
} = require("./controllers");
const {
  KamarMiddlewareCreate,
  KamarMiddlewareUpdate,
  KamarMiddlewareList,
  KamarMiddlewareDetail,
  KamarMiddlewareDelete
} = require("./middlewares");

const KamarRouter = LibHTTPRouter();

KamarRouter.get("", KamarMiddlewareList, KamarControllerList);
KamarRouter.post("", KamarMiddlewareCreate, KamarControllerCreate);
KamarRouter.get("/:id", KamarMiddlewareDetail, KamarControllerDetail);
KamarRouter.put("/:id", KamarMiddlewareUpdate, KamarControllerUpdate);
KamarRouter.delete("/:id", KamarMiddlewareDelete, KamarControllerDelete);

/**
 * You need to register your application in the index.js file 
 * so that it can be accessed and used as an API, as in the following example:
 *  
 *  // ...
 *  const { KamarRouter } = require("./modules/kamar/routers");
 *  
 *  // ...
 *  LibModuleRegister(app, "kamar", KamarRouter);
 * 
 * Copy and paste the registration code above inside your index.js file.
 * Run the application and try accessing your API with a client tool such as postman.
 */

module.exports = {
  KamarRouter,
};  
