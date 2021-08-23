const mongoose = require('mongoose')
const supertest = require('supertest')
const { app, server } = require('../index')
const logger = require('../middleware/logger')


const api = supertest(app)

test('movies are returned as json', async () => {
    await api
        .get('/api/movies')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

afterAll(() => {
    mongoose.connection.close()
    server.close()
})