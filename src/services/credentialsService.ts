import { Credential } from "@prisma/client";
import { ErrorInfo } from "../middlewares/error.middleware";
import * as credentialRepository from "../repositories/credentialsRepository";
import * as userValidator from "../utils/validators/usersValidators";
import { securityUtils } from "../utils/handlers/securityHandlers";

export async function getAllCredentials (userId: string){
    const response = await credentialRepository.credentialTitles(userId)
    return response
};

export async function getCredentialById (userId: string, id: string){
    const credential : Credential = await ensureCredentialExists(id);
    await userValidator.checkIfBelongsToUser(userId, credential);
    const decryptedCredential = securityUtils.decryptObjectPassword(credential);
    return decryptedCredential;
};

export async function createCredential(request: any, userId: string){
    const credential  = {...request, userId};
    const encryptedCredential = await securityUtils.encryptObjectPassword(credential);
    await credentialRepository.insertData(encryptedCredential);
};

export async function validateTitle(title: string, userId: string){
    const validation : Credential | null = await credentialRepository.checkThisTitle(title, userId)
    if(validation) throw new ErrorInfo("error_conflict", "Ja existe uma credencial com esse nome")
}

export async function deleteCredentialById(userId:string, id: string){
    const credential: Credential= await ensureCredentialExists(id);
    await userValidator.checkIfBelongsToUser(userId, credential);
    await credentialRepository.deleteById(id);
};

async function ensureCredentialExists(id: string){
    const credential: Credential | null = await credentialRepository.searchById(id);
    if(!credential) throw new ErrorInfo("error_not_found", "Essa credencial não existe");
    return credential;
};

