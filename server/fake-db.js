const Product = require('./model/product')

class FakeDb {
    constructor() {
        this.products = [
            {
                name: 'Phone XL',
                price: 799,
                description: 'A large phone with one of the best screens',
                heading1: 'sample text',
                heading2: 'サンプル',
                heading3: 'sample text',
                headingText1: 'heading text sample1',
                headingText2: 'heading text sample3',
                headingText3: 'heading text sample2',
                coverImage: './assets/img/phone-cover.jpg',
            },
            {
                name: 'Phone Mini',
                price: 699,
                description: 'A great phone with one of the best cameras',
                heading1: 'sample text',
                heading2: 'サンプル',
                heading3: 'sample text',
                headingText1: 'heading text sample1',
                headingText2: 'heading text sample3',
                headingText3: 'heading text sample2',
                coverImage: 'data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==',
            },
            {
                name: 'Phone Standard',
                price: 299,
                description: 'test',
                heading1: 'sample text',
                heading2: 'サンプル',
                heading3: 'sample text',
                headingText1: 'heading text sample1',
                headingText2: 'heading text sample3',
                headingText3: 'heading text sample2',
                coverImage: 'data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==',
            }
        ]
    }

    async initDb() {
        await this.cleanDb()
        this.pushProductsTodb()
    }

    async cleanDb() {
        await Product.deleteMany({})
    }

    pushProductsTodb() {
        this.products.forEach(
            (product) => {
                const newProduct = new Product(product);
                newProduct.save();
            }
        )
    }

    seeDb() {
        this.pushProductsTodb()
    }
}

module.exports = FakeDb