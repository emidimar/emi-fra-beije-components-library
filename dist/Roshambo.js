"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _react = require("react");

var _reactNative = require("react-native");

var _PressableSquare = _interopRequireDefault(require("./PressableSquare"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var MOVES = ["scissors", "paper", "rock"];
var MOVES_ICON = [_freeSolidSvgIcons.faHand, _freeSolidSvgIcons.faHandBackFist, _freeSolidSvgIcons.faHandScissors, _freeSolidSvgIcons.faQuestion];

var Roshambo = function Roshambo(props) {
  var _useState = (0, _react.useState)(3),
      _useState2 = _slicedToArray(_useState, 2),
      randomMove = _useState2[0],
      setRandomMove = _useState2[1];

  var getRandomMove = function getRandomMove() {
    var cpu = Math.round(Math.random() * 2);
    return cpu;
  };

  var game = function game(playerOneMove) {
    return function () {
      var cpu = getRandomMove();
      var playerTwoMove = MOVES[cpu];

      if (playerOneMove === playerTwoMove) {
        console.log("DRAW");
      } else if (playerOneMove === "rock" && playerTwoMove === "scissors" || playerOneMove === "scissors" && playerTwoMove === "paper" || playerOneMove === "paper" && playerTwoMove === "rock") {
        console.log("YOU WIN");
      } else console.log("PLAYER TWO WIN");

      setRandomMove(cpu);
    };
  };

  return /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.gameRow
  }, /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: props.textStyle
  }, props.playerTwo), /*#__PURE__*/React.createElement(_PressableSquare.default, null, /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
    size: "4x",
    icon: MOVES_ICON[randomMove],
    color: "green"
  }))), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.centralRow
  }, /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: props.textStyle
  }, "VS")), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.gameRow
  }, /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: props.textStyle
  }, props.playerOne), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.choiceRow
  }, /*#__PURE__*/React.createElement(_PressableSquare.default, {
    onPress: game('paper')
  }, /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
    size: "4x",
    icon: _freeSolidSvgIcons.faHand,
    color: "pink"
  })), /*#__PURE__*/React.createElement(_PressableSquare.default, {
    onPress: game('rock')
  }, /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
    size: "4x",
    icon: _freeSolidSvgIcons.faHandBackFist,
    color: "pink"
  })), /*#__PURE__*/React.createElement(_PressableSquare.default, {
    onPress: game('scissors')
  }, /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
    size: "4x",
    icon: _freeSolidSvgIcons.faHandScissors,
    color: "pink"
  })))));
};

var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  gameRow: {
    height: '40%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  centralRow: {
    height: '20%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: "#2D6386"
  },
  choiceRow: {
    marginTop: "4%",
    width: '80%',
    maxWidth: 500,
    flexDirection: "row",
    justifyContent: 'space-around'
  },
  textStyle: {
    fontSize: 40,
    fontWeight: 'bold'
  }
});

Roshambo.defaultProps = {
  playerTwo: "Computer",
  playerOne: "Player 1",
  textStyle: styles.textStyle
};
var _default = Roshambo;
exports.default = _default;