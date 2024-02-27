
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

const DetailObatMiddlewareList = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

const DetailObatMiddlewareDetail = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

const DetailObatMiddlewareCreate = LibValidationsMiddleware(
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
   *    customs: [DetailObatValidatorField3Unique],
   *  }),
   *  LibValidationFields.CharField({
   *    field: "field4",
   *    sanitizers: [DetailObatSanitizerField4ToHash],
   *  }),
   *  ...
   */

  LibValidationFields.ArrayField({ field: "staff" }),
  LibValidationFields.CharField({ field: "staff.*._id" }),
  LibValidationFields.CharField({ field: "staff.*.nama" }),
  LibValidationFields.ArrayField({ field: "obat" }),
  LibValidationFields.NumberField({ field: "obat.*.namaObat" }),
  LibValidationFields.NumberField({ field: "obat.*.harga" }),
  LibValidationFields.NumberField({ field: "obat.*.qty" }),
  LibValidationFields.CharField({ field: " idPerawatan" }),
  LibValidationExceptionMiddleware,
);

const DetailObatMiddlewareUpdate = LibValidationsMiddleware(
  LibAuthenticationMiddleware,
  /** Your middleware here (validations, sanitizing, etc..) */
  LibValidationExceptionMiddleware,
);

const DetailObatMiddlewareDelete = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

module.exports = {
  DetailObatMiddlewareCreate,
  DetailObatMiddlewareUpdate,
  DetailObatMiddlewareDetail,
  DetailObatMiddlewareList,
  DetailObatMiddlewareDelete,
};
  