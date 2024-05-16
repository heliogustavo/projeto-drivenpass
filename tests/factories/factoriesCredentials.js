import client from "../../src/database/prisma";

export async function createCredentialFactory(userData){
    const credentialTest = await client.credential.create({
      data: {
        title: "facebook",
        url: "https://www.facebook.com",
        username: "nometeste",
        password: "1234",
        userId: userData.userData.id
      }
    });
    console.log("credentialTest", credentialTest)
  return credentialTest;
}

