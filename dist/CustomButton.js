"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactNativeWeb = require("react-native-web");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = _reactNativeWeb.StyleSheet.create({
  buttonContainer: {
    maxWidth: 200,
    margin: 5
  }
});

var CustomButton = function CustomButton(props) {
  var onPressHandler = function onPressHandler(e) {
    if (!!props.onPress) {
      props.onPress(e);
    }
  };

  return /*#__PURE__*/_react.default.createElement(_reactNativeWeb.View, {
    style: props.buttonContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNativeWeb.Button, {
    title: props.title,
    color: props.color,
    onPress: onPressHandler
  }));
};

CustomButton.defaultProps = {
  buttonContainer: styles.buttonContainer,
  title: "button"
};
var _default = CustomButton;
exports.default = _default;