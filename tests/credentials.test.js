/* import request from 'supertest';
import app from '../src/app';
import client from '../src/database/prisma';
import { createCredentialFactory } from './factories/factoriesCredentials';
import { createUserFactory, generateToken } from './factories/factoriesUsers';
import Cryptr from 'cryptr';
describe('Testes de Credenciais', () => {
    
      beforeEach(async () => {
        await client.credential.deleteMany();     
        await client.user.deleteMany();     
    })
      
    it('deve criar uma nova credencial com sucesso', async () => {
        const cryptr = new Cryptr(process.env.CRYPTR_SECRET)
        const user = await createUserFactory();
        const token = await generateToken(user.id)
        const newCredentialResponse = await request(app)
            .post('/credentials/create')
            .set('Authorization', token)
            .send({
                title: "facebook",
                url: "https://www.facebook.com",
                username: "nometeste",
                password: cryptr.encrypt("1234"),
            });
        expect(newCredentialResponse.status).toBe(201);
        expect(newCredentialResponse.text).toBe('Sucessfull');
    });
    it('deve retornar todas as credenciais de um usuário', async () => {
        const user = await createUserFactory();
        const token = await generateToken(user.id)
        const credentialCreated = await createCredentialFactory(user)

        const allTitlesResponse = await request(app)
            .get('/credentials/alltitles')
            .set('Authorization', token);

        expect(allTitlesResponse.status).toBe(200);
    });

    it('deve retornar informações de uma credencial por ID', async () => {
        const user = await createUserFactory();
        const token = await generateToken(user.id)

        const credentialCreated = await createCredentialFactory(user)
        const credentialId = credentialCreated.id

        const infoByIdResponse = await request(app)
        .get(`/credentials/${credentialId}`)
        .set('Authorization', token);

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
 */