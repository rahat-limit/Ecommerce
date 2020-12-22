if (process.env.NODE_ENV === 'production') {
    module.exports = 'mongodb+srv://Rahat:H8PdRcpKykjJXM2o@cluster0.2ugl6.mongodb.net/<dbname>?retryWrites=true&w=majority'
}  else {
    module.exports = process.env.MONGO_URL
}