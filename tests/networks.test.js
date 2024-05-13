// import request from 'supertest';
// import { app } from '../src/app'; 
// import { client } from '../src/repository';

// describe('Testes de Controladores de Networks', () => {
//   beforeAll(async () => {
//     await client.network.deleteMany();
//   });

//   afterAll(async () => {
//     await client.network.deleteMany();
//   });

//   it('deve retornar todas as networks de um usuário', async () => {
//     const signUpResponse = await request(app)
//       .post('/signup')
//       .send({
//         // dados pra criar um
//       });

//     const newNetworkResponse = await request(app)
//       .post('/networks/new-network')
//       .set('Authorization', `Bearer ${signUpResponse.body.config.token}`)
//       .send({
//         // dados pra nova network de teste
//       });

//     const allTitlesResponse = await request(app)
//       .get('/networks/all-titles')
//       .set('Authorization', `Bearer ${signUpResponse.body.config.token}`);

//     expect(allTitlesResponse.status).toBe(200);
//   });

 
// });
