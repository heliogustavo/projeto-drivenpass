import request from 'supertest';
import { createUser, deleteUser } from './factories';
import app from '../src/app';

describe('Testes de Controladores', () => {
  let userId;

  afterEach(async () => {
    if (userId) {
      await deleteUser(userId);
    }
  });

  it('deve criar uma nova conta com sucesso', async () => {
    const signUpResponse = await request(app).post('/users/sign-up').send({
      email: 'example@example.com',
      password: 'password123'
    });
    
    

    expect(signUpResponse.status).toBe(201);
    expect(signUpResponse.body).toEqual({ message: 'Succesfull. Your account has been created' });
  });

  it('deve fazer login com sucesso', async () => {
    const user = await createUser();
    userId = user.id;

    const signInResponse = await request(app)
      .post('/users/sign-in')
      .send({
        email: 'example@example.com',
        password: 'password123'
      });

    expect(signInResponse.status).toBe(200);
    expect(signInResponse.body).toHaveProperty('message', 'Success. You will be redirected to the home page');
    expect(signInResponse.body).toHaveProperty('config');
  });

  it('deve retornar a soma de cada tipo', async () => {
    const user = await createUser();
    userId = user.id;

    const signInResponse = await request(app)
      .post('/users/sign-in')
      .send({
        email: 'example@example.com',
        password: 'password123'
      });

    const sumOfEachTypeResponse = await request(app)
      .get('/users/categories-count')
      .set('Authorization', `Bearer ${signInResponse.body.config.token}`);

    expect(sumOfEachTypeResponse.status).toBe(200);
  });
});
