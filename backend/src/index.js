const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://marcos:1234@cluster0-mplta.mongodb.net/omni?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors());
app.use(express.json());
app.use(routes);

/*app.get('/users', (request, response) => {
    console.log(request.query);
    return response.json({message: 'Hello Teste'});
})

app.delete('/users/:id', (request, response) => {
    console.log(request.params);
    return response.json({message: 'Hello Teste'});
})

app.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({message: 'Hello Teste'});
})*/

app.listen(3333);