const db = require('../db/connection')
const Account = require('../models/account')
const User = require('../models/user')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const user1 = new User(
    { 
      "username": "darthhelmet",
      "password": "12345",
      "email": "dhelmet@spaceballs1.com",
      "imgURL": "https://www.unsplash.com/92hd.png",
      "accounts": [] 
    })
  await user1.save()
  
  const user2 = new User(
    { 
      "username": "lonestar",
      "password": "bffbarf",
      "email": "lstar@rasberry.com",
      "imgURL": "https://www.unsplash.com/92hd.png",
      "accounts": [] 
    })
  await user2.save()

  const accounts = 
  [
      {
        "accountType": "Checking",
        "userId": user1,
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
        "userId": user2,
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
        "userId": user1,
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
        "userId": user2,
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
        "userId": user1,
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
        "userId": user2,
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
        "userId": user1,
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
        "userId": user2,
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
        "userId": user1,
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
  
  user1.posts = await Account.find({ userId: user1 })
  await user1.save()
  user2.posts = await Account.find({ userId: user2 })
  await user2.save()
}

const run = async () => {
    await main()
    db.close()
}

run()