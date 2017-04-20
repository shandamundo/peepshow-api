"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cb = function () {
    function Cb(res) {
        _classCallCheck(this, Cb);

        this.res = res;
    }

    _createClass(Cb, [{
        key: "success",
        value: function success(data) {
            this.res.json({
                message: data
            });
        }
    }, {
        key: "reject",
        value: function reject(error) {
            this.res.json({
                error: error
            });
        }
    }]);

    return Cb;
}();

;

exports.default = Cb;