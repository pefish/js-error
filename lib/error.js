'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('node-assist');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** @module */


/**
 * 错误帮助类
 * @extends Error
 */
var ErrorHelper = function (_Error) {
  _inherits(ErrorHelper, _Error);

  function ErrorHelper(errorMessage) {
    var errorCode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var errorStorage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var err = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    _classCallCheck(this, ErrorHelper);

    // 抛出ErrorHelper，但catch到的是Error对象
    var message = {
      errorMessage: errorMessage,
      errorCode: errorCode,
      errorStorage: errorStorage
    };
    err && logger.error('ERROR: ', err.message);

    var _this = _possibleConstructorReturn(this, (ErrorHelper.__proto__ || Object.getPrototypeOf(ErrorHelper)).call(this, JSON.stringify(message)));

    _this.setErrorCode(errorCode);
    _this.setErrorMessage(errorMessage);
    errorStorage && _this.setErrorStorage(errorStorage);
    return _this;
  }

  return ErrorHelper;
}(Error);

exports.default = ErrorHelper;