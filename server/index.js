const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const FakeDb = require('./fake-db');

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

app.use('/api/v1/product',productRoute)

const PORT = process.env.PORT || '3001'

app.listen(PORT, function () {
    console.log('Hello world')
})

