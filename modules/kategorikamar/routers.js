
const { LibHTTPRouter } = require("../../libs/https");
const {
  KategorikamarControllerList,
  KategorikamarControllerCreate,
  KategorikamarControllerDetail,
  KategorikamarControllerUpdate,
  KategorikamarControllerDelete
} = require("./controllers");
const {
  KategorikamarMiddlewareCreate,
  KategorikamarMiddlewareUpdate,
  KategorikamarMiddlewareList,
  KategorikamarMiddlewareDetail,
  KategorikamarMiddlewareDelete
} = require("./middlewares");

const KategorikamarRouter = LibHTTPRouter();

KategorikamarRouter.get("", KategorikamarMiddlewareList, KategorikamarControllerList);
KategorikamarRouter.post("", KategorikamarMiddlewareCreate, KategorikamarControllerCreate);
KategorikamarRouter.get("/:id", KategorikamarMiddlewareDetail, KategorikamarControllerDetail);
KategorikamarRouter.put("/:id", KategorikamarMiddlewareUpdate, KategorikamarControllerUpdate);
KategorikamarRouter.delete("/:id", KategorikamarMiddlewareDelete, KategorikamarControllerDelete);

/**
 * You need to register your application in the index.js file 
 * so that it can be accessed and used as an API, as in the following example:
 *  
 *  // ...
 *  const { KategorikamarRouter } = require("./modules/kategorikamar/routers");
 *  
 *  // ...
 *  LibModuleRegister(app, "kategorikamar", KategorikamarRouter);
 * 
 * Copy and paste the registration code above inside your index.js file.
 * Run the application and try accessing your API with a client tool such as postman.
 */

module.exports = {
  KategorikamarRouter,
};  
