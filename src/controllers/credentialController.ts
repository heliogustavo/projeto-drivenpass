import {Request, Response} from "express";
import * as credentialService from "../services/credentialsService";


export async function allTitles (req: Request, res: Response){
    const {userId} = res.locals.userId
    const response = await credentialService.getAllCredentials(userId);
    return res.status(200).send(response); 
};
export async function infoById (req: Request, res: Response){
    const {userId} = res.locals.userId;
    const {id} = req.params;
    const response  = await credentialService.getCredentialById(userId, id)
    return res.status(200).send(response);
};
export async function newCredential (req: Request, res: Response){
    const {userId} = res.locals.userId;
    const request  = req.body;
    await credentialService.validateTitle(request.title, userId);
    await credentialService.createCredential(request, userId);
    return res.status(201).send("Sucessfull")
};
export async function deleteById (req: Request, res: Response){
    const {userId} = res.locals.userId;
    const {id} = req.params;
    await credentialService.deleteCredentialById(userId, id);
    return res.status(204).send("Sucessfull");
};
