import express from "express";
import { registeredHomes } from "./hostROute.js";

const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  res.render("home", { registeredHomes, currentPath: "/" });
});

export { userRouter };
