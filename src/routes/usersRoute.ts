import { signIn, signUp } from "@/controllers/users.controller";
import { sign } from "crypto";
import { Router } from "express";

export const userRouter = Router();

userRouter.post("/sign-up", signUp);
userRouter.post("/sign-in", signIn);
userRouter.get("/categories-count")