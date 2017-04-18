import Sequelize from 'sequelize';
import dbConfig from './../../db/dbconfig.json';

//const sequelize = new Sequelize(dbConfig.datbase, dbConfig.username, dbConfig.password, {
//    host:,
//    dialect:'mysql',
//    pool: {
//        max:5, 
//        min:0,
//        idle:1000
//    }
//});

class QuotesService {
    all(){
        console.log(dbConfig);
        return 'getting all quotes from the database';
    }
};

export default QuotesService;