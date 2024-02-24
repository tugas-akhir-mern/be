
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

const ObatMiddlewareList = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

const ObatMiddlewareDetail = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

const ObatMiddlewareCreate = LibValidationsMiddleware(
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
   *    customs: [ObatValidatorField3Unique],
   *  }),
   *  LibValidationFields.CharField({
   *    field: "field4",
   *    sanitizers: [ObatSanitizerField4ToHash],
   *  }),
   *  ...
   */

  LibValidationFields.NumberField({ field: "harga" }),
  LibValidationFields.CharField({ field: "dosis" }),
  LibValidationFields.CharField({ field: "nama" }),
  LibValidationFields.NumberField({ field: "aturanMinum" }),
  LibValidationExceptionMiddleware,
);

const ObatMiddlewareUpdate = LibValidationsMiddleware(
  LibAuthenticationMiddleware,
  LibValidationFields.NumberField({ field: "harga" }),
  LibValidationFields.CharField({ field: "dosis" }),
  LibValidationFields.CharField({ field: "nama" }),
  LibValidationFields.NumberField({ field: "aturanMinum" }),
  /** Your middleware here (validations, sanitizing, etc..) */
  LibValidationExceptionMiddleware,
);

const ObatMiddlewareDelete = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

module.exports = {
  ObatMiddlewareCreate,
  ObatMiddlewareUpdate,
  ObatMiddlewareDetail,
  ObatMiddlewareList,
  ObatMiddlewareDelete,
};
  