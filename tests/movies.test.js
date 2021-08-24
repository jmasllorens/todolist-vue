const mongoose = require('mongoose')
const supertest = require('supertest')
const { app, server } = require('../index')
const logger = require('../middleware/logger')
const Movie = require('../models/Movie')
const { initialMovies } = require('./helpers')

const api = supertest(app)
const mongooseConnection = require('../mongo')

beforeEach( async () => {
    await Movie.deleteMany({})

    const movie1 = new Movie(initialMovies[0])
    await movie1.save()

    const movie2 = new Movie(initialMovies[1])
    await movie2.save()
})

test('movies are returned as json', async () => {
    await api.get('/api/movies')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

test('there are two movies', async () => {
    const response = await api.get('/api/movies')
    expect(response.body).toHaveLength(initialMovies.length)
})

test('the first movie is about MongoDB', async () => {
    const response = await api.get('/api/movies')
    expect(response.body[0].title).toBe('MongoDB is incredible')
})

test('some movie title is Updated title', async () => {
    const response = await api.get('/api/movies')

    const titles = response.body.map( movie => movie.title)
    expect(titles).toContain('Updated title')
})

test('a movie without title cannot be added', async () => {
    const newMovie = {
        spanishTitle: 'Próximamente, async/await',
        isSeen: false
    }

    await api
        .post('/api/movies')
        .send(newMovie)
        .expect(400)
    
    const response = await api.get('/api/movies')
   
    expect(response.body).toHaveLength(initialMovies.length)
})

test('a valid movie can be added', async () => {
    const newMovie = {
        title: 'Soon, async/await',
        spanishTitle: 'Próximamente, async/await',
        isSeen: false
    }

    await api
        .post('/api/movies')
        .send(newMovie)
        .expect(200)
        .expect('Content-Type', /application\/json/)
    
    const response = await api.get('/api/movies')
    const titles = response.body.map( movie => movie.title)
    expect(response.body).toHaveLength(initialMovies.length + 1)
    expect(titles).toContain(newMovie.title)
})

test('a movie can be deleted', async () => {
    const firstResponse = await api.get('/api/movies')
    const movies = firstResponse.body
    const movieToDelete = movies[0]

    await api
        .delete(`/api/movies/${movieToDelete.id}`)
        .expect(204)
    
        const secondResponse = await api.get('/api/movies')
        expect(secondResponse.body).toHaveLength(initialMovies.length -1)
})

test('a movie that doesnt exist cannot be deleted', async () => {

    await api
        .delete('/api/movies/1234')
        .expect(400)
    
        const response = await api.get('/api/movies')
        expect(response.body).toHaveLength(initialMovies.length)
})


afterAll(() => {

    mongoose.connection.close()
    server.close()
    console.log(mongoose.connection.readyState)
})