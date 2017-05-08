import Sequelize from 'sequelize';
import sequelize from './../dbConnect.js';

const quote = sequelize.define('quote', {
    character: {
        type:Sequelize.STRING,
        allowNull:false
    },
    quote: {
        type:Sequelize.STRING,
        allowNull:false   
    },
    season: {
        type:Sequelize.INTEGER,
        allowNull:false
    },
    episode: {
        type:Sequelize.INTEGER,
        allowNull:false
    }
},
{
    freezeTableName: false
});

export default quote;