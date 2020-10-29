const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Account = new Schema(
  {
    accountType: { type: String, required: true },
    accountNumber: { type: String, required: true },
    routingNumber: { type: String, required: true },
    creditCardExp: { type: String, required: true },
    creditCardccv: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: String, required: true },
    address2: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('accounts', Account)