//console.log('Hola, nodedummies')

//const http = require('http') // forma de cargar módulos en node.js Se importa el módulo http, para hacer requests o crear un servidor
//import http from 'http'

//require('dotenv').config()
require('./mongo.js')


const express = require('express')
const cors = require('cors')
const app = express()
const Movie = require('./models/Movie')
const logger = require('./middleware/logger')
const notFound = require('./middleware/notFound')
const handleErrors = require('./middleware/handleErrors')

app.use(cors()) // Esto permite que cualquier origen funcione en nuestra app
app.use(express.json())

app.use(logger)

/* let movies = [
	{
		'id': 1,
		'title': 'Das Weisse Band',
		'spanishTitle': 'La cinta blanca',
		'director': 'Michael Haneke',
		'year': 2009,
		'isSeen': true,
		'img': 'whiteRibbon2'
	},
	{
		'id': 2,
		'title': 'Czerwony',
		'spanishTitle': 'Rojo',
		'director': 'Krzysztof Kieślowski',
		'year': 1994,
		'isSeen': false,
		'img': 'rouge'
	},
	{
		'id': 3,
		'title': 'Kynódontas',
		'spanishTitle': 'Canino',
		'director': 'Yorgos Lanthimos',
		'year': 2009,
		'isSeen': false,
		'img': 'canino'
	},
	{
		'id': 4,
		'title': 'Test',
		'spanishTitle': 'Prueba',
		'director': 'YouTube',
		'year': 2021,
		'isSeen': true,
		'img': ''
	},
	{
		'id': 5,
		'title': 'Life of Brian',
		'spanishTitle': 'La vida de Brian',
		'director': 'Terry Jones',
		'year': 1979,
		'isSeen': true,
		'img': 'lifeOfBrian'
	},
	{
		'id': 6,
		'title': 'Test2',
		'spanishTitle': 'Prueba2',
		'director': 'YouTube',
		'year': 2021,
		'isSeen': true,
		'img': ''
	}
] */



/* const app = http.createServer((request, response) => {  // guardamos el servidor que hemos creado en la constante app. Con el createServer estamos creando un callback, una función que se ejecuta cuando pasa algo. Cada vez que le llegue una request o petición a este servidor, se va a ejecutar esta función. Le pasamos el parámetro objeto request y el parámetro objeto response. Esta response tiene diferentes métodos para que puedas devolver la info que quieras.
	response.writeHead(200, { 'Content-Type': 'application/json'}) // Esta va a ser la cabecera de la respuesta: status code 200 = ok, y te indica el tipo de contenido, texto plano (para que el navegador entienda de qué tipo de dato se trata)
	response.end(JSON.stringify(movies)) // Para terminar la respuesta, devolvemos este string

}) */

// el orden de los middleware y de los path es IMPORTANTÍSIMO

app.get('/', (request, response) => {
	// cuando se haga una petición del tipo get (el paréntesis indica en qué path)
	response.send('<h1>Hello, cruel world!</h1>')
})

app.get('/api/movies', async (request, response) => {
	const movies = await Movie.find({})
	response.json(movies)
})

app.get('/api/movies/:id', (request, response, next) => {
	//const id = Number(request.params.id) // cuando ponemos params tienes todos los objetos de la ruta dinámica
	const { id } = request.params
	/* console.log({ id }) 
	const movie = movies.find(movie => movie.id == id) */

	Movie.findById(id).then(movie => {
		if (movie) {
			//console.log({movie})
			response.json(movie)
		} else {
			response.status(404).end()
		}
	}).catch(err => {
		next(err)
		/* 	console.error(err.message)
			response.status(400).end() */
	})
})

app.put('/api/movies/:id', (request, response, next) => {
	const { id } = request.params
	const movie = request.body

	const newMovieInfo = {
		title: movie.title,
		spanishTitle: movie.spanishTitle,
		director: movie.director,
		year: movie.year,
		isSeen: movie.isSeen,
		img: movie.img
	}

	Movie.findByIdAndUpdate(id, newMovieInfo, { new: true })
		.then(result => {
			response.json(result)
		})
})

app.delete('/api/movies/:id', async (request, response, next) => {
	
	const { id } = request.params
	//movies = movies.filter(movie => movie.id != id) esto sería lo que ahora en cierto modo hace la DB
	try {
		await Movie.findByIdAndDelete(id)
		response.status(204).end()
	} catch (error) {
		next(error)
	}
}) 

app.post('/api/movies', async (request, response) => {
	const movie = request.body
	//console.log(movie)

	if (!movie || !movie.title) {
		return response.status(400).json({
			error: 'Required "title" field is missing'
		})
	}

	const newMovie = new Movie({
		title: movie.title,
		spanishTitle: movie.spanishTitle,
		director: movie.director,
		year: movie.year,
		isSeen: movie.isSeen != undefined ? movie.isSeen : false, /* isSeen: movie.isSeen || false, */
		img: movie.img

	}
	)

	/* const ids = movies.map(movie => movie.id)
	const maxId = Math.max(...ids)
	const newMovie = {
		id: maxId + 1,
		title: movie.title,
		spanishTitle: movie.spanishTitle,
		director: movie.director,
		year: movie.year,
		isSeen: movie.isSeen != undefined ? movie.isSeen : false, // isSeen: movie.isSeen || false, 
		img: movie.img

	}

	movies = [...movies, newMovie] // o: movies.concat(newMovie) */
	/* newMovie.save().then(savedMovie => {
		response.json(savedMovie)
	}).catch(err => next(err)) */
	/* response.status(201).json(newMovie) */
	try {
		const savedMovie = await newMovie.save()
		response.json(savedMovie)
	} catch (error) {
		next(error)
	}
})

app.use(notFound)

app.use(handleErrors)

// En express, se inicia el servidor en asíncrono
const PORT = process.env.PORT || 3001 // Este servidor va a estar escuchando en el puerto 3001
const server =
	app.listen(PORT, () => {
		console.log(`Server running on port ${PORT}`)
	})

module.exports = { app, server }
