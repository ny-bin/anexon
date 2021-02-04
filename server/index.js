const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const FakeDb = require('./fake-db');
const path = require('path');

const productRoute = require('./routes/products')
const app = express()

mongoose.connect(config.DB_URI, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(
    () => {
        if (process.env.NODE_ENV !== 'production') {
            const fakeDb = new FakeDb()
            fakeDb.initDb();
        }
    }
)

app.use('/api/v1/product', productRoute)

if (process.env.NODE_ENV === 'production') {
    const appPath = path.join(__dirname, '..', 'dist', 'anexon')
    app.use(express.static(appPath))
    app.get("*", function (req, res) {
        res.sendFile(path.resolve(appPath, 'index.html'))
    })
}

const PORT = process.env.PORT || '3001'

app.listen(PORT, function () {
    console.log('Hello world')
})

