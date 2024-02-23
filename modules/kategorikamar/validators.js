
/**
 * These naming rules follow the following pattern:
 * 
 *  KategorikamarValidator<YourValidationPurpose>
 * 
 * For example:
 *  const KategorikamarValidationEmailExist = (value, { req }) => {}
 **/

const KategorikamarValidator = (value, { req }) => {
  // Your validation here
  return value;
};

module.exports = {
  KategorikamarValidator,
};
