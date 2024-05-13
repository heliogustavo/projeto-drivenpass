import { Router } from "express";
import * as networkController from "../controllers/networkController";
import { joiValidation } from "../middlewares/joi.middleware";
import {authenticateToken} from "../middlewares/validateSchema"
export const networkRouter = Router();

networkRouter.get("/alltitles", authenticateToken, networkController.allTitles);
networkRouter.get("/:id", authenticateToken, networkController.InfoById);
networkRouter.post("/create", authenticateToken, joiValidation.createNetwork, networkController.newNetwork);
networkRouter.delete("/:id", authenticateToken, networkController.deleteById);
            