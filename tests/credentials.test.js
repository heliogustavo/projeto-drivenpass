// import request from 'supertest';
// import { app } from '../src/app';

// describe('Testes de Controladores de Credenciais', () => {
//   it('deve retornar todas as credenciais de um usuário', async () => {

//     const signInResponse = await request(app)
//       .post('/signin')
//       .send({
//         // dados para login
//       });

//     const allTitlesResponse = await request(app)
//       .get('/all-titles')
//       .set('Authorization', `Bearer ${signInResponse.body.config.token}`);

//     expect(allTitlesResponse.status).toBe(200);
//   });

//   it('deve retornar informações de uma credencial por ID', async () => {

//     const signInResponse = await request(app)
//       .post('/signin')
//       .send({
//         // Enviar dados válidos para fazer login
//       });

//     const infoByIdResponse = await request(app)
//       .get('/info-by-id/:1') 
//       .set('Authorization', `Bearer ${signInResponse.body.config.token}`);

//     expect(infoByIdResponse.status).toBe(200);
//   });

//   it('deve criar uma nova credencial com sucesso', async () => {
//     // token JWT

//     const signInResponse = await request(app)
//       .post('/signin')
//       .send({
//             //dados para login
//     });

//     const newCredentialResponse = await request(app)
//       .post('/new-credential')
//       .set('Authorization', `Bearer ${signInResponse.body.config.token}`)
//       .send({
//         //dados  para criar uma nova credencial
//       });

//     expect(newCredentialResponse.status).toBe(201);
//     expect(newCredentialResponse.text).toBe('Sucessfull');
//   });

//   it('deve deletar uma credencial por ID', async () => {
//     // token JWT 

//     const signInResponse = await request(app)
//       .post('/signin')
//       .send({
//         // dados para login
//       });

//     const deleteByIdResponse = await request(app)
//       .delete('/delete-by-id/:1') 
//       .set('Authorization', `Bearer ${signInResponse.body.config.token}`);

//     expect(deleteByIdResponse.status).toBe(204);
//   });

// });
