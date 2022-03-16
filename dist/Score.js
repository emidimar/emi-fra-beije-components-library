"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactNativeWeb = require("react-native-web");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var Score = function Score(props) {
  var status = '';
  var icon = '';

  if (props.status === "win") {
    status = styles.win;
    icon = /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: "fa-solid fa-check"
    });
  } else if (props.status === "lose") {
    status = styles.lose;
  } else {
    status = styles.draw;
  }

  return /*#__PURE__*/React.createElement(_reactNativeWeb.View, {
    style: styles.containerScore
  }, /*#__PURE__*/React.createElement(_reactNativeWeb.View, {
    style: status
  }, /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faCheck
  })));
};

var styles = _reactNativeWeb.StyleSheet.create({
  containerScore: {
    width: 100,
    height: 100,
    margin: 5
  },
  win: {
    flex: 1,
    backgroundColor: "#4CAF50",
    borderRadius: 100
  },
  lose: {
    flex: 1,
    backgroundColor: '#b80000',
    borderRadius: 100
  },
  draw: {
    flex: 1,
    backgroundColor: '#ABB8C3',
    borderRadius: 100
  }
});

Score.defaultProps = {
  status: "win"
};
var _default = Score;
exports.default = _default;