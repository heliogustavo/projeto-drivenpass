/* import request from 'supertest';
import app from '../src/app';
import client from '../src/database/prisma';
import jwt from 'jsonwebtoken'

describe('Testes de Controladores', () => {
  let token;
  beforeAll(async () => {
    await client.user.deleteMany();
  });

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
    const signInResponse = await request(app)
      .post('/users/sign-in')
      .send({
        email: 'example@example.com',
        password: 'password123'
      });

    expect(signInResponse.status).toBe(200);
    expect(signInResponse.body).toHaveProperty('message', 'Success. You will be redirected to the home page');
    expect(signInResponse.body).toHaveProperty('config');
    token = signInResponse.body.config.headers.Authorization;
    console.log(token)
  });

  it('deve retornar a contagem de categorias', async () => {
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
    const tokenFalso = jwt.sign({ foo: 'bar' }, 'chave_incorreta');
    console.log("tokenFalso", tokenFalso)

    const response = await request(app)
      .get('/users/categories-count')
      .set('Authorization', `Bearer ${tokenFalso}`);
    console.log("response", response.status)
    expect(response.status).toBe(401);
    expect(response.body).toEqual({
      error: 'Unauthorized',
      message: 'Essa requisição contém um token inválido'
    });
  });
});
 */