'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _dbconfig = require('./../db/dbconfig.json');

var _dbconfig2 = _interopRequireDefault(_dbconfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sequelize = new _sequelize2.default(_dbconfig2.default.database, _dbconfig2.default.username, _dbconfig2.default.password, {
    host: _dbconfig2.default.host,
    dialect: _dbconfig2.default.dialect,
    pool: {
        max: 5,
        min: 0,
        idle: 1000
    },
    define: {
        timestamps: false
    }
});

exports.default = sequelize;