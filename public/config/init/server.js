'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Server = function () {
    function Server() {
        _classCallCheck(this, Server);
    }

    _createClass(Server, [{
        key: 'start',
        value: function start() {
            'use strict';

            var test = 'foobar';

            var config = {
                port: 3000
            };

            var app = (0, _express2.default)();

            //middleware
            app.use(_bodyParser2.default.json());
            app.use((0, _helmet2.default)());

            //routing
            app.get('/', function (req, res) {
                res.json({
                    'message': 'hello world'
                });
            });

            app.listen(3000, function () {
                console.log('listening on port' + config.port);
            });
        }
    }, {
        key: 'testingIt',
        value: function testingIt() {
            return 'testing';
        }
    }]);

    return Server;
}();

;

exports.default = Server;