
/**
 * These naming rules follow the following pattern:
 * 
 *  ObatValidator<YourValidationPurpose>
 * 
 * For example:
 *  const ObatValidationEmailExist = (value, { req }) => {}
 **/

const ObatValidator = (value, { req }) => {
  // Your validation here
  return value;
};

module.exports = {
  ObatValidator,
};
