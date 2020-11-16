const config = require("./config");
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const connectDB = require('./functions/connectDB');
const app = express();
process.env.PORT = config.server.porta;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/* if (config.ambiente == "homologacao") {
    if (config.front.forcarHTTPS) { //Se o redirecionamento HTTP estiver habilitado, registra o middleware abaixo
        app.use((req, res, next) => { //Cria um middleware onde todas as requests passam por ele
            if ((req.headers["x-forwarded-proto"] || "").endsWith("http")) //Checa se o protocolo informado nos headers é HTTP
                res.redirect(`https://${req.headers.host}${req.url}`); //Redireciona pra HTTPS
            else //Se a requisição já é HTTPS
                next(); //Não precisa redirecionar, passa para os próximos middlewares que servirão com o conteúdo desejado
        });
    }
    app.use(express.static(config.front.caminho)); //Serve os outros arquivos, como CSSs, Javascripts, Imagens etc.
}
 */
// Rotas da API
app.use('/', require('./routes/index')); // Rotas da API
app.use('/tasks', require('./routes/tasksRoutes'));
app.use('/user', require('./routes/usersRoutes'));
// app.use('/email', require('./routes/sendEmail'));

app.listen(process.env.PORT, () => {
    console.log(`Escutando na ${process.env.PORT}!`);
    let connection = connectDB.connect();

    // Importando Models
    require('./models/taskModel').tasksModel;
    require('./models/userModel').userModel;
});