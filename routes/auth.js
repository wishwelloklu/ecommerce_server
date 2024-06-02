const express = require("express");
const { body } = require("express-validator");

const authController = require("../controllers/auth");

const router = express.Router();

const userValidator = [
  body("name").not().isEmpty().withMessage("Name is required"),
    body("email")
    .not().isEmpty().withMessage("Email is required")
    .isEmail()
    .withMessage("Enter a valid email"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Passwor must be at least 8 characters")
    .isStrongPassword()
    .withMessage(
      "Password must contain at least one upper-case, one number and one symbol"
    ),
  body("phone").isMobilePhone().withMessage("Enter a valid phone number"),
];

router.post("/login", authController.login);

router.post("/register", userValidator, authController.register);

router.post("/forgot-password", authController.forgetPassword);

router.post("/verify-otp", authController.verifyOtp);

router.post("/reset-password", authController.resetPassword);

module.exports = router;
