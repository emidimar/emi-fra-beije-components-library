"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactNative = require("react-native");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Score = function Score(props) {
  var result = '';
  var icon = null;
  var dimension = '';

  if (props.dimension === 'lg') {
    dimension = styles.containerScoreLG;
  } else if (props.dimension === 'md') {
    dimension = styles.containerScoreMD;
  } else {
    dimension = styles.containerScoreSM;
  }

  if (props.result === "win") {
    result = styles.win;
    icon = props.iconWin;
  } else if (props.result === "lose") {
    result = styles.lose;
    icon = props.iconLose;
  } else if (props.result === "draw") {
    result = styles.draw;
    icon = props.iconDraw;
  } else {
    result = styles.default;
    icon = /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, props.text);
  }

  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: dimension
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: result
  }, icon));
};

var styles = _reactNative.StyleSheet.create({
  containerScoreLG: {
    width: 80,
    height: 80,
    borderRadius: 100,
    padding: 6,
    backgroundColor: 'black',
    fontSize: 40,
    fontWeight: 'bold'
  },
  containerScoreMD: {
    width: 50,
    height: 50,
    borderRadius: 100,
    padding: 4,
    backgroundColor: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  },
  containerScoreSM: {
    width: 20,
    height: 20,
    padding: 2,
    backgroundColor: 'black',
    borderRadius: 100,
    fontSize: 10,
    fontWeight: 'bold'
  },
  win: {
    flex: 1,
    backgroundColor: "#4CAF50",
    borderRadius: 100,
    justifyContent: 'center'
  },
  lose: {
    flex: 1,
    backgroundColor: '#b80000',
    borderRadius: 100,
    justifyContent: 'center'
  },
  draw: {
    flex: 1,
    backgroundColor: '#ABB8C3',
    borderRadius: 100,
    justifyContent: 'center'
  },
  default: {
    flex: 1,
    backgroundColor: '#D3D4D4',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

Score.defaultProps = {
  result: "default",
  dimension: "sm"
};
var _default = Score;
exports.default = _default;