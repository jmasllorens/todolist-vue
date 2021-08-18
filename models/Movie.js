const {Schema, model} = require('mongoose')
const movieSchema = new Schema({
    title: String,
    spanishTitle: String,
    director: String,
    year: Number,
    isSeen: Boolean,
    img: String
})

movieSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Movie = model('Movie', movieSchema)

module.exports = Movie



 //Esto no va a hacer que la DB tenga este esquema, sino que la app, al crear una peli, tendrá que seguir este esquema y validarlo
  /*   const movieSchema = new Schema({
        title: String,
        spanishTitle: String,
        director: String,
        year: Number,
        isSeen: Boolean,
        img: String
    })

    const Movie = model('Movie', movieSchema) */ // Se pasa esta info a la carpeta 'models'

/*     Movie.find({}).then(result => {
        console.log(result)
        mongoose.connection.close()
    }) */

    /* const movie = new Movie({
        title: 'MongoDB is incredible',
        spanishTitle: 'MongoDB es increíble',
        director: 'Midu',
        year: 2021,
        isSeen: true,
        img: ''
    })

    movie.save()
        .then(result => {  // Mongoose siempre devuelve una promesa
            console.log(result) // Este resultado nos devuelve el objeto que se ha creado en la DB
            mongoose.connection.close()
        })
        .catch(err => {
            console.error(err)
        }) */