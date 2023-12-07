import { Request, Response, NextFunction } from "express";
import { body, ValidationChain, validationResult } from "express-validator";

const minPasswordLength = 8;

const validate = (validations: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    for (let val of validations) {
      const result = await val.run(req);

      if (!result.isEmpty()) {
        break;
      }
    }
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      return next();
    }
    res.status(422).json({ errors: errors.array() });
  };
};

const loginValidator = [
  body("email").trim().isEmail().withMessage("Email is required"),
  body("password")
    .trim()
    .isLength({ min: minPasswordLength })
    .withMessage(`Password should be at least ${minPasswordLength}`),
];

const signupValidator = [
  body("name").notEmpty().withMessage("Name is required"),
  ...loginValidator,
];

const chatCompletionValidator = [
  body("message").notEmpty().withMessage("Message is required"),
];

export { validate, signupValidator, loginValidator, chatCompletionValidator };
