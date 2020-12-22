if (process.env.NODE_ENV === 'production') {
    MONGO_URL = 'mongodb+srv://Rahat:H8PdRcpKykjJXM2o@cluster0.2ugl6.mongodb.net/<dbname>?retryWrites=true&w=majority'
}  else {
    module.exports = process.env.MONGO_URL
}