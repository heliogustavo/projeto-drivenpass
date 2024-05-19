/* import request from 'supertest';
import app from '../src/app';
import client from '../src/database/prisma';
import jwt from 'jsonwebtoken'
import { createUserFactory, generateToken } from './factories/factoriesUsers';

describe('Testes de Controladores', () => {
  beforeAll(async () => {
    await client.credential.deleteMany();     
    await client.user.deleteMany();    
  });

  beforeEach(async () => {
    await client.credential.deleteMany();     
    await client.user.deleteMany();    });

  it('deve criar uma nova conta com sucesso', async () => {
    const signUpResponse = await request(app)
      .post('/users/sign-up')
      .send({
        email: 'example@example.com',
        password: 'password123',
        confirmPassword: 'password123'
      });
      
    expect(signUpResponse.status).toBe(201);
    expect(signUpResponse.body).toEqual({ message: 'Succesfull. Your account has been created' });

  });

  it('deve fazer login com sucesso', async () => {
    const user = await createUserFactory();
    const signInResponse = await request(app)
      .post('/users/sign-in')
      .send({
        email: user.email,
        password: 'password123'
      });
      console.log("signInResponse", signInResponse.error)
      console.log(signInResponse.body)
      console.log(signInResponse.status)
    expect(signInResponse.status).toBe(200);
    expect(signInResponse.body).toHaveProperty('message', 'Success. You will be redirected to the home page');
    expect(signInResponse.body).toHaveProperty('config');
  });

  it('deve retornar a contagem de categorias', async () => {
    const user = await createUserFactory();
    const token = await generateToken(user.id)

    const response = await request(app)
      .get('/users/categories-count')
      .set('Authorization', token);

    expect(response.status).toBe(200);
    expect(response.body).toEqual([
      { title: 'Credentials', quantity: expect.any(Number) },
      { title: 'WiFi Passwords', quantity: expect.any(Number) }
    ]);
  });

  it('retornar erro 401 para token inválido', async () => {
    const user = await createUserFactory();
    const token = await generateToken(user.id)
    const tokenFalso= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0OTk3YThkYi03NzVlLTQ3ODgtYTUwYS1hZjRiY2NmNmI0NzQiLCJpYXQiOjE3MTU4MDY5MDgsImV4cCI6MTcxNTg5MzMwOH0.ybhK0En5pA2hdStDubrrdWOLpzEvRjqw9FeB-fvvCfY'
    
    const response = await request(app)
      .get('/users/categories-count')
      .set('Authorization', tokenFalso);
      console.log("response", response.error)
    expect(response.status).toBe(401);
    expect(response.body).toEqual({
      error: 'Unauthorized',
      message: 'Essa requisição contém um token inválido'
    });
  });
});
 */