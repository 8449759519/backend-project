import { Router } from "express";
import { getuser, signup, login } from "./controller/userController.js";
let userRouter = Router();

userRouter.get("/", getuser);
userRouter.post("/signup", signup);
userRouter.post("/login", login);

export { userRouter };
