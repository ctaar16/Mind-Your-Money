const db = require('../db/connection')
const Account = require('../models/account')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const accounts = 
  [
      {
        "accountType": "Checking",
        "accountNumber": "001",
        "routingNumber": "12345",
        "creditCardExp": " ",
        "creditCardccv": " ",
        "firstName": "Darth",
        "lastName": "Helmet",
        "address": "Mega Maid",
        "address2": " ",
        "city": "Long Ship",
        "state": "Spaceballs",
        "zip": "22222"
      }
  ]


await Account.insertMany(accounts)
    console.log("Created Accounts!")
}
const run = async () => {
    await main()
    db.close()
}

run()