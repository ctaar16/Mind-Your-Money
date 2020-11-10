const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
        username: { type: String, required: true },
        password: { type: String, required: true },
        email: { type: String, required: true },
        imgURL: { type: String, required: true },
        accounts: [{ type: Schema.Types.ObjectId, ref: 'accounts' }]
    },
    { timestamps: true }
)

module.exports = mongoose.model('users', User)