'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DummyPortal = exports.Portal = undefined;

var _portal = require('./portal');

var _portal2 = _interopRequireDefault(_portal);

var _dummyportal = require('./dummyportal');

var _dummyportal2 = _interopRequireDefault(_dummyportal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Portal = _portal2.default;
exports.DummyPortal = _dummyportal2.default;