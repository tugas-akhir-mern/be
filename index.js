require("dotenv").config();
const cors = require("cors");
const express = require("express");
const { DatabaseMongoDBConnector } = require("./libs/databases");
const { LibModuleRegister } = require("./libs/modules");
const { UserRouter } = require("./providers/users/routers");
const { HelloRouter } = require("./modules/hello/routers");
const { BarangRouter } = require("./modules/barang/routers");
const { KamarRouter } = require("./modules/kamar/routers");

const { KategorikamarRouter } = require("./modules/kategorikamar/routers");
const { ObatRouter } = require("./modules/obat/routers");


const app = express();

app.use(
  cors({
    origin: "*",
  })
);

DatabaseMongoDBConnector({ hideSuccessMessage: false });

app.use(express.json());

LibModuleRegister(app, "users", UserRouter);
LibModuleRegister(app, "hello", HelloRouter);
LibModuleRegister(app, "barang", BarangRouter);
LibModuleRegister(app, "kamar",KamarRouter);
LibModuleRegister(app, "kategorikamar",KategorikamarRouter);
LibModuleRegister(app, "obat",ObatRouter);

app.listen(process.env.APP_PORT, function () {
  console.log(`Server berjalan di port ${process.env.APP_PORT}.`);
});
