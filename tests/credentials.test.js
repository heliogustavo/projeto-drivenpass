import request from 'supertest';
import app from '../src/app';
import client from '../src/database/prisma';
import { createCredentialFactory } from './factories/factoriesCredentials';
import { createUserFactory } from './factories/factoriesUsers';
describe('Testes de Credenciais', () => {
    
    let token; //porque não consigo tipar o token como string?
    let user;

      beforeEach(async () => {
        await client.credential.deleteMany();     
        })
      
/*     it('deve criar uma nova credencial com sucesso', async () => {

        const newCredentialResponse = await request(app)
            .post('/credentials/create')
            .set('Authorization', token)
            .send({
                title: "facebook",
                url: "https://www.facebook.com",
                username: "nometeste",
                password: "1234"
            });
        expect(newCredentialResponse.status).toBe(201);
        expect(newCredentialResponse.text).toBe('Sucessfull');
    });
    it('deve retornar todas as credenciais de um usuário', async () => {

        const allTitlesResponse = await request(app)
            .get('/credentials/alltitles')
            .set('Authorization', token);

        expect(allTitlesResponse.status).toBe(200);
    }); */

    it('deve retornar informações de uma credencial por ID', async () => {
        const user = await createUserFactory();
        const token = user.token

        const credentialCreated = await createCredentialFactory(user)
        const credentialId = credentialCreated.id

        const infoByIdResponse = await request(app)
        .get(`/credentials/${credentialId}`)
        .set('Authorization', token);

        console.log("infoByIdResponse.error", infoByIdResponse.error)
        //console.log("credentialId", credentialId)
        //console.log("userTUDO", user)

        expect(infoByIdResponse.status).toBe(200);
    });

  /*   it('deve deletar uma credencial por ID', async () => {
        const credentialCreated = await createCredentialFactory(user)
        const credentialId = credentialCreated.id
        const deleteByIdResponse = await request(app)
            .delete(`/credentials/${credentialId}`)
            .set('Authorization', token);
        //console.log("userTUDO", user)

        expect(deleteByIdResponse.status).toBe(204);
    });
    it('deve retornar uma mensagem de erro ao tentar cadastrar uma credencial sem estar logado', async () => {
        const falseToken = ''
        const newCredentialResponse = await request(app)
        .post('/credentials/create')
        .set('Authorization', falseToken)
        .send({
            title: "youtube",
            url: "https://www.youtube.com",
            username: "nometeste",
            password: "1234"
        });
        expect(newCredentialResponse.status).toBe(401);

    }); */
});
