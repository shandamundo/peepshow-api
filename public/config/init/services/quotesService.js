'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _dbconfig = require('./../../db/dbconfig.json');

var _dbconfig2 = _interopRequireDefault(_dbconfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//const sequelize = new Sequelize(dbConfig.datbase, dbConfig.username, dbConfig.password, {
//    host:,
//    dialect:'mysql',
//    pool: {
//        max:5, 
//        min:0,
//        idle:1000
//    }
//});

var QuotesService = function () {
    function QuotesService() {
        _classCallCheck(this, QuotesService);
    }

    _createClass(QuotesService, [{
        key: 'all',
        value: function all() {
            console.log(_dbconfig2.default);
            return 'getting all quotes from the database';
        }
    }]);

    return QuotesService;
}();

;

exports.default = QuotesService;