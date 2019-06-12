const express = require('express')
require('./db/mongoose')
const Worker = require('./models/worker')
const Asset = require('./models/asset')
const Task = require('./models/task')
const AllocateTask = require('./models/allocatetask')
const app = express()
const port = process.env.PORT || 8000
const path = require('path');


app.use(express.static(path.join(__dirname, '../client/build')));

app.use(express.json())
// Add headers
// app.use(function (req, res, next) {

//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();
// });

app.post('/add-asset', (req, res) => {
    console.log("asset being added")
    const asset = new Asset(req.body)
    console.log(req.body)

    asset.save().then(() => {
        res.send(asset)
    }).catch((error) => {
        res.status(500).send(error)
    })
})

app.post('/add-worker', (req, res) => {
    const worker = new Worker(req.body)
    console.log(req.body)
    worker.save().then(() => {
        res.send(worker)
    }).catch((error) => {
        res.status(500).send(error)
        console.log("error")
    })
})

app.post('/add-task', (req, res) => {
    console.log("task")
    const task = new Task(req.body)
    console.log(req.body)
    task.save().then(() => {
        res.send(task)
    }).catch((error) => {
        res.status(500).send(error)
    })
})

app.post('/allocate-task', (req, res) => {
    const allocatetask = new AllocateTask(req.body)
    console.log(req.body)
    const task = allocatetask.taskId
    const worker = allocatetask.workerId
    Task.findOneAndUpdate({ taskId: task }, {
        assigned: true
    }).then((task) => {
        console.log(task)
        if (!task) {
            console.log("task not found")
            return res.status(404).send()
        }
        else return Worker.findOneAndUpdate({ workerId: worker }, { $push: { tasks: task.taskId } })
    }).then((worker) => {
        if (!worker) res.status(404).send()
        else return allocatetask.save()
    }).then(() => {
        res.status(200).send(allocatetask)
    }).catch((error) => {
        res.status(500).send(error)
    })
})

app.get('/assets/all', (req, res) => {
    Asset.find({}).then((assets) => {
        if (!assets) res.status(404).send()
        res.send(assets)
    }).catch((error) => {
        res.status(500).send()
    })
})

app.get('/workers/all', (req, res) => {
    Worker.find({}).then((workers) => {
        if (!workers) res.status(404).send()
        res.send(workers)
    }).catch((error) => {
        res.status(500).send()
    })
})

app.get('/tasks/all', (req, res) => {
    Task.find({}).then((tasks) => {
        if (!tasks) res.status(404).send()
        res.send(tasks)
    }).catch((error) => {
        res.status(500).send()
    })
})

app.get('/get-tasks-for-worker/:id', (req, res) => {
    const id = req.params.id
    Worker.findOne({ workerId: id }).then((worker) => {
        if (!worker) res.status(404).send()
        res.send(worker);
    }).catch((error) => {
        res.status(500).send()
    })
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '../client/build/index.html'));
});

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})