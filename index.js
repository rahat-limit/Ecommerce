const path = require('path')
require('dotenv').config({ path : './config/.env' })

const app = require('express')()

app.use(require('body-parser').urlencoded({ extended: true }))
app.use(require('body-parser').json())
app.use(require('cors')())
app.use(require('express').static('public'))

require('./MongoDB/db')()

app.use('/api/users', require('./routes/auth.routes'))
app.use('/api/products', require('./routes/product.routes'))
app.use('/api/category', require('./routes/categor.routes'))

if (process.env.NODE_ENV === 'production') {
    app.use(require('express').static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(process.env.PORT, () => {
    console.log(`Server running on port: ${process.env.PORT}`)
})