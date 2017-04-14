import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';

class Server {
    start() {
        'use strict';
        const test = 'foobar';

        const config = {
            port:3000
        };

        var app = express();

        //middleware
        app.use(bodyParser.json());
        app.use(helmet());
        
        app.listen(3000, ()=>{
            console.log('listening on port' + config.port);
        });  
    }
};

export default Server;


