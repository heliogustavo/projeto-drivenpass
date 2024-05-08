import { Router } from "express";

export const credentialRouter = Router();

credentialRouter.get("/alltitles");
credentialRouter.get("/:id");
credentialRouter.post("/create");
credentialRouter.delete("/:id");
