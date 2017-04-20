import Sequelize from 'sequelize';
import dbConfig from './../db/dbconfig.json';

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host:dbConfig.host,
    dialect:dbConfig.dialect,
    pool: {
        max:5, 
        min:0,
        idle:1000
    },
    define: {
        timestamps:false
    }
});

export default sequelize;