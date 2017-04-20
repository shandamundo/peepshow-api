import RequestHandler from './requestHandlers/requestHandler.js';
const requestHandler = new RequestHandler();

class Router {
    init(app){
       app.get('/', (req, res) => {
            res.json({
                error:'please call a valid endpoint'
            });
        });
       app.get('/quotes', (req, res) => {
           requestHandler.quotes(req,res);
       });
    }
};

export default Router;