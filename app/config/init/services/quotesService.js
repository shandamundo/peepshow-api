import quote from './../models/quote.js';

class QuotesService {
    quotes(query){
        return new Promise((resolve, reject)=>{
            quote.findAll().then((result)=>{
                resolve(result)
            }).catch((error)=>{
                reject(error)
            });            
        });
    }
};

export default QuotesService;