"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CustomButton;

var _reactNativeWeb = require("react-native-web");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CustomButton() {
  return /*#__PURE__*/_react.default.createElement(_reactNativeWeb.View, null, /*#__PURE__*/_react.default.createElement(_reactNativeWeb.Text, null, "Bottone"), /*#__PURE__*/_react.default.createElement(_reactNativeWeb.Button, null));
}