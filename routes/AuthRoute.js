import express from "express";
import {
  forgotPasswordController,
  getCurrentUser,
  loginController,
  registerController,
  testController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../Middleware/AuthMiddleware.js";

const router = express.Router();

//register
router.post("/register", registerController);

//LOGIN
router.post("/login", loginController);

//User
router.get("/current-user", requireSignIn, getCurrentUser, isAdmin);

//protectedUser
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//admin
router.get(
  "/admin-auth",
  requireSignIn,

  isAdmin,
  (req, res) => {
    res.status(200).send({ ok: true });
  }
);

//FogotPassword
router.post("/forgot-password", forgotPasswordController);

//tests
router.get("/test", requireSignIn, testController);

export default router;
