import client from '../src/database/prisma';

export async function createUser(){
  const user = await client.user.create({
    data: {
      email: 'john2@example.com',
      password: 'password123',
    }
  });
  return user;
}

export async function deleteUser(userId: any){
  await client.user.delete({
    where: {
      id: userId
    }
  });
}
