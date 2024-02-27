
/**
 * These naming rules follow the following pattern:
 * 
 *  DetailObatValidator<YourValidationPurpose>
 * 
 * For example:
 *  const DetailObatValidationEmailExist = (value, { req }) => {}
 **/

const DetailObatValidator = (value, { req }) => {
  // Your validation here
  return value;
};

module.exports = {
  DetailObatValidator,
};
