import { Request, Response } from "express";
import { ISignIn, ISignUp } from "../interfaces/usersInterface";
import * as userService from "../services/usersService";
import { User } from "@prisma/client";


export async function signUp(req: Request, res: Response){
    const request : ISignUp = req.body;
    await userService.doesPasswordMatch(request.password, request.confirmPassword!);
    await userService.checkEmail(request.email, "sign-up");
    await userService.archiveAccount(request);
    return res.status(201).json({message: `Sucesso! A sua conta foi criada`});
}; 

export async function signIn(req: Request, res: Response){
    const request: ISignIn = req.body;
    const account : User | undefined = await userService.checkEmail(request.email, "sign-in");
    await userService.comparePassword(request.password, account!.password)
    const config = await userService.generateToken(account!.id);
    console.log(config)
    return res.status(200).send({message: `Sucesso! Você será redirecionado.`, config: config})
};