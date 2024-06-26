
import { Router } from "express";
import * as credentialController from "../controllers/credentialController";
import {authenticateToken} from "../middlewares/validateSchema"
import { joiValidation } from "../middlewares/joi.middleware";
export const credentialRouter = Router();

credentialRouter.get("/alltitles", authenticateToken, credentialController.allTitles);
credentialRouter.get("/:id", authenticateToken, credentialController.infoById);
credentialRouter.post("/create", authenticateToken, joiValidation.createCredential, credentialController.newCredential);
credentialRouter.delete("/:id", authenticateToken, credentialController.deleteById);
