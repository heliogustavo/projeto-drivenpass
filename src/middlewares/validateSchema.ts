import { Request, Response, NextFunction } from "express";
import jwt  from "jsonwebtoken";
import { ErrorInfo } from "./error.middleware";

export async function authenticateToken (req: Request, res: Response, next: NextFunction){
    const { authorization } = req.headers;
    const token : string | undefined = authorization?.replace('Bearer ', '');
    if(!token) throw new ErrorInfo("error_unauthorized", "Essa requisição não possui um token");
    jwt.verify(token!, process.env.ACCESS_TOKEN_SECRET!, (err, id) => {
        if (err) {
            return res.status(401).send({
                error: "Unauthorized",
                message: "Essa requisição contém um token inválido"
            });
        }
        res.locals.userId = id;
        next();
    });
}; 