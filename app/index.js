import express from 'express';

(function () {
   'use strict';
    
    const test = 'foobar';
    
    const config = {
        port:3000
    };
        
    var app = express();
    
    app.get('/', (req, res) => {
      res.json({
          'message': 'hello world'
      });
    });
    
    app.listen(3000, ()=>{
        console.log('listening on port' + config.port);
    });
    
}());

