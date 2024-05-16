import client from '../../src/database/prisma';
import request from 'supertest';
import app from '../../src/app';
import { checkData } from '../../src/repositories/usersRepository';

export async function createUserFactory() {
  const email='example@example.com'
  const signupResponse = await request(app)
    .post('/users/sign-up')
    .send({
      email,
      password: 'password123',
      confirmPassword: 'password123'
    });
  const userData = await checkData(email)
  const userCreatedInfor = signupResponse.body;

  const signInResponse = await request(app)
          .post('/users/sign-in')
          .send({
            email,
            password: 'password123'
          });
          let token = ''

        token = signInResponse.body.config.headers.Authorization;

  return {userData, userCreatedInfor, token};;
}
/* export async function createUserFactory(){
  const user = await client.user.create({
    data: {
      email: 'example@example.com',
      password: 'password123'
    }
  });
  return user;
} */

export async function deleteUser(userId){
  await client.user.delete({
    where: {
      id: userId
    }
  });
}
