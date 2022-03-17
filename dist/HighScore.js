"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactNative = require("react-native");

var _ScoreBoard = _interopRequireDefault(require("./ScoreBoard"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HighScore = function HighScore(props) {
  var showData = function showData(index, key) {
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      key: key,
      style: styles.containerRow
    }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: styles.usersContainer
    }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: styles.textRow
    }, index.username)), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: styles.winsContainer
    }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: styles.textRow
    }, index.wins)), !!props.lastResults && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: styles.lastResultsContainer
    }, /*#__PURE__*/_react.default.createElement(_ScoreBoard.default, {
      lastResult: index.lastResults
    })));
  };

  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.container
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.titleContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.title
  }, props.title)), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.headerContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.usersCol
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.textHeader
  }, props.usersHeader)), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.winCol
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.textHeader
  }, props.winsHeader)), !!props.lastResults && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.lastResultsCol
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.textHeader
  }, props.lastResultsHeader))), /*#__PURE__*/_react.default.createElement(_reactNative.ScrollView, {
    contentContainerStyle: styles.contentContainer
  }, props.data.map(showData)));
};

var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  titleContainer: {
    textAlign: "center",
    height: '10%',
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  headerContainer: {
    flexDirection: 'row',
    height: '10%',
    textAlign: "center",
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    borderTopWidth: 2,
    borderTopColor: 'black'
  },
  usersCol: {
    flex: 2,
    backgroundColor: '#FF6B6B',
    justifyContent: "center",
    borderRightWidth: 2,
    borderRightColor: 'black',
    borderLeftWidth: 2,
    borderLeftColor: 'black'
  },
  winCol: {
    flex: 1,
    backgroundColor: "#F7FFF7",
    justifyContent: "center",
    borderRightWidth: 2,
    borderRightColor: 'black'
  },
  lastResultsCol: {
    flex: 2,
    backgroundColor: "#FFE66D",
    justifyContent: "center",
    borderRightWidth: 2,
    borderRightColor: 'black'
  },
  contentContainer: {
    height: '80%',
    flexDirection: 'column'
  },
  containerRow: {
    flexDirection: 'row',
    height: "5%",
    textAlign: 'center',
    justifyContent: "center",
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    borderRightWidth: 2,
    borderRightColor: 'black',
    borderLeftWidth: 2,
    borderLeftColor: 'black'
  },
  usersContainer: {
    flex: 2,
    justifyContent: "center"
  },
  winsContainer: {
    flex: 1,
    justifyContent: "center"
  },
  lastResultsContainer: {
    flex: 2,
    justifyContent: "center"
  },
  textHeader: {
    fontSize: 20,
    fontWeight: "bold"
  },
  textRow: {
    fontSize: 18,
    fontWeight: "bold"
  }
});

HighScore.defaultProps = {
  title: "HIGHSCORE",
  usersHeader: "USERNAME",
  winsHeader: "WINS",
  lastResultsHeader: "LAST RESULTS"
};
var _default = HighScore;
exports.default = _default;