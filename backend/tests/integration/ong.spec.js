const request = require('supertest'); // biblioteca recomendada para fazer chamadas de serviços em ambientes de testes
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    // antes de rodar o testes
    beforeEach(async () => {
        await connection.migrate.rollback();  // limpa o banco
        await connection.migrate.latest();  // executa as migrates
    });
    // depois de rodar todos os testes
    afterAll( async () => {
        await connection.destroy();
    })

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name:"APAD",
                email: "contato@apad.com",
                whatsapp: "41987654321",
                city: "Rio do Sul",
                uf: "SC"
            });
        
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    })
})