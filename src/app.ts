import dotenv from "dotenv";
import express  from "express";
import "express-async-errors";
import cors from "cors";
import {router} from "./routes/index.router";
 
dotenv.config();

 const app = express();
                   
app.use(express.json());
app.use(cors());
app.use(router);

if (process.env.NODE_ENV !== "TEST") {
  app.listen(process.env.PORT || 5000, () => {
    console.log(`Listening at ${process.env.PORT}`);
  });
}
                             
export default app;