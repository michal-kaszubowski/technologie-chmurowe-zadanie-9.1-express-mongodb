const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());

const client = new MongoClient('mongodb://db:27017');

client.connect()
    .then(() => console.log('Connection established!'))
    .catch(err => console.error(err));

const db = client.db('test');
const collection = db.collection('users');

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/index.html')));

app.post('/', (req, res) => res.send(req.body));

app.get('/users', (req, res) => {
    collection.find({}).toArray()
        .then(rep => res.send(rep))
        .catch(err => console.error(err));
});

app.post('/users', (req, res) => {
    collection.insertOne({
        name: req.body.name,
        mail: req.body.mail
    })
        .then(() => res.send('OK'))
        .catch(err => console.error(err));
});

app.put('/users:id', (req, res) => {
    collection.updateOne({_id:req.params.id},{
        name: req.body.name,
        mail: req.body.mail
    })
        .then(() => res.send('OK'))
        .catch(err => console.error(err));
});

app.delete('/users:id', (req, res) => {
    collection.deleteOne({_id:req.params.id})
        .then(() => res.send('OK'))
        .catch(err => console.error(err));
});

const port = 3000;
app.listen(port, () => console.log(`Server is UP & RUNNING!\n Listening on port ${port}...`));
