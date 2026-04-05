const request = require('supertest');

describe('GET /products', () => {
  it('should return all products', async () => {
    const res = await request('http://localhost:3000').get('/products');

    if (res.statusCode === 200) {
      console.log('safaa@myprojects.com - getAll to show all product - 200 - PASSED');
    } else {
      console.log('safaa@myprojects.com - getAll to show all product - FAILED');
    }

    expect(res.statusCode).toBe(200);
  });
});