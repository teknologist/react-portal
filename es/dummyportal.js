var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM, { createPortal } from 'react-dom';

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
        ReactDOM.unmountComponentAtNode(this.node);
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
      return createPortal(this.props.children, this.props.node || this.node);
    }
  }]);

  return DummyPortal;
}(React.Component);

DummyPortal.propTypes = {
  children: PropTypes.node,
  node: PropTypes.any
};

export default DummyPortal;