const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Account = new Schema(
  {
    accountType: { type: String, required: false },
    userId: { type: Schema.Types.ObjectId, ref: 'users' },
    accountNumber: { type: String, required: true },
    routingNumber: { type: String, required: false },
    creditCardExp: { type: String, required: false },
    creditCardccv: { type: String, required: false },
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