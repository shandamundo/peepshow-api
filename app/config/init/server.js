import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import Router from './router.js';

class Server {
    start() {
        'use strict';
        
        const config = {
            port:3000
        };

        const app = express();

        //middleware
        app.use(bodyParser.json());
        app.use(helmet());

        //routing
        const router = new Router();
        router.init(app);

        app.listen(3000, ()=>{
            console.log('listening on port' + config.port);
        });  
    }
};

export default Server;


