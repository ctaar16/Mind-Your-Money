const db = require('../db/connection')
const Product = require('../models/account')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const products = 
  [
      {
        "accountType": "Checking",
        "accountNumber": "001",
        "routingNumber": "12345",
        "creditCardExp": "",
        "creditCardccv": "",
        "firstName": "Darth",
        "lastName": "Helmet",
        "address": "Mega Maid",
        "address2": "",
        "city": "Long Ship",
        "state": "Spaceballs",
        "zip": "22222"
      }
  ]


await Product.insertMany(products)
    console.log("Created products!")
}
const run = async () => {
    await main()
    db.close()
}

run()