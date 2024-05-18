import client from "../../src/database/prisma";
import Cryptr from "cryptr";

export async function createCredentialFactory(userData){
  const cryptr = new Cryptr(process.env.CRYPTR_SECRET)
    const credentialTest = await client.credential.create({
      data: {
        title: "facebook",
        url: "https://www.facebook.com",
        username: "nometeste",
        password: cryptr.encrypt("1234"),
        userId: userData.id
      }
    });
  return credentialTest;
}
