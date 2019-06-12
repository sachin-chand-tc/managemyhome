const mongoose = require('mongoose')
const validator = require('validator')

const Worker = mongoose.model('Workers', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        trim: true
    },
    assetsId: {
        type: Array,
        required: true
    },
    workerId: {
        type: String,
        required: true
    },
    tasks: {
        type: Array
    }
})

module.exports = Worker