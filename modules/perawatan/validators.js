
/**
 * These naming rules follow the following pattern:
 * 
 *  PerawatanValidator<YourValidationPurpose>
 * 
 * For example:
 *  const PerawatanValidationEmailExist = (value, { req }) => {}
 **/

const PerawatanValidator = (value, { req }) => {
  // Your validation here
  return value;
};

module.exports = {
  PerawatanValidator,
};
