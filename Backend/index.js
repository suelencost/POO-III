const http = require('http');
const express = require('express');
const status = require('http-status');
const sequelize = require('./src/database/database');
const app = express();

//para fazer a permissao de acesso de outras api
const cors = require('cors');

const routes = require('./src/routes/routes');

app.use(express.json());

app.use(cors());

app.use('/sistema', routes);

app.use((req, res, next) => {
    res.status.apply(status.NOT_FOUND).send("Page not found");
});

app.use((req, res, next) => {
    res.status.apply(status.INTERNAL_SERVER_ERROR).json({error});
});

sequelize.sync({force: false}).then( () => {
    const port = 3008;
    app.set("port", port);
    const server = http.createServer(app);
    server.listen(port);
});