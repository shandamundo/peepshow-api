import QuotesService from '../services/quotesService.js';
const quotesService = new QuotesService();
import validator from 'validator';

class RequestHandler {
    validateParams(req){
        return new Promise((resolve,reject)=>{
            let errors = {
                list:[]
            };

            if(req.params.numberOf){
                if(validator.isEmpty(req.params.numberOf)){
                    errors.list.push('Empty number of parameter');
                }
                if(!validator.isInt(req.params.numberOf)){
                    errors.list.push('Number of parameter is not an Integer')   
                }
                if(req.params.numberOf <= 0){
                    errors.list.push('Number of parameter must be above 0');
                }
            }
            
            if(req.params.character){
                if(validator.isEmpty(req.params.character)){
                   errors.list.push('Empty character parameter');
                }
                if(validator.isInt(req.params.character)){
                    errors.list.push('Character field cannot be an integer');
                }
            }
            
            if(req.params.season){
                if(!validator.isInt(req.params.season)){
                    errors.list.push('Season parameter is not an Integer');
                }
            }
            
            if(errors.list.length > 0){
                reject(errors);
            } else {
                resolve();
            }
            
        });
    }
    runQuery(req, res){
        quotesService.quotes(req.params).then((result)=> {
            res.json(result)
        }).catch((error) => {
            res.json(error)
        });     
    }    
    quotes(req,res){
        this.validateParams(req).then(()=>{
            this.runQuery(req,res);
        }).catch((errors)=>{
            console.log(errors);
            res.json({
                errors: errors.list
            });     
        });
    }
    all(req,res){
        this.runQuery(req,res);
    }
};

export default RequestHandler;