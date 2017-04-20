import QuotesService from '../services/quotesService.js';
const quotesService = new QuotesService();
import Validate from './../validation/validate.js';
const validate = new Validate();

class RequestHandler {
    quotes(req, res){
        if(validate.query(req.query)){
            console.log('result was valid');
//        quotesService.quotes().then((result)=> {
//            res.json(result)
//        }).catch((error) => {
//            res.json(error)
//        });     
        } else {
            res.json({
                error:'Please provide valid query parameters.'
            })
        }
    }
};

export default RequestHandler;