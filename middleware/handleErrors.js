module.exports = (error, request, response, next) => { //añadimos un middleware especial para que se encargue de los errores
	console.error(error)
	if (error.name == 'CastError') {
		response.status(400).send({ error: 'used id is malformed'})
	} else {
		response.status(500).end()
	}
}