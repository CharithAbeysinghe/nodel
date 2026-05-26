import express from "express";
import { createUser } from "../controllers/userController.js";
import { loginUser } from "../controllers/userController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";


const router = express.Router();

router.post("/user",createUser);

router.post('/login',loginUser);

router.get(
  "/profile",
  authMiddleware,
  (req, res) => {
    res.json({
      message: "Protected route",
      user: req.user
    });
  }
);

export default router;

