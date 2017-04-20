import _ from 'underscore';

class Validate {
    constructor(){
        this.validParams = ['limit'];
    }
    query(params){
        let isValid = true;
        let paramsArray = Object.getOwnPropertyNames(params);
        paramsArray.forEach((el, ind)=>{
           if(!_.contains(this.validParams, el)){
               isValid = false;
           }
        });
        return isValid;
    }
}

export default Validate;