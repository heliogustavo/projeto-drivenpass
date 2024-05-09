import client from "../database/prisma";

export async function create (account: any){
    const response = await client.user.create({
        data: account
    });
    return response
}

export async function checkData (email: string){
    const account = await client.user.findUnique({
        where:{
            email: email
        }
    });
    return account
}



