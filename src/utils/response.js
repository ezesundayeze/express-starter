/*
System-wide API response convention
*/
module.exports = {
  success: (message, data) => {
    return {
      message,
      error: false,
      data,
    };
  },

  error: (message) => {
    return {
      message,
      error: true,
    };
  },

  validation: (errors) => {
    return {
      message: "Validation errors",
      error: true,
      errors,
    };
  },
};
