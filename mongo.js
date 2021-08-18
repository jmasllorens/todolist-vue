const mongoose = require('mongoose')
const connectionString = 'mongodb+srv://jael-masllorens:password-db@cluster1.3i1tl.mongodb.net/apiNodeDatabase?retryWrites=true&w=majority'
// const connectionString = process.env.MONGO_DB_URI


// Conexión a MongoDB:

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
    .then(() => {
        console.log('Database successfully connected')
    }).catch(err => {
        console.error(err)
    })

   