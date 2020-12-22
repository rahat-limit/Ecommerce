const mongoose = require('mongoose')

module.exports = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
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