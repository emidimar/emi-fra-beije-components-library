"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = function Modal(props) {
  var onPress = function onPress() {
    props.pressCallback();
  };

  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.modalContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    style: styles.iconContainer,
    onPress: onPress
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faXmark,
    size: "5x",
    color: "red"
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.childContainer
  }, props.children));
};

var styles = _reactNative.StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.575)',
    width: '100vw',
    height: '100vh',
    zIndex: 1
  },
  iconContainer: {
    position: 'absolute',
    top: 0,
    right: 20
  },
  childContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

Modal.defaultProps = {
  children: /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, "EXAMPLE")
};
var _default = Modal;
exports.default = _default;