import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';

class Server {
    start() {
        'use strict';
        
        const config = {
            port:3000
        };

        var app = express();

        //middleware
        app.use(bodyParser.json());
        app.use(helmet());

        //routing
        app.get('/', (req, res) => {
          res.json({
              'message': 'hello world'
          });
        });

        app.listen(3000, ()=>{
            console.log('listening on port' + config.port);
        });  
    }
};

export default Server;


