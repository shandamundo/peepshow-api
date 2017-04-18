import QuotesService from '../services/quotesService.js';
const quotesService = new QuotesService();

class RequestHandler {
    all(){
        return quotesService.all();
    }
};

export default RequestHandler;