
const { LibAuthenticationMiddleware } = require("../../libs/authentications");
const {
  LibValidationExceptionMiddleware,
  LibValidationFields,
  LibValidationsMiddleware,
} = require("../../libs/validations");

/**
 * If you want to remove JWT authentication, 
 * you can remove 'LibAuthenticationMiddleware' from your middleware list.
 */

const KategorikamarMiddlewareList = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

const KategorikamarMiddlewareDetail = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

const KategorikamarMiddlewareCreate = LibValidationsMiddleware(
  LibAuthenticationMiddleware,
  /** Your middleware here (validations, sanitizing, etc..) */

  /**
   * "LibValidationExceptionMiddleware" is suitable for validating data sent by the client in body. 
   * If you have your own handler, you can replace it.
   * 
   * For example:
   *  ...
   *  LibValidationFields.CharField({ field: "field1" }),
   *  LibValidationFields.CharField({ field: "field2" }),
   *  LibValidationFields.CharField({
   *    field: "field3",
   *    customs: [KategorikamarValidatorField3Unique],
   *  }),
   *  LibValidationFields.CharField({
   *    field: "field4",
   *    sanitizers: [KategorikamarSanitizerField4ToHash],
   *  }),
   *  ...
   */

    LibValidationFields.CharField({ field: "nama" }),
    LibValidationFields.NumberField({ field: "kapasitas" }),
    LibValidationFields.NumberField({ field: "harga" }),
  LibValidationExceptionMiddleware,
);

const KategorikamarMiddlewareUpdate = LibValidationsMiddleware(
  LibAuthenticationMiddleware,
  /** Your middleware here (validations, sanitizing, etc..) */
  LibValidationExceptionMiddleware,
);

const KategorikamarMiddlewareDelete = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

module.exports = {
  KategorikamarMiddlewareCreate,
  KategorikamarMiddlewareUpdate,
  KategorikamarMiddlewareDetail,
  KategorikamarMiddlewareList,
  KategorikamarMiddlewareDelete,
};
  