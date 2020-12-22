const mongoose = require('mongoose')

module.exports = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL || 'mongodb+srv://Rahat:H8PdRcpKykjJXM2o@cluster0.2ugl6.mongodb.net/<dbname>?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
        console.log(`DB has connected`)
    } catch (e) {
        console.log(e.message)
    }
}