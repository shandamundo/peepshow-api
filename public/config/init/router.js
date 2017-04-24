'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requestHandler = require('./requestHandlers/requestHandler.js');

var _requestHandler2 = _interopRequireDefault(_requestHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var requestHandler = new _requestHandler2.default();

var Router = function () {
    function Router() {
        _classCallCheck(this, Router);
    }

    _createClass(Router, [{
        key: 'init',
        value: function init(app) {
            app.get('/quotes', function (req, res) {
                requestHandler.all(req, res);
            });
            //number of
            app.get('/quotes/:numberOf', function (req, res) {
                requestHandler.quotes(req, res);
            });
            //character
            app.get('/quotes/character/:character', function (req, res) {
                requestHandler.quotes(req, res);
            });
            //season
            app.get('/quotes/season/:season', function (req, res) {
                requestHandler.quotes(req, res);
            });
            //number of and character
            app.get('/quotes/:numberOf/character/:character', function (req, res) {
                requestHandler.quotes(req, res);
            });
            //number of, character and season
            app.get('/quotes/:numberOf/character/:character/season/:season', function (req, res) {
                requestHandler.quotes(req, res);
            });
            app.get('/*', function (req, res) {
                res.json({
                    error: 'please provide a valid API call'
                });
            });
        }
    }]);

    return Router;
}();

;

exports.default = Router;