'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    'use strict';

    var test = 'foobar';

    var config = {
        port: 3000
    };

    var app = (0, _express2.default)();

    app.get('/', function (req, res) {
        res.json({
            'message': 'hello world'
        });
    });

    app.listen(3000, function () {
        console.log('listening on port' + config.port);
    });
})();