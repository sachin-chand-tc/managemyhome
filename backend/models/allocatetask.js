const mongoose = require('mongoose')
const validator = require('validator')

const AllocateTask = mongoose.model('AllocateTask', {
    workerId: {
        type: String,
        trim: true
    },
    taskId: {
        type: String,
        required: true,
        trim: true
    },
    assetId: {
        type: String,
        required: true,
        trim: true
    },
    timeOfAllocation: {
        type: Date,
        default: Date.now
    },
    taskToBePerformedBy: {
        type: Date
    }
})

module.exports = AllocateTask