import { ErrorInfo } from "../middlewares/error.middleware"
import * as userRepository from "../repositories/usersRepository"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "@prisma/client";


export async function checkEmail (email: string, method: "sign-in" | "sign-up" ) : Promise<User | undefined>{
    const account : User | null = await userRepository.checkData(email);
    if(method === "sign-up" && account)throw new ErrorInfo("error_conflict", "An account with this email already exists")
    if(method === "sign-in"){
        if(!account)throw new ErrorInfo("error_not_found", "This account doesn't exist")
        return account
    }
}

export async function doesPasswordMatch(password: string, confirmPassword: string){
    if(password !== confirmPassword) throw new ErrorInfo("error_conflict", "Your passwords do not match")
};


export async function archiveAccount (account: any) : Promise<User>{
    delete account.confirmPassword
    const accountWithHashedPassword = await hashUserPassword(account);
    const response : User = await userRepository.create(accountWithHashedPassword);
    return response;
};

async function hashUserPassword (account: any){
    const hashPassword : string = bcrypt.hashSync(account.password, 10);
    account.password = hashPassword
    return account
};

export async function comparePassword (password: string, hashPassword:string){
    const isPasswordValid : boolean = bcrypt.compareSync(password, hashPassword);
    if(!isPasswordValid) throw new ErrorInfo("error_conflict", "Incorrect password")
};

export async function generateToken(id: string) {
    const token : string = jwt.sign({userId: id}, process.env.ACCESS_TOKEN_SECRET!, {expiresIn: "1d"})
    const config = {
        headers: {
            Authorization:`Bearer ${token}`
        }
    }
    return config
};
