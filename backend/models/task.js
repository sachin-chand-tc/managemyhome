const mongoose = require('mongoose')
const validator = require('validator')

const Task = mongoose.model('Tasks', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    assetId: {
        type: String,
        required: true,
        trim: true
    },
    assigned: {
        type: Boolean,
        required: true
    },
    taskId: {
        type: String,
        required: true,
        trim: true
    },
    frequency: {
        type: String,
        lowercase: true,
        required: true,
        trim: true
    }
})

module.exports = Task