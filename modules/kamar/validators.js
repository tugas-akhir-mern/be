
/**
 * These naming rules follow the following pattern:
 * 
 *  KamarValidator<YourValidationPurpose>
 * 
 * For example:
 *  const KamarValidationEmailExist = (value, { req }) => {}
 **/

const KamarValidator = (value, { req }) => {
  // Your validation here
  return value;
};

module.exports = {
  KamarValidator,
};
