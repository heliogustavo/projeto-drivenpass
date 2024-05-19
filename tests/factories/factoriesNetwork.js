import client from "../../src/database/prisma";
import Cryptr from "cryptr";

export async function createNetworkFactory(userId){
  const cryptr = new Cryptr(process.env.CRYPTR_SECRET)
    const networkCreated = await client.network.create({
      data: {
        title: 'wifi',
        network: 'wi-fi de casa',
        password: cryptr.encrypt("1234"),
        userId: userId
      }
    });

    return networkCreated;
}