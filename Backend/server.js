const config = require("./config");
const express = require('express');
const connectDB = require('./functions/connectDB');
const app = express();
const allowCors = require('./middlewares/cors')
const bodyParser = require('body-parser')
const cors = require('cors');

process.env.PORT = config.server.porta;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

// Rotas da API
app.use((req, res, next) => {
    //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
    //Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.use('/', require('./routes/index')); // Rotas da API
app.use('/tasks', require('./routes/tasksRoutes'));
app.use('/user', require('./routes/usersRoutes'));


app.listen(process.env.PORT, () => {
    console.log(`Escutando na ${process.env.PORT}!`);
    let connection = connectDB.connect();

    // Importando Models
    require('./models/taskModel').tasksModel;
    require('./models/userModel').userModel;
});