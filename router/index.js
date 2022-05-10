import { Router } from "express";
import { body } from "express-validator";
import userController from "../controllers";
import authMiddleware from "../middlewares/auth-middleware";

const { registration, getUsers, refresh, login, logout, activate } =
   userController;

const router = new Router();

router.post(
   "/registration",
   body("email").isEmail(),
   body("password").isLength({ min: 3, max: 32 }),
   registration
);
router.post("/login", login);
router.post("/logout", logout);
router.get("/activate/:link", activate);
router.get("/refresh", refresh);
router.get("/users", authMiddleware, getUsers);

export default router;
