'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _quote = require('./../models/quote.js');

var _quote2 = _interopRequireDefault(_quote);

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var QuotesService = function () {
    function QuotesService() {
        _classCallCheck(this, QuotesService);
    }

    _createClass(QuotesService, [{
        key: 'buildQuery',
        value: function buildQuery(params) {
            var query = {
                where: {},
                order: _sequelize2.default.fn('RAND')
            };

            if (params.character) {
                var char = params.character.toLowerCase();
                var sanitized = char.substr(0, 1).toUpperCase() + char.substr(1, char.length - 1);
                query.where.character = sanitized;
            };

            if (params.numberOf) {
                query.limit = parseInt(params.numberOf);
            };

            if (params.season) {
                query.where.season = parseInt(params.season);
            }

            return query;
        }
    }, {
        key: 'quotes',
        value: function quotes(params) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                _quote2.default.findAll(_this.buildQuery(params)).then(function (result) {
                    if (result.length > 0) {
                        resolve(result);
                    } else {
                        reject({
                            error: 'Could not find quotes for character ' + params.character
                        });
                    }
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
    }]);

    return QuotesService;
}();

;

exports.default = QuotesService;