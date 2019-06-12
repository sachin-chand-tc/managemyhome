const mongoose = require('mongoose')
const validator = require('validator')

const Asset = mongoose.model('Assets', {
    name: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    type: {
        type: String,
        default: "general",
        lowercase: true,
        trim: true
    },
    assetId: {
        type: String,
        required: true,
        trim: true
    }
})

module.exports = Asset