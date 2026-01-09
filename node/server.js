require('dotenv').config();


const express = require('express');
const app = express();
const mongoose = require('mongoose');
const conectionDB = 'mongodb+srv://lvinicios365_db_user:nuzp89RQtgiXmEjn@cluster0.vjemgox.mongodb.net/?appName=Cluster0';
mongoose.connect(conectionDB).then(() => {
    app.emit('pronto')
}).catch(e => console.log(e))


const router = require('./routes');
const path = require('path');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.use(router);

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', '.ejs');

app.on('damn', () => {
    app.listen(3000, () => {
        console.log(`Servidor está rodando 3000`)
    })
})