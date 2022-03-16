"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactNative = require("react-native");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var Score = function Score(props) {
  var result = '';
  var icon = null;
  var dimension = '';
  var dimensionIcon = '';

  if (props.dimension === 'lg') {
    dimension = styles.containerScoreLG;
    dimensionIcon = '4x';
  } else if (props.dimension === 'md') {
    dimension = styles.containerScoreMD;
    dimensionIcon = '2x';
  } else {
    dimension = styles.containerScoreSM;
    dimensionIcon = 'sm';
  }

  if (props.result === "win") {
    result = styles.win;
    icon = /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
      size: dimensionIcon,
      icon: _freeSolidSvgIcons.faCheck
    });
  } else if (props.result === "lose") {
    result = styles.lose;
    icon = /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
      size: dimensionIcon,
      icon: _freeSolidSvgIcons.faXmark
    });
  } else if (props.result === "draw") {
    result = styles.draw;
    icon = /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
      size: dimensionIcon,
      icon: _freeSolidSvgIcons.faMinus
    });
  } else result = styles.default;

  return /*#__PURE__*/React.createElement(_reactNative.View, {
    style: dimension
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: result
  }, icon));
};

var styles = _reactNative.StyleSheet.create({
  containerScoreLG: {
    width: 100,
    height: 100,
    borderRadius: 100,
    padding: 6,
    backgroundColor: 'black'
  },
  containerScoreMD: {
    width: 50,
    height: 50,
    borderRadius: 100,
    padding: 4,
    backgroundColor: 'black'
  },
  containerScoreSM: {
    width: 20,
    height: 20,
    padding: 2,
    backgroundColor: 'black',
    borderRadius: 100
  },
  win: {
    flex: 1,
    backgroundColor: "#4CAF50",
    borderRadius: 100,
    justifyContent: 'center',
    boxSizing: 'border-box'
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
    justifyContent: 'center'
  }
});

Score.defaultProps = {
  result: "default",
  dimension: "sm"
};
var _default = Score;
exports.default = _default;