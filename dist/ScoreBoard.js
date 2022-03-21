"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactNative = require("react-native");

var _Score = _interopRequireDefault(require("./Score"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScoreBoard = function ScoreBoard(props) {
  var customResult = Array.from(Array(props.resultsNumber).keys());

  var showCustomResult = function showCustomResult(element, key) {
    return /*#__PURE__*/_react.default.createElement(_Score.default, {
      key: key,
      dimension: props.dimension,
      text: key + 1
    });
  };

  var showLastResult = function showLastResult(element, key) {
    return /*#__PURE__*/_react.default.createElement(_Score.default, {
      key: key,
      dimension: props.dimension,
      result: element,
      text: key + 1
    });
  };

  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.scoreContainer
  }, !!props.lastResult ? props.lastResult.map(showLastResult) : customResult.map(showCustomResult));
};

var styles = _reactNative.StyleSheet.create({
  scoreContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

ScoreBoard.defaultProps = {
  resultsNumber: 1,
  dimension: "sm"
};
var _default = ScoreBoard;
exports.default = _default;