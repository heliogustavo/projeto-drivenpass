/* import request from 'supertest';
import { app } from '../src/app';
import { client } from '../src/repository';
import { title } from 'process';

describe('Testes de Controladores de Networks', () => {
    beforeAll(async () => {
        await client.network.deleteMany();
    });

    afterAll(async () => {
        await client.network.deleteMany();
    });

    it('deve retornar todas as networks de um usuário', async () => {
        const signUpResponse = await request(app)
            .post('/signup')
            .send({
                //irfor de login
            });

        const newNetworkResponse = await request(app)
            .post('/networks/new-network')
            .set('Authorization', `Bearer ${signUpResponse.body.config.token}`)
            .send({
                title: 'wifi',
                network: 'wi-fi de casa',
                password: 'testPassword',
                id: '1'
            });

        const allTitlesResponse = await request(app)
            .get('/networks/all-titles')
            .set('Authorization', `Bearer ${signUpResponse.body.config.token}`);

        expect(allTitlesResponse.status).toBe(200);
    });


});
 */