import { Router } from "express";
import userController from "../controllers";

const { registration, getUsers, refresh, login, logout, activate } =
   userController;

const router = new Router();

router.post("/registration", registration);
router.post("/login", login);
router.post("/logout", logout);
router.get("/activate/:link", activate);
router.get("/refresh", refresh);
router.get("/users", getUsers);

export default router;
