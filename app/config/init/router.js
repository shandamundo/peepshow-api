import RequestHandler from './requestHandlers/requestHandler.js';
const requestHandler = new RequestHandler();
class Router {
    init(app){
       app.get('/', (req, res) => {
            res.json({
                error:'please call a valid endpoint'
            });
        });
       app.get('/all', (req, res) => {
            res.json({
                message: requestHandler.all()
            })
//          res.json({
//              'message': 'thanks for getting all the quotes'
//          });
       });
    }
};

export default Router;