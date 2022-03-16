"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactNativeWeb = require("react-native-web");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = _reactNativeWeb.StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: 'grey'
  }
});

var PressableSquare = function PressableSquare(props) {
  var onPressHandler = function onPressHandler(e) {
    if (!!props.onPress) {
      props.onPress(e);
    }
  };

  return /*#__PURE__*/_react.default.createElement(_reactNativeWeb.Pressable, {
    style: props.container,
    onPress: onPressHandler
  }, /*#__PURE__*/_react.default.createElement(_reactNativeWeb.Image, {
    source: props.imgUrl
  }));
};

PressableSquare.defaultProps = {
  container: styles.container
};
var _default = PressableSquare;
exports.default = _default;