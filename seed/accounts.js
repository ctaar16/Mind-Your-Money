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
        "creditCardExp": "N/A",
        "creditCardccv": "N/A",
        "firstName": "Darth",
        "lastName": "Helmet",
        "address": "Mega Maid",
        "address2": " ",
        "city": "Long Ship",
        "state": "Spaceballs",
        "zip": "22222"
      },
      {
        "accountType": "Checking",
        "accountNumber": "001",
        "routingNumber": "12345",
        "creditCardExp": "N/A",
        "creditCardccv": "N/A",
        "firstName": "Darth",
        "lastName": "Helmet",
        "address": "Mega Maid",
        "address2": " ",
        "city": "Long Ship",
        "state": "Spaceballs",
        "zip": "22222"
      },
      {
        "accountType": "Checking",
        "accountNumber": "001",
        "routingNumber": "12345",
        "creditCardExp": "N/A",
        "creditCardccv": "N/A",
        "firstName": "Darth",
        "lastName": "Helmet",
        "address": "Mega Maid",
        "address2": " ",
        "city": "Long Ship",
        "state": "Spaceballs",
        "zip": "22222"
      },
      {
        "accountType": "Savings",
        "accountNumber": "001",
        "routingNumber": "12345",
        "creditCardExp": "N/A",
        "creditCardccv": "N/A",
        "firstName": "Darth",
        "lastName": "Helmet",
        "address": "Mega Maid",
        "address2": " ",
        "city": "Long Ship",
        "state": "Spaceballs",
        "zip": "22222"
      },
      {
        "accountType": "Savings",
        "accountNumber": "001",
        "routingNumber": "12345",
        "creditCardExp": "N/A",
        "creditCardccv": "N/A",
        "firstName": "Darth",
        "lastName": "Helmet",
        "address": "Mega Maid",
        "address2": " ",
        "city": "Long Ship",
        "state": "Spaceballs",
        "zip": "22222"
      },
      {
        "accountType": "Savings",
        "accountNumber": "001",
        "routingNumber": "12345",
        "creditCardExp": "N/A",
        "creditCardccv": "N/A",
        "firstName": "Darth",
        "lastName": "Helmet",
        "address": "Mega Maid",
        "address2": " ",
        "city": "Long Ship",
        "state": "Spaceballs",
        "zip": "22222"
      },
      {
        "accountType": "CreditCard",
        "accountNumber": "001",
        "routingNumber": "N/A",
        "creditCardExp": "0204",
        "creditCardccv": "000",
        "firstName": "Darth",
        "lastName": "Helmet",
        "address": "Mega Maid",
        "address2": " ",
        "city": "Long Ship",
        "state": "Spaceballs",
        "zip": "22222"
      },
      {
        "accountType": "CreditCard",
        "accountNumber": "001",
        "routingNumber": "N/A",
        "creditCardExp": "0204",
        "creditCardccv": "000",
        "firstName": "Darth",
        "lastName": "Helmet",
        "address": "Mega Maid",
        "address2": " ",
        "city": "Long Ship",
        "state": "Spaceballs",
        "zip": "22222"
      },
      {
        "accountType": "CreditCard",
        "accountNumber": "001",
        "routingNumber": "N/A",
        "creditCardExp": "0204",
        "creditCardccv": "000",
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