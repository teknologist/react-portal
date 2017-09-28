'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var DummyPortal = function (_React$Component) {
  _inherits(DummyPortal, _React$Component);

  function DummyPortal() {
    _classCallCheck(this, DummyPortal);

    return _possibleConstructorReturn(this, (DummyPortal.__proto__ || Object.getPrototypeOf(DummyPortal)).apply(this, arguments));
  }

  _createClass(DummyPortal, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.node) {
        _reactDom2.default.unmountComponentAtNode(this.node);
        document.body.removeChild(this.node);
      }
      this.node = null;
    }
  }, {
    key: 'render',
    value: function render() {
      if (!canUseDOM) {
        return null;
      }
      if (!this.node) {
        this.node = document.createElement('div');
        document.body.appendChild(this.node);
      }
      return (0, _reactDom.createPortal)(this.props.children, this.props.node || this.node);
    }
  }]);

  return DummyPortal;
}(_react2.default.Component);

DummyPortal.propTypes = {
  children: _propTypes2.default.node,
  node: _propTypes2.default.any
};

exports.default = DummyPortal;