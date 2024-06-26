import { Router } from "express";
import { signIn, signUp, sumOfEachType } from "../controllers/users.controller";
import { joiValidation } from "../middlewares/joi.middleware";
import { authenticateToken } from "../middlewares/validateSchema";

export const userRouter = Router();

userRouter.post("/sign-up", joiValidation.signUp, signUp);
userRouter.post("/sign-in", joiValidation.signIn, signIn);
userRouter.get("/categories-count", authenticateToken, sumOfEachType)