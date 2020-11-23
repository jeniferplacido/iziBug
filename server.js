const config = require("./config");
const express = require('express');
const connectDB = require('./functions/connectDB');
const app = express();
const allowCors = require('cors')
const bodyParser = require('body-parser')

process.env.PORT = config.server.porta;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.json());

// Rotas da API
app.use(allowCors())
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