
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

const PerawatanMiddlewareList = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

const PerawatanMiddlewareDetail = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

const PerawatanMiddlewareCreate = LibValidationsMiddleware(
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
   *    customs: [PerawatanValidatorField3Unique],
   *  }),
   *  LibValidationFields.CharField({
   *    field: "field4",
   *    sanitizers: [PerawatanSanitizerField4ToHash],
   *  }),
   *  ...
   */

  LibValidationExceptionMiddleware,
);

const PerawatanMiddlewareUpdate = LibValidationsMiddleware(
  LibAuthenticationMiddleware,
  /** Your middleware here (validations, sanitizing, etc..) */
  LibValidationExceptionMiddleware,
);

const PerawatanMiddlewareDelete = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

module.exports = {
  PerawatanMiddlewareCreate,
  PerawatanMiddlewareUpdate,
  PerawatanMiddlewareDetail,
  PerawatanMiddlewareList,
  PerawatanMiddlewareDelete,
};
  