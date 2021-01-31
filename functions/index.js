const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const FakeDb = require('./fake-db');
const path = require('path');

const app = express()

mongoose.connect(config.DB_URI, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(
    () => {
        const fakeDb = new FakeDb()
        fakeDb.initDb();
    }
)

const productRoute = require('./routes/products')

app.use('/api/v1/product', productRoute)

const appPath = path.join(__dirname, '..', 'dist', 'anexon')
app.use(express.static(appPath))
app.get("**", function (req, res) {
    res.sendFile(path.resolve(appPath, 'index.html'))
})

const PORT = process.env.PORT || '5000'

app.listen(PORT, function () {
    console.log('Hello world')
})

