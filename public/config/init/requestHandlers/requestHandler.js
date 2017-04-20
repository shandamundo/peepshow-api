'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _quotesService = require('../services/quotesService.js');

var _quotesService2 = _interopRequireDefault(_quotesService);

var _validate = require('./../validation/validate.js');

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var quotesService = new _quotesService2.default();

var validate = new _validate2.default();

var RequestHandler = function () {
    function RequestHandler() {
        _classCallCheck(this, RequestHandler);
    }

    _createClass(RequestHandler, [{
        key: 'quotes',
        value: function quotes(req, res) {
            if (validate.query(req.query)) {
                console.log('result was valid');
                //        quotesService.quotes().then((result)=> {
                //            res.json(result)
                //        }).catch((error) => {
                //            res.json(error)
                //        });     
            } else {
                res.json({
                    error: 'Please provide valid query parameters.'
                });
            }
        }
    }]);

    return RequestHandler;
}();

;

exports.default = RequestHandler;