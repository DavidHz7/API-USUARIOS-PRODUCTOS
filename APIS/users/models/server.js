const express = require('express');
const cors = require('cors');

class Server {

    constructor(){
        this.app = express();
        this.port = 3001;
        this.userPath = '/api/users';
        this.middleware();
        this.routes();
    }

    middleware(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){
        //this.app.use(this.userPath, require('../routes/users.route'));
        this.app.use('/api/producto', require('../routes/producto.route'));
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log("Servidor ON", this.port);
        });
    }
}

module.exports = Server;