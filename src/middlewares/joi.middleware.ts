import { signInSchema, signUpSchema } from "../schemas/user.schema";
import { networkSchema } from "../schemas/networkSchema";
import { credentialSchema } from "../schemas/credentialSchema";
import { Request, Response, NextFunction } from "express";
import { ErrorInfo } from "./error.middleware";

export const joiValidation = {
    signUp: (req: Request, _res:Response, next: NextFunction) => {
        const request = req.body;
        const validation = signUpSchema.validate(request, {abortEarly: false});
        if(validation.error) throw new ErrorInfo("error_unprocessable_entity", validation.error.details[0].message);
        next();
    },
    signIn: (req: Request, _res:Response, next: NextFunction) => {
        const request = req.body;
        const validation = signInSchema.validate(request, {abortEarly: false});
        if(validation.error) throw new ErrorInfo("error_unprocessable_entity", validation.error.details[0].message);
        next();
    }, 
    
    createCredential:(req: Request, _res:Response, next: NextFunction) =>{
        const request = req.body;
        const validation = credentialSchema.validate(request, {abortEarly: false});
        if(validation.error) {
            //console.log(validation.error.details[0].message)
            throw new ErrorInfo("error_unprocessable_entity", validation.error.details[0].message);
        }
        next();

    },
    createNetwork:(req: Request, _res:Response, next: NextFunction) =>{
        const request = req.body;
        const validation = networkSchema.validate(request, {abortEarly: false});
        if(validation.error) throw new ErrorInfo("error_unprocessable_entity", validation.error.details[0].message);
        next();
    },
 
}