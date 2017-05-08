import quote from './../models/quote.js';
import Sequelize from 'sequelize';

class QuotesService {
    buildQuery(params){
        let query = {
            where: {},
            order: Sequelize.fn( 'RAND' )
        };
        
        if(params.character){    
            let char = params.character.toLowerCase();
            let sanitized = char.substr(0,1).toUpperCase() + char.substr(1,char.length - 1);
            query.where.character = sanitized;
        };
        
        if(params.numberOf){
            query.limit = parseInt(params.numberOf);
        };
        
        if(params.season){
            query.where.season = parseInt(params.season);
        }
        
        return query;
    }
    quotes(params){
        return new Promise((resolve, reject)=>{
            quote.findAll(this.buildQuery(params)).then((result)=>{
                if(result.length > 0){
                    resolve(result)
                } else {
                    reject({
                        error: 'Could not find quotes for character ' + params.character
                    });
                }
            }).catch((error)=>{
                reject(error)
            });            
        });
    }
};

export default QuotesService;