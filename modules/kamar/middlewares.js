
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

const KamarMiddlewareList = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

const KamarMiddlewareDetail = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

const KamarMiddlewareCreate = LibValidationsMiddleware(
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
   *    customs: [KamarValidatorField3Unique],
   *  }),
   *  LibValidationFields.CharField({
   *    field: "field4",
   *    sanitizers: [KamarSanitizerField4ToHash],
   *  }),
   *  ...
   */

    LibValidationFields.ArrayField({ field: "kategorikamar" }),
    LibValidationFields.CharField({ field: "kategorikamar.*.nama" }),
    LibValidationFields.NumberField({ field: "kategorikamar.*.kapasitas" }),
  LibValidationExceptionMiddleware,
);

const KamarMiddlewareUpdate = LibValidationsMiddleware(
  LibAuthenticationMiddleware,
  /** Your middleware here (validations, sanitizing, etc..) */
  LibValidationExceptionMiddleware,
);

const KamarMiddlewareDelete = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

module.exports = {
  KamarMiddlewareCreate,
  KamarMiddlewareUpdate,
  KamarMiddlewareDetail,
  KamarMiddlewareList,
  KamarMiddlewareDelete,
};
  