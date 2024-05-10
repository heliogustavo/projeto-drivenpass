
import { encryptUtils } from "../encryptUtils";
import { DecryptDataObject, EncryptDataObject } from "../../types/usersTypes";

export const securityUtils = {
    decryptObjectPassword: async (data: DecryptDataObject) => {
        data.password = encryptUtils.decryptData(data.password!);
        
        return data
    },
    encryptObjectPassword: async (data: EncryptDataObject) => {
        data.password = encryptUtils.encryptData(data.password!);
        return data
    },
    
}