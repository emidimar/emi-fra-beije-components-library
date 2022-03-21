"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _PressableSquare = _interopRequireDefault(require("./PressableSquare"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var MOVES = ["paper", "rock", "scissors"];
var MOVES_ICON = [_freeSolidSvgIcons.faHand, _freeSolidSvgIcons.faHandBackFist, _freeSolidSvgIcons.faHandScissors, _freeSolidSvgIcons.faQuestion];

var Roshambo = function Roshambo(props) {
  var _useState = (0, _react.useState)(3),
      _useState2 = _slicedToArray(_useState, 2),
      randomMove = _useState2[0],
      setRandomMove = _useState2[1];

  var _useState3 = (0, _react.useState)(['#FFE66D', "#FFE66D", "#FFE66D"]),
      _useState4 = _slicedToArray(_useState3, 2),
      colors = _useState4[0],
      setColors = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isWaiting = _useState6[0],
      setWait = _useState6[1];

  var getRandomMove = function getRandomMove() {
    var cpu = Math.round(Math.random() * 2);
    return cpu;
  };

  var changeKeyDisplay = function changeKeyDisplay(id, isWaiting) {
    var newColors = colors.map(function (color, key) {
      if (key === id || id === true) return '#FFE66D';else {
        return "#D6D9D6";
      }
    });
    setColors(newColors);
    setWait(isWaiting);
  };

  var timer = function timer(ms) {
    return new Promise(function (res) {
      return setTimeout(res, ms);
    });
  };

  var game = function game(moveId) {
    return /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var cpu, playerTwoMove, playerOneMove, i, random;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (isWaiting) {
                _context.next = 24;
                break;
              }

              changeKeyDisplay(moveId, true); //Choose Moves

              cpu = getRandomMove();
              playerTwoMove = MOVES[cpu];
              playerOneMove = MOVES[moveId]; // Animation of CPU

              i = 0;

            case 6:
              if (!(i < 25)) {
                _context.next = 19;
                break;
              }

              random = Math.floor(Math.random() * 2);
              setRandomMove(random);

              if (!(i < 20)) {
                _context.next = 14;
                break;
              }

              _context.next = 12;
              return timer(100);

            case 12:
              _context.next = 16;
              break;

            case 14:
              _context.next = 16;
              return timer(300);

            case 16:
              i++;
              _context.next = 6;
              break;

            case 19:
              setRandomMove(cpu);
              console.log("Player 1: ", playerOneMove);
              console.log("Computer: ", playerTwoMove);

              if (playerOneMove === playerTwoMove) {
                if (!!props.onDraw) props.onDraw(playerOneMove, playerTwoMove);
              } else if (playerOneMove === "rock" && playerTwoMove === "scissors" || playerOneMove === "scissors" && playerTwoMove === "paper" || playerOneMove === "paper" && playerTwoMove === "rock") {
                if (!!props.onWin) props.onWin(playerOneMove, playerTwoMove);
              } else {
                if (!!props.onLose) props.onLose(playerOneMove, playerTwoMove);
              }

              changeKeyDisplay(true, false);

            case 24:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
  };

  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.container
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.gameRow
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: props.textStyle
  }, props.playerTwo), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.choiceRow
  }, /*#__PURE__*/_react.default.createElement(_PressableSquare.default, null, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    size: "4x",
    icon: MOVES_ICON[randomMove],
    color: "#FFE66D"
  })))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.centralRow
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: props.textStyle
  }, "VS")), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.gameRow
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: props.textStyle
  }, props.playerOne), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.choiceRow
  }, /*#__PURE__*/_react.default.createElement(_PressableSquare.default, {
    onPress: game(0)
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    size: "4x",
    icon: _freeSolidSvgIcons.faHand,
    color: colors[0]
  })), /*#__PURE__*/_react.default.createElement(_PressableSquare.default, {
    onPress: game(1)
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    size: "4x",
    icon: _freeSolidSvgIcons.faHandBackFist,
    color: colors[1]
  })), /*#__PURE__*/_react.default.createElement(_PressableSquare.default, {
    onPress: game(2)
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    size: "4x",
    icon: _freeSolidSvgIcons.faHandScissors,
    color: colors[2]
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
    backgroundColor: '#FF6B6B'
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