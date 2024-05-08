import { Router } from "express";
import { userRouter } from "./usersRoute";
import { credentialRouter } from "./credentialRoute";
import { networkRouter } from "./networkRoute";

export const router = Router();

router.use("/users", userRouter);
router.use("/credentials", credentialRouter);
router.use("/networks", networkRouter);



