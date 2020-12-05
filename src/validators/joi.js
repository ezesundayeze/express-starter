const joi = require("joi");
const response = require("../utils/response");

const formDataValidation = async (schema, body) => {
  const result = await schema.validate(body, { abortEarly: false });
  if (result.error) {
    return result.error.details;
  }
};

const queryParamValidation = (schema) => {
  return (req, res, next) => {
    const result = schema.validate(req.query, { abortEarly: false });
    if (result.error) {
      return res.status(400).json(response.validation(result.error.details));
    }
    next();
  };
};

const paramValidation = (schema, name) => {
  return (req, res, next) => {
    const result = schema.validate(
      { param: req["params"][name] },
      { abortEarly: false }
    );
    if (result.error) {
      return res.status(400).json(response.validation(result.error.details));
    } else {
      if (!req.value) req.value = {};
      if (!req.value["params"]) req.value["params"] = {};
      req.value["params"][name] = result.value.param;
      next();
    }
  };
};

function bodyValidation(schema) {
  return (req, res, next) => {
    const result = schema.validate(req.body, { abortEarly: false });

    if (result.error) {
      return res.status(400).json(response.validation(result.error.details));
    } else {
      if (!req.value) req.value = {};
      if (!req.value["body"]) req.value["body"] = {};
      req.value["body"] = result.value;
      next();
    }
  };
}

const Schemas = {
  idSchema: joi.object().keys({
    param: joi
      .string()
      .regex(/^[0-9a-fA-F]{24}$/)
      .required(),
  }),
  stringParamSchema: joi.object().keys({
    param: joi
      .string()
      .regex(/[a-zA-Z0-9.,?]*/)
      .required(),
  }),
  userSchema: joi.object().keys({
    name: joi.string().min(2).required(),
    email: joi.string().email().required(),
    role: joi.string().max(10).valid("user", "admin"),
    password: joi.string().required(),
    isActive: joi.boolean(),
    image: joi.string(),
  }),
  updateUserSchema: joi.object().keys({
    name: joi.string().min(2),
    email: joi.string().email(),
    role: joi.string().max(10).valid("user", "admin"),
    password: joi.string(),
    isActive: joi.boolean(),
    image: joi.string(),
  }),

  verifyEmailSchema: joi.object().keys({
    userId: joi
      .string()
      .regex(/^[0-9a-fA-F]{24}$/)
      .required(),
    verificationToken: joi.string(),
  }),

  requestVerifyEmailSchema: joi.object().keys({
    email: joi.string().email(),
  }),

  requestPasswordResetSchema: joi.object().keys({
    email: joi.string().email(),
  }),

  resetPasswordSchema: joi.object().keys({
    presetToken: joi.string().length(6),
    userId: joi
      .string()
      .regex(/^[0-9a-fA-F]{24}$/)
      .required(),
    password: joi.string().required(),
  }),

  loginSchema: joi.object().keys({
    email: joi.string().email().required(),
    password: joi.string().required(),
  }),

  queryParamSchema: (parameters) => {
    let obj = {};
    parameters.forEach((param) => {
      obj[param] = joi.string().regex(/[a-zA-Z0-9]/);
    });
    return joi.object().keys(obj);
  },
};

module.exports = {
  paramValidation,
  bodyValidation,
  Schemas,
  formDataValidation,
  queryParamValidation,
};
