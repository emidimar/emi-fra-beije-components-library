"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactNative = require("react-native");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PressableSquare = function PressableSquare(props) {
  var onPressHandler = function onPressHandler(e) {
    if (!!props.onPress) {
      props.onPress(e);
    }
  };

  return /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    style: props.container,
    onPress: onPressHandler
  }, props.children);
};

var styles = _reactNative.StyleSheet.create({
  container: {
    width: 85,
    height: 85,
    backgroundColor: '#02003A',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'black'
  }
});

PressableSquare.defaultProps = {
  container: styles.container
};
var _default = PressableSquare;
exports.default = _default;