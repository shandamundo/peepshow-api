'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _dbConnect = require('./../dbConnect.js');

var _dbConnect2 = _interopRequireDefault(_dbConnect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var quote = _dbConnect2.default.define('quote', {
    ID: {
        type: _sequelize2.default.INTEGER,
        allowNull: false
    },
    character: {
        type: _sequelize2.default.STRING,
        allowNull: false
    },
    quote: {
        type: _sequelize2.default.STRING,
        allowNull: false
    },
    season: {
        type: _sequelize2.default.INTEGER,
        allowNull: false
    },
    episode: {
        type: _sequelize2.default.INTEGER,
        allowNull: false
    }
}, {
    freezeTableName: false
});

exports.default = quote;