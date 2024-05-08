import { Router } from "express";
export const networkRouter = Router();

networkRouter.get("/alltitles");
networkRouter.get("/:id");
networkRouter.post("/create");
networkRouter.delete("/:id");