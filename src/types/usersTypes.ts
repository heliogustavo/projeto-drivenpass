import { Credential, Network } from "@prisma/client";
import { IInsertCredential } from "../interfaces/credentialInterface";
import { IInsertNetwork } from "../interfaces/networkInterface";

export type DecryptDataObject =  | Credential | Network

export type EncryptDataObject = | IInsertCredential | IInsertNetwork

export type TitlesList = { id: string; title: string; }[]

export type TokenConfig = { headers : {
    Authorization : string
}};

export type CategoryCount = {title: string, quantity: number}[]