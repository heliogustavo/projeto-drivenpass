import { signInSchema, signUpSchema } from "../schemas/user.schema";
import { Request, Response, NextFunction } from "express";
import { ErrorInfo } from "./error.middleware";
 
   function signUp (req: Request, _res:Response, next: NextFunction){
        const request = req.body;
        const validation = signUpSchema.validate(request, {abortEarly: false});
        if(validation.error) throw new ErrorInfo("error_unprocessable_entity", validation.error.message);
        next();
    }
   function  signIn (req: Request, _res:Response, next: NextFunction) {
        const request = req.body;
        const validation = signInSchema.validate(request, {abortEarly: false});
        if(validation.error) throw new ErrorInfo("error_unprocessable_entity", validation.error.message);
        next();
    }
    export const joiValidation = {signIn, signUp}