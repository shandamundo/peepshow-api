import RequestHandler from './requestHandlers/requestHandler.js';
const requestHandler = new RequestHandler();

class Router {
    init(app){
       app.get('/quotes', (req, res) => {
           requestHandler.all(req,res);
       });
       //number of
       app.get('/quotes/:numberOf', (req, res) => {
           requestHandler.quotes(req, res);
       });
       //character
       app.get('/quotes/character/:character', (req, res) => {
           requestHandler.quotes(req, res);
       });
       //season
       app.get('/quotes/season/:season', (req, res) => {
           requestHandler.quotes(req, res);
       });
       //number of and character
       app.get('/quotes/:numberOf/character/:character', (req, res) => {
           requestHandler.quotes(req, res);
       });
       //number of, character and season
       app.get('/quotes/:numberOf/character/:character/season/:season', (req, res) => {
           requestHandler.quotes(req, res);
       });
       app.get('/*', (req, res) => {
            res.json({
                error:'please provide a valid API call'
            });
       });
    }
};

export default Router;