'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _quotesService = require('../services/quotesService.js');

var _quotesService2 = _interopRequireDefault(_quotesService);

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var quotesService = new _quotesService2.default();

var RequestHandler = function () {
    function RequestHandler() {
        _classCallCheck(this, RequestHandler);
    }

    _createClass(RequestHandler, [{
        key: 'validateParams',
        value: function validateParams(req) {
            return new Promise(function (resolve, reject) {
                var errors = {
                    list: []
                };

                if (req.params.numberOf) {
                    if (_validator2.default.isEmpty(req.params.numberOf)) {
                        errors.list.push('Empty number of parameter');
                    }
                    if (!_validator2.default.isInt(req.params.numberOf)) {
                        errors.list.push('Number of parameter is not an Integer');
                    }
                    if (req.params.numberOf <= 0) {
                        errors.list.push('Number of parameter must be above 0');
                    }
                }

                if (req.params.character) {
                    if (_validator2.default.isEmpty(req.params.character)) {
                        errors.list.push('Empty character parameter');
                    }
                    if (_validator2.default.isInt(req.params.character)) {
                        errors.list.push('Character field cannot be an integer');
                    }
                }

                if (req.params.season) {
                    if (!_validator2.default.isInt(req.params.season)) {
                        errors.list.push('Season parameter is not an Integer');
                    }
                }

                if (errors.list.length > 0) {
                    reject(errors);
                } else {
                    resolve();
                }
            });
        }
    }, {
        key: 'runQuery',
        value: function runQuery(req, res) {
            quotesService.quotes(req.params).then(function (result) {
                res.json(result);
            }).catch(function (error) {
                res.json(error);
            });
        }
    }, {
        key: 'quotes',
        value: function quotes(req, res) {
            var _this = this;

            this.validateParams(req).then(function () {
                _this.runQuery(req, res);
            }).catch(function (errors) {
                console.log(errors);
                res.json({
                    errors: errors.list
                });
            });
        }
    }, {
        key: 'all',
        value: function all(req, res) {
            this.runQuery(req, res);
        }
    }]);

    return RequestHandler;
}();

;

exports.default = RequestHandler;