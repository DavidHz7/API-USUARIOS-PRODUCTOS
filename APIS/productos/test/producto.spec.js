const request = require('supertest');
const Server = require('../models/server');
const server = new Server();



describe('GET /api/producto', () => {
  test('obtiene lista de productos', async () => {
    const response = await request(server.app).get('/api/producto/lista').send();

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(expect.arrayContaining([
      { id: 1, producto: 'Papa' },
      { id: 2, producto: 'Arroz' },
      { id: 3, producto: 'Café' },
    ]));
  });
});



