'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Validate = function () {
    function Validate() {
        _classCallCheck(this, Validate);

        this.validParams = ['limit'];
    }

    _createClass(Validate, [{
        key: 'query',
        value: function query(params) {
            var _this = this;

            var isValid = true;
            var paramsArray = Object.getOwnPropertyNames(params);
            paramsArray.forEach(function (el, ind) {
                if (!_underscore2.default.contains(_this.validParams, el)) {
                    isValid = false;
                }
            });
            return isValid;
        }
    }]);

    return Validate;
}();

exports.default = Validate;