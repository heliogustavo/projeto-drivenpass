import request from 'supertest';
import app from '../src/app';
import Cryptr from 'cryptr';
import client from '../src/database/prisma';
import { generateToken } from './factories/factoriesUsers';
import { createUserFactory } from './factories/factoriesUsers';
import { createNetworkFactory } from './factories/factoriesNetwork';

describe('Testes EndPoints de Networks', () => {
    beforeEach(async () => {
        await client.$queryRaw`TRUNCATE TABLE "networks" CASCADE`;
        await client.$queryRaw`TRUNCATE TABLE "users" CASCADE`;
    })
    it('deve criar uma nova network com sucesso', async () => {
        const user = await createUserFactory();
        const token = await generateToken(user.id)

        const newNetworkResponse = await request(app)
            .post('/networks/create')
            .set('Authorization', token)
            .send({
                title: 'wifi',
                network: 'wi-fi de casa',
                password: "1234"
            });
            //console.log(newNetworkResponse.error)
        expect(newNetworkResponse.status).toBe(201);
        expect(newNetworkResponse.text).toBe('Sucessfull');
    });
    it('deve retornar todas as networks de um usuário', async () => {
        const user = await createUserFactory();
        const token = await generateToken(user.id)

        const allTitlesResponse = await request(app)
            .get('/networks/alltitles')
            .set('Authorization', token)

        expect(allTitlesResponse.status).toBe(200);

    });
    it('deve retornar informações de uma network por ID', async () => {
        const user = await createUserFactory();
        const token = await generateToken(user.id)
        const networkCreated = await createNetworkFactory(user.id)
        const networkId = networkCreated.id

        const infoByIdResponse = await request(app)
            .get(`/networks/${networkId}`)
            .set('Authorization', token);

        expect(infoByIdResponse.status).toBe(200);
    });

    it('deve deletar uma network por ID', async () => {
        const user = await createUserFactory();
        const token = await generateToken(user.id)
        const networkCreated = await createNetworkFactory(user.id)
        const networkId = networkCreated.id

        const deleteByIdResponse = await request(app)
            .delete(`/networks/${networkId}`)
            .set('Authorization', token);

        expect(deleteByIdResponse.status).toBe(204);
    });

});