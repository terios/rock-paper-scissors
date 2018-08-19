/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = _interopRequireDefault(__webpack_require__(/*! ./js/components/players/index.js */ "./src/js/components/players/index.js"));

var _gameType = _interopRequireDefault(__webpack_require__(/*! ./js/components/gameType */ "./src/js/components/gameType/index.js"));

var _results = _interopRequireDefault(__webpack_require__(/*! ./js/components/results */ "./src/js/components/results/index.js"));

__webpack_require__(/*! ./style/index.scss */ "./src/style/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import global styling
var gameTypeComponent = document.querySelector('.game-type');
var gameType = new _gameType.default({
  element: gameTypeComponent
});
gameType.render();
var playersComponent = document.querySelector('.players');
var players = new _index.default({
  element: playersComponent
});
players.render();
var resultsComponent = document.querySelector('.results');
var results = new _results.default({
  element: resultsComponent
});
results.render();

/***/ }),

/***/ "./src/js/components/choices/index.js":
/*!********************************************!*\
  !*** ./src/js/components/choices/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stateContainer2 = _interopRequireDefault(__webpack_require__(/*! ../../hoc/stateContainer.js */ "./src/js/hoc/stateContainer.js"));

var _store = _interopRequireDefault(__webpack_require__(/*! ../../store/store */ "./src/js/store/store.js"));

var _config = _interopRequireDefault(__webpack_require__(/*! ../../config */ "./src/js/config.js"));

__webpack_require__(/*! ./index.scss */ "./src/js/components/choices/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Choices =
/*#__PURE__*/
function (_stateContainer) {
  _inherits(Choices, _stateContainer);

  function Choices(props) {
    var _this;

    _classCallCheck(this, Choices);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Choices).call(this, {
      store: _store.default,
      element: props.element || {}
    }));
    _this.props = props;
    return _this;
  }

  _createClass(Choices, [{
    key: "render",
    value: function render() {
      var self = this;
      var content = '';
      self.props;

      if (self.props.selected) {
        content = "\n            <div class=\"choice single\" value=\"".concat(self.props.selected.name, "\">\n              <img src=").concat(self.props.selected.img, ">\n            </div>");
      } else {
        content = "".concat(_config.default.choices.map(function (choice) {
          return "\n            <div class=\"choice\" value=\"".concat(choice.name, "\">\n              <img src=").concat(choice.img, ">\n            </div>");
        }).join(''));
      }

      self.element.innerHTML = "\n    <div class=\"choices-container\">\n     ".concat(content, "\n    </div>\n");
    }
  }]);

  return Choices;
}(_stateContainer2.default);

exports.default = Choices;

/***/ }),

/***/ "./src/js/components/choices/index.scss":
/*!**********************************************!*\
  !*** ./src/js/components/choices/index.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/js/components/gameType/index.js":
/*!*********************************************!*\
  !*** ./src/js/components/gameType/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stateContainer2 = _interopRequireDefault(__webpack_require__(/*! ../../hoc/stateContainer.js */ "./src/js/hoc/stateContainer.js"));

var _store = _interopRequireDefault(__webpack_require__(/*! ../../store/store */ "./src/js/store/store.js"));

__webpack_require__(/*! ./index.scss */ "./src/js/components/gameType/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var GameType =
/*#__PURE__*/
function (_stateContainer) {
  _inherits(GameType, _stateContainer);

  function GameType(props) {
    _classCallCheck(this, GameType);

    return _possibleConstructorReturn(this, _getPrototypeOf(GameType).call(this, {
      store: _store.default,
      element: props.element || {}
    }));
  }

  _createClass(GameType, [{
    key: "render",
    value: function render() {
      var self = this;
      self.element.innerHTML = "\n     <div class=\"gameType-container\">\n        <button value=\"1\" class=\"".concat(_store.default.state.game.type == 1 ? 'active' : '', "\">Player VS COM</button>\n        <button value=\"2\" class=\"").concat(_store.default.state.game.type == 2 ? 'active' : '', "\">COM VS COM</button>\n    </div>\n      ");
      self.element.querySelectorAll('button').forEach(function (button) {
        button.addEventListener('click', function (evt) {
          var gameType = evt.target.value;

          _store.default.dispatch('selectedGame', {
            gameType: gameType
          });
        });
      });
    }
  }]);

  return GameType;
}(_stateContainer2.default);

exports.default = GameType;

/***/ }),

/***/ "./src/js/components/gameType/index.scss":
/*!***********************************************!*\
  !*** ./src/js/components/gameType/index.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/js/components/players/index.js":
/*!********************************************!*\
  !*** ./src/js/components/players/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stateContainer2 = _interopRequireDefault(__webpack_require__(/*! ../../hoc/stateContainer.js */ "./src/js/hoc/stateContainer.js"));

var _store = _interopRequireDefault(__webpack_require__(/*! ../../store/store */ "./src/js/store/store.js"));

var _choices = _interopRequireDefault(__webpack_require__(/*! ../choices */ "./src/js/components/choices/index.js"));

__webpack_require__(/*! ./index.scss */ "./src/js/components/players/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Players =
/*#__PURE__*/
function (_stateContainer) {
  _inherits(Players, _stateContainer);

  function Players(props) {
    _classCallCheck(this, Players);

    return _possibleConstructorReturn(this, _getPrototypeOf(Players).call(this, {
      store: _store.default,
      element: props.element || {}
    }));
  }

  _createClass(Players, [{
    key: "render",
    value: function render() {
      var self = this; // loop over players available
      // and inject choices component for each one of them

      self.element.innerHTML = "\n     ".concat(_store.default.state.players.map(function (item, key) {
        // choices is a dumb component, no logic inside is needed
        var selected = item.choice ? item.choice : false;
        var choices = new _choices.default({
          selected: selected
        });
        choices.render();
        return "<div class=\"player container\">\n            <div class=\"score\">\n              ".concat(item.type, " :<span> ").concat(item.score, "</span>\n            </div>\n            <div class=\"avatar\">\n              <img src=").concat(item.avatar, ">\n            </div>\n          <div class=\"", "player".concat(key, "-choices"), "\">\n            ").concat(choices.element.innerHTML, "\n          </div>\n          </div>");
      }).join(''), "\n");
      var gameType = _store.default.state.game.type;

      if (gameType == 1) {
        self.element.querySelectorAll('.choice').forEach(function (choice) {
          choice.addEventListener('click', function (evt) {
            var choice = evt.target.parentElement.getAttribute('value'); // dispatch event with human player choice

            _store.default.dispatch('selectedChoice', {
              choice: choice,
              player: 'human'
            }); // dispatch event for com to generate a choice


            _store.default.dispatch('selectedChoice', {
              player: 'com'
            });
          });
        });
      }
    }
  }]);

  return Players;
}(_stateContainer2.default);

exports.default = Players;

/***/ }),

/***/ "./src/js/components/players/index.scss":
/*!**********************************************!*\
  !*** ./src/js/components/players/index.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/js/components/results/index.js":
/*!********************************************!*\
  !*** ./src/js/components/results/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stateContainer2 = _interopRequireDefault(__webpack_require__(/*! ../../hoc/stateContainer.js */ "./src/js/hoc/stateContainer.js"));

var _store = _interopRequireDefault(__webpack_require__(/*! ../../store/store */ "./src/js/store/store.js"));

__webpack_require__(/*! ./index.scss */ "./src/js/components/results/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Reasult =
/*#__PURE__*/
function (_stateContainer) {
  _inherits(Reasult, _stateContainer);

  function Reasult(props) {
    _classCallCheck(this, Reasult);

    return _possibleConstructorReturn(this, _getPrototypeOf(Reasult).call(this, {
      store: _store.default,
      element: props.element || {}
    }));
  }

  _createClass(Reasult, [{
    key: "render",
    value: function render() {
      var self = this;
      var content = '';
      var gameType = _store.default.state.game.type;

      if (!_store.default.state.winner) {
        if (gameType == 1) {
          content = "\n        <p class=\"waiting\">select something</p>\n      ";
        } else {
          content = "\n        <button class=\"start\"> Go! </button>\n        <p class=\"waiting\">Let them fight</p>\n      ";
        }
      }

      var winner = _store.default.state.winner;

      if (winner) {
        if (winner.choice) {
          content = "\n        <div class=\"choice-image\">\n            <img src=\"".concat(winner.choice.img, "\">\n        </div>\n        <span>").concat(winner.type, "</span>\n        <div class=\"play-again\"></div>\n      ");
        } else {
          content = "\n        <div class=\"play-again\"></div>\n        <div class=\"choice-image draw\"></div>\n        <span>DRAW</span>\n      ";
        }
      }

      self.element.innerHTML = "\n      <div class=\"result-container\">\n        ".concat(content, "\n      </div>\n      ");
      self.element.querySelectorAll('.play-again').forEach(function (choice) {
        choice.addEventListener('click', function () {
          // start a new game
          _store.default.dispatch('restartGame');
        });
      });
      self.element.querySelectorAll('.start').forEach(function (choice) {
        choice.addEventListener('click', function () {
          // dispatch event for both coms
          _store.default.dispatch('selectedChoice', {
            player: 'the com'
          });

          _store.default.dispatch('selectedChoice', {
            player: 'com'
          });
        });
      });
    }
  }]);

  return Reasult;
}(_stateContainer2.default);

exports.default = Reasult;

/***/ }),

/***/ "./src/js/components/results/index.scss":
/*!**********************************************!*\
  !*** ./src/js/components/results/index.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/js/config.js":
/*!**************************!*\
  !*** ./src/js/config.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var boostedGame = {
  choices: [{
    name: 'rock',
    img: 'images/actions/rock.png',
    strength: {
      win: ['scissors', 'lizard'],
      lose: ['paper', 'spock']
    }
  }, {
    name: 'paper',
    img: 'images/actions/paper.png',
    strength: {
      win: ['rock', 'spock'],
      lose: ['scissors', 'lizard']
    }
  }, {
    name: 'scissors',
    img: 'images/actions/scissors.png',
    strength: {
      win: ['paper', 'lizard'],
      lose: ['rock', 'spock']
    }
  }, {
    name: 'lizard',
    img: 'images/actions/lizard.png',
    strength: {
      win: ['paper', 'spock'],
      lose: ['rock', 'scissors']
    }
  }, {
    name: 'spock',
    img: 'images/actions/spock.png',
    strength: {
      win: ['rock', 'scissors'],
      lose: ['lizard', 'paper']
    }
  }]
};
var regularGame = {
  choices: [{
    name: 'rock',
    img: 'images/actions/rock.png',
    strength: {
      win: ['scissors'],
      lose: ['paper']
    }
  }, {
    name: 'paper',
    img: 'images/actions/paper.png',
    strength: {
      win: ['rock'],
      lose: ['scissors']
    }
  }, {
    name: 'scissors',
    img: 'images/actions/scissors.png',
    strength: {
      win: ['paper'],
      lose: ['rock']
    }
  }]
};
var _default = boostedGame;
exports.default = _default;

/***/ }),

/***/ "./src/js/hoc/stateContainer.js":
/*!**************************************!*\
  !*** ./src/js/hoc/stateContainer.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _configureStore = _interopRequireDefault(__webpack_require__(/*! ../store/configureStore.js */ "./src/js/store/configureStore.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// represents a higher order, responsible of communicating with our state
var stateContainer = function stateContainer() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  _classCallCheck(this, stateContainer);

  var self = this; // use render method of child

  this.render = this.render || function () {};

  if (props.store instanceof _configureStore.default) {
    // re-render in case state changes
    props.store.events.subscribe('stateChange', function () {
      return self.render();
    });
  } // set our the element


  if (props.hasOwnProperty('element')) {
    this.element = props.element;
  }
};

exports.default = stateContainer;

/***/ }),

/***/ "./src/js/lib/pubsub.js":
/*!******************************!*\
  !*** ./src/js/lib/pubsub.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * pubsub library
 */
var PubSub =
/*#__PURE__*/
function () {
  function PubSub() {
    _classCallCheck(this, PubSub);

    this.events = {};
  }
  /**
   * if event does not alreadt exists, create a new one then
   * pass the callback function to it
   * @param {string} event
   * @param {function} callback
   * @returns {number} A count of callbacks for this event
   */


  _createClass(PubSub, [{
    key: "subscribe",
    value: function subscribe(event, callback) {
      var self = this;

      if (!self.events.hasOwnProperty(event)) {
        self.events[event] = [];
      }

      return self.events[event].push(callback);
    }
    /**
     * if callback for an event exists, loop over them with the given data
     * @param {string} event
     * @param {object} [data={}]
     * @returns {array} The callbacks for this event
     */

  }, {
    key: "publish",
    value: function publish(event) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var self = this;

      if (!self.events.hasOwnProperty(event)) {
        return [];
      }

      return self.events[event].map(function (callback) {
        return callback(data);
      });
    }
  }]);

  return PubSub;
}();

exports.default = PubSub;

/***/ }),

/***/ "./src/js/lib/utils.js":
/*!*****************************!*\
  !*** ./src/js/lib/utils.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomChoice = randomChoice;
exports.getChoiceObj = getChoiceObj;
exports.getWinner = getWinner;

function randomChoice() {
  var choices = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return choices[Math.floor(Math.random() * choices.length)];
}

function getChoiceObj() {
  var choices = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var value = arguments.length > 1 ? arguments[1] : undefined;
  var choice = choices.filter(function (elm) {
    if (elm.name == value) {
      return elm;
    }
  });
  return choice.length === 1 ? choice[0] : '';
}

function getWinner(players) {
  if (players[0].choice.strength.win.includes(players[1].choice.name)) {
    return 0;
  }

  if (players[0].choice.strength.lose.includes(players[1].choice.name)) {
    return 1;
  }

  return -1;
}

/***/ }),

/***/ "./src/js/store/actions.js":
/*!*********************************!*\
  !*** ./src/js/store/actions.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var actions = {
  selectedGame: function selectedGame(context, payload) {
    context.commit('selectedGame', payload);
  },
  selectedChoice: function selectedChoice(context, payload) {
    context.commit('selectedChoice', payload);
  },
  restartGame: function restartGame(context) {
    context.commit('restartGame');
  }
};
var _default = actions;
exports.default = _default;

/***/ }),

/***/ "./src/js/store/configureStore.js":
/*!****************************************!*\
  !*** ./src/js/store/configureStore.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pubsub = _interopRequireDefault(__webpack_require__(/*! ../lib/pubsub */ "./src/js/lib/pubsub.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Store =
/*#__PURE__*/
function () {
  function Store(params) {
    _classCallCheck(this, Store);

    var self = this;
    self.actions = params.actions || {};
    self.reducers = params.reducers || {};
    self.state = {};
    self.status = 'resting'; // add PubSub module as an `events` element

    self.events = new _pubsub.default(); // have our state as a proxy to controle how data is set.

    self.state = new Proxy(params.state || {}, {
      set: function set(state, key, value) {
        state[key] = value; // notify other components that may be interessted in this info

        self.events.publish('stateChange', self.state); // block any state change thaat does not use reducer

        if (self.status !== 'reducer') {
          console.warn("please use a reducer to update the state");
        } // Reset the status ready for the next operation


        self.status = 'resting';
        console.log(state);
        return true;
      }
    });
  }
  /**
   * A dispatcher for actions that looks in the actions
   * collection and runs the action if it can find it
   *
   * @param {string} actionKey
   * @param {mixed} payload
   * @returns {boolean}
   */


  _createClass(Store, [{
    key: "dispatch",
    value: function dispatch(actionKey, payload) {
      var self = this; // Run a quick check to see if the action actually exists
      // before we try to run it

      if (typeof self.actions[actionKey] !== 'function') {
        console.error("Action \"".concat(actionKey, " not available."));
        return false;
      } // Create a console group which will contain the logs from our Proxy etc


      console.groupCollapsed("performing ACTION: ".concat(actionKey)); // call the action and pass it the Store context and whatever payload was passed

      self.actions[actionKey](self, payload); // Close our console group to keep things nice and neat

      console.groupEnd();
      return true;
    }
    /**
     * Look for a reducer and modify the state object
     * if that reducer exists by calling it
     *
     * @param {string} reducerKey
     * @param {mixed} payload
     * @returns {boolean}
     */

  }, {
    key: "commit",
    value: function commit(reducerKey, payload) {
      var self = this; // check if the reducer exists

      if (typeof self.reducers[reducerKey] !== 'function') {
        console.error("reducer \"".concat(reducerKey, "\" doesn't exist"));
        return false;
      }

      self.status = 'reducer'; // get the new state after reducer did it magic

      var newState = self.reducers[reducerKey](self.state, payload); // update state only if we have a difference // could also use deep equal

      if (JSON.stringify(newState) !== JSON.stringify(self.state)) {
        // merge the new state with what we already had
        self.state = Object.assign(self.state, newState);
      }

      return true;
    }
  }]);

  return Store;
}();

exports.default = Store;

/***/ }),

/***/ "./src/js/store/initialState.js":
/*!**************************************!*\
  !*** ./src/js/store/initialState.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// this is our initial state
var _default = {
  game: {
    type: 1
  },
  players: [{
    score: 0,
    type: 'human',
    avatar: 'images/player/human.png'
  }, {
    score: 0,
    type: 'com',
    avatar: 'images/player/ai.png'
  }],
  ready: 0,
  winner: false
};
exports.default = _default;

/***/ }),

/***/ "./src/js/store/reducers.js":
/*!**********************************!*\
  !*** ./src/js/store/reducers.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = _interopRequireDefault(__webpack_require__(/*! ../config */ "./src/js/config.js"));

var _utils = __webpack_require__(/*! ../lib/utils */ "./src/js/lib/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  selectedGame: function selectedGame(state, payload) {
    // set the game type
    // restet all scores and choices made
    // update player type
    return _objectSpread({}, state, {
      game: {
        type: payload.gameType
      },
      players: state.players.map(function (player, index) {
        var newPlayer = payload.gameType == 1 ? 'human' : 'the com';
        return _objectSpread({}, player, {
          type: index == 0 ? newPlayer : 'com',
          score: 0,
          choice: null
        });
      })
    });
  },
  selectedChoice: function selectedChoice(state, payload) {
    var ready = state.ready + 1 || 1; // set the choice for the human player

    var players = state.players.map(function (item) {
      if (item.type === payload.player) {
        item.choice = payload.choice ? (0, _utils.getChoiceObj)(_config.default.choices, payload.choice) : (0, _utils.randomChoice)(_config.default.choices);
      }

      return item;
    }); // if all player have finished, check who won

    var winner = false;

    if (ready == state.players.length) {
      winner = {};
      var winnerIndex = (0, _utils.getWinner)(state.players);

      if (winnerIndex >= 0) {
        winner = state.players[winnerIndex]; // update score of the winner

        players = Object.assign(_toConsumableArray(state.players), _defineProperty({}, winnerIndex, _objectSpread({}, state.players[winnerIndex], {
          score: state.players[winnerIndex].score + 1
        })));
      }

      ready = 0;
    }

    return _objectSpread({}, state, {
      players: players,
      ready: ready,
      winner: winner
    });
  },
  restartGame: function restartGame(state) {
    return _objectSpread({}, state, {
      ready: 0,
      winner: false,
      players: state.players.map(function (player) {
        return _objectSpread({}, player, {
          choice: null
        });
      })
    });
  }
};
exports.default = _default;

/***/ }),

/***/ "./src/js/store/store.js":
/*!*******************************!*\
  !*** ./src/js/store/store.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _actions = _interopRequireDefault(__webpack_require__(/*! ./actions.js */ "./src/js/store/actions.js"));

var _reducers = _interopRequireDefault(__webpack_require__(/*! ./reducers.js */ "./src/js/store/reducers.js"));

var _initialState = _interopRequireDefault(__webpack_require__(/*! ./initialState.js */ "./src/js/store/initialState.js"));

var _configureStore = _interopRequireDefault(__webpack_require__(/*! ./configureStore.js */ "./src/js/store/configureStore.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = new _configureStore.default({
  actions: _actions.default,
  reducers: _reducers.default,
  state: _initialState.default
});

exports.default = _default;

/***/ }),

/***/ "./src/style/index.scss":
/*!******************************!*\
  !*** ./src/style/index.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2Nob2ljZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvY2hvaWNlcy9pbmRleC5zY3NzPzMzMTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvZ2FtZVR5cGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvZ2FtZVR5cGUvaW5kZXguc2Nzcz82M2I0Iiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3BsYXllcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvcGxheWVycy9pbmRleC5zY3NzP2UwZTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvcmVzdWx0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9yZXN1bHRzL2luZGV4LnNjc3M/NGM0MiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9ob2Mvc3RhdGVDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2xpYi9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3RvcmUvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0b3JlL2luaXRpYWxTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3RvcmUvcmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0b3JlL3N0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS9pbmRleC5zY3NzPzM4ZTkiXSwibmFtZXMiOlsiZ2FtZVR5cGVDb21wb25lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnYW1lVHlwZSIsIkdhbWVUeXBlIiwiZWxlbWVudCIsInJlbmRlciIsInBsYXllcnNDb21wb25lbnQiLCJwbGF5ZXJzIiwiUGxheWVycyIsInJlc3VsdHNDb21wb25lbnQiLCJyZXN1bHRzIiwiUmVzdWx0cyIsIkNob2ljZXMiLCJwcm9wcyIsInN0b3JlIiwic2VsZiIsImNvbnRlbnQiLCJzZWxlY3RlZCIsIm5hbWUiLCJpbWciLCJjb25maWciLCJjaG9pY2VzIiwibWFwIiwiY2hvaWNlIiwiam9pbiIsImlubmVySFRNTCIsInN0YXRlQ29udGFpbmVyIiwic3RhdGUiLCJnYW1lIiwidHlwZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2dCIsInRhcmdldCIsInZhbHVlIiwiZGlzcGF0Y2giLCJpdGVtIiwia2V5Iiwic2NvcmUiLCJhdmF0YXIiLCJwYXJlbnRFbGVtZW50IiwiZ2V0QXR0cmlidXRlIiwicGxheWVyIiwiUmVhc3VsdCIsIndpbm5lciIsImJvb3N0ZWRHYW1lIiwic3RyZW5ndGgiLCJ3aW4iLCJsb3NlIiwicmVndWxhckdhbWUiLCJTdG9yZSIsImV2ZW50cyIsInN1YnNjcmliZSIsImhhc093blByb3BlcnR5IiwiUHViU3ViIiwiZXZlbnQiLCJjYWxsYmFjayIsInB1c2giLCJkYXRhIiwicmFuZG9tQ2hvaWNlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiZ2V0Q2hvaWNlT2JqIiwiZmlsdGVyIiwiZWxtIiwiZ2V0V2lubmVyIiwiaW5jbHVkZXMiLCJhY3Rpb25zIiwic2VsZWN0ZWRHYW1lIiwiY29udGV4dCIsInBheWxvYWQiLCJjb21taXQiLCJzZWxlY3RlZENob2ljZSIsInJlc3RhcnRHYW1lIiwicGFyYW1zIiwicmVkdWNlcnMiLCJzdGF0dXMiLCJQcm94eSIsInNldCIsInB1Ymxpc2giLCJjb25zb2xlIiwid2FybiIsImxvZyIsImFjdGlvbktleSIsImVycm9yIiwiZ3JvdXBDb2xsYXBzZWQiLCJncm91cEVuZCIsInJlZHVjZXJLZXkiLCJuZXdTdGF0ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJPYmplY3QiLCJhc3NpZ24iLCJyZWFkeSIsImluZGV4IiwibmV3UGxheWVyIiwid2lubmVySW5kZXgiLCJpbml0aWFsU3RhdGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7QUFDQTs7QUFDQTs7QUFHQTs7OztBQURBO0FBR0EsSUFBTUEsaUJBQWlCLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixZQUF2QixDQUExQjtBQUNBLElBQU1DLFFBQVEsR0FBRyxJQUFJQyxpQkFBSixDQUFhO0FBQUVDLFNBQU8sRUFBRUw7QUFBWCxDQUFiLENBQWpCO0FBQ0FHLFFBQVEsQ0FBQ0csTUFBVDtBQUVBLElBQU1DLGdCQUFnQixHQUFH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Q0FBQ3BCLE9BQU4sQ0FBY2UsR0FBZCxDQUFrQixVQUFBc0IsTUFBTSxFQUFJO0FBQ3RFLGlDQUNLQSxNQURMO0FBRUVyQixnQkFBTSxFQUFFO0FBRlY7QUFJRCxPQUwyQztBQUQ5QztBQVFEO0FBM0RZLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSGY7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7ZUFFZSxJQUFJNkIsdUJBQUosQ0FBVTtBQUN2Qm1CLFNBQU8sRUFBUEEsZ0JBRHVCO0FBRXZCUSxVQUFRLEVBQVJBLGlCQUZ1QjtBQUd2QnBELE9BQUssRUFBRTBFO0FBSGdCLENBQVYsQzs7Ozs7Ozs7Ozs7OztBQ0xmLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0XCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFBsYXllcnMgZnJvbSAnLi9qcy9jb21wb25lbnRzL3BsYXllcnMvaW5kZXguanMnXG5pbXBvcnQgR2FtZVR5cGUgZnJvbSAnLi9qcy9jb21wb25lbnRzL2dhbWVUeXBlJ1xuaW1wb3J0IFJlc3VsdHMgZnJvbSAnLi9qcy9jb21wb25lbnRzL3Jlc3VsdHMnXG5cbi8vIGltcG9ydCBnbG9iYWwgc3R5bGluZ1xuaW1wb3J0ICcuL3N0eWxlL2luZGV4LnNjc3MnXG5cbmNvbnN0IGdhbWVUeXBlQ29tcG9uZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtdHlwZScpXG5jb25zdCBnYW1lVHlwZSA9IG5ldyBHYW1lVHlwZSh7IGVsZW1lbnQ6IGdhbWVUeXBlQ29tcG9uZW50IH0pXG5nYW1lVHlwZS5yZW5kZXIoKVxuXG5jb25zdCBwbGF5ZXJzQ29tcG9uZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcnMnKVxuY29uc3QgcGxheWVycyA9IG5ldyBQbGF5ZXJzKHsgZWxlbWVudDogcGxheWVyc0NvbXBvbmVudCB9KVxucGxheWVycy5yZW5kZXIoKVxuXG5jb25zdCByZXN1bHRzQ29tcG9uZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdHMnKVxuY29uc3QgcmVzdWx0cyA9IG5ldyBSZXN1bHRzKHsgZWxlbWVudDogcmVzdWx0c0NvbXBvbmVudCB9KVxucmVzdWx0cy5yZW5kZXIoKVxuIiwiaW1wb3J0IHN0YXRlQ29udGFpbmVyIGZyb20gJy4uLy4uL2hvYy9zdGF0ZUNvbnRhaW5lci5qcydcbmltcG9ydCBzdG9yZSBmcm9tICcuLi8uLi9zdG9yZS9zdG9yZSdcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vLi4vY29uZmlnJ1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaG9pY2VzIGV4dGVuZHMgc3RhdGVDb250YWluZXIge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcih7XG4gICAgICBzdG9yZSxcbiAgICAgIGVsZW1lbnQ6IHByb3BzLmVsZW1lbnQgfHwge31cbiAgICB9KVxuICAgIHRoaXMucHJvcHMgPSBwcm9wc1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBsZXQgY29udGVudCA9ICcnXG4gICAgc2VsZi5wcm9wc1xuICAgIGlmIChzZWxmLnByb3BzLnNlbGVjdGVkKSB7XG4gICAgICBjb250ZW50ID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNob2ljZSBzaW5nbGVcIiB2YWx1ZT1cIiR7c2VsZi5wcm9wcy5zZWxlY3RlZC5uYW1lfVwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz0ke3NlbGYucHJvcHMuc2VsZWN0ZWQuaW1nfT5cbiAgICAgICAgICAgIDwvZGl2PmBcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudCA9IGAke2NvbmZpZy5jaG9pY2VzXG4gICAgICAgIC5tYXAoKGNob2ljZSkgPT4ge1xuICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hvaWNlXCIgdmFsdWU9XCIke2Nob2ljZS5uYW1lfVwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz0ke2Nob2ljZS5pbWd9PlxuICAgICAgICAgICAgPC9kaXY+YFxuICAgICAgICB9KVxuICAgICAgICAuam9pbignJyl9YFxuICAgIH1cbiAgICBzZWxmLmVsZW1lbnQuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJjaG9pY2VzLWNvbnRhaW5lclwiPlxuICAgICAke2NvbnRlbnR9XG4gICAgPC9kaXY+XG5gXG4gIH1cbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBzdGF0ZUNvbnRhaW5lciBmcm9tICcuLi8uLi9ob2Mvc3RhdGVDb250YWluZXIuanMnXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vLi4vc3RvcmUvc3RvcmUnXG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVR5cGUgZXh0ZW5kcyBzdGF0ZUNvbnRhaW5lciB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHtcbiAgICAgIHN0b3JlLFxuICAgICAgZWxlbWVudDogcHJvcHMuZWxlbWVudCB8fCB7fVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHNlbGYuZWxlbWVudC5pbm5lckhUTUwgPSBgXG4gICAgIDxkaXYgY2xhc3M9XCJnYW1lVHlwZS1jb250YWluZXJcIj5cbiAgICAgICAgPGJ1dHRvbiB2YWx1ZT1cIjFcIiBjbGFzcz1cIiR7XG4gIHN0b3JlLnN0YXRlLmdhbWUudHlwZSA9PSAxID8gJ2FjdGl2ZScgOiAnJ1xufVwiPlBsYXllciBWUyBDT008L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB2YWx1ZT1cIjJcIiBjbGFzcz1cIiR7XG4gIHN0b3JlLnN0YXRlLmdhbWUudHlwZSA9PSAyID8gJ2FjdGl2ZScgOiAnJ1xufVwiPkNPTSBWUyBDT008L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICAgIGBcblxuICAgIHNlbGYuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKS5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB7XG4gICAgICAgIGNvbnN0IGdhbWVUeXBlID0gZXZ0LnRhcmdldC52YWx1ZVxuICAgICAgICBzdG9yZS5kaXNwYXRjaCgnc2VsZWN0ZWRHYW1lJywgeyBnYW1lVHlwZSB9KVxuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgc3RhdGVDb250YWluZXIgZnJvbSAnLi4vLi4vaG9jL3N0YXRlQ29udGFpbmVyLmpzJ1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uLy4uL3N0b3JlL3N0b3JlJ1xuXG5pbXBvcnQgQ2hvaWNlcyBmcm9tICcuLi9jaG9pY2VzJ1xuXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllcnMgZXh0ZW5kcyBzdGF0ZUNvbnRhaW5lciB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHtcbiAgICAgIHN0b3JlLFxuICAgICAgZWxlbWVudDogcHJvcHMuZWxlbWVudCB8fCB7fVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIC8vIGxvb3Agb3ZlciBwbGF5ZXJzIGF2YWlsYWJsZVxuICAgIC8vIGFuZCBpbmplY3QgY2hvaWNlcyBjb21wb25lbnQgZm9yIGVhY2ggb25lIG9mIHRoZW1cbiAgICBzZWxmLmVsZW1lbnQuaW5uZXJIVE1MID0gYFxuICAgICAke3N0b3JlLnN0YXRlLnBsYXllcnNcbiAgICAubWFwKChpdGVtLCBrZXkpID0+IHtcbiAgICAgIC8vIGNob2ljZXMgaXMgYSBkdW1iIGNvbXBvbmVudCwgbm8gbG9naWMgaW5zaWRlIGlzIG5lZWRlZFxuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBpdGVtLmNob2ljZSA/IGl0ZW0uY2hvaWNlIDogZmFsc2VcbiAgICAgIGNvbnN0IGNob2ljZXMgPSBuZXcgQ2hvaWNlcyh7IHNlbGVjdGVkIH0pXG4gICAgICBjaG9pY2VzLnJlbmRlcigpXG4gICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJwbGF5ZXIgY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2NvcmVcIj5cbiAgICAgICAgICAgICAgJHtpdGVtLnR5cGV9IDo8c3Bhbj4gJHtpdGVtLnNjb3JlfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF2YXRhclwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz0ke2l0ZW0uYXZhdGFyfT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCIke2BwbGF5ZXIke2tleX0tY2hvaWNlc2B9XCI+XG4gICAgICAgICAgICAke2Nob2ljZXMuZWxlbWVudC5pbm5lckhUTUx9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+YFxuICAgIH0pXG4gICAgLmpvaW4oJycpfVxuYFxuICAgIGNvbnN0IGdhbWVUeXBlID0gc3RvcmUuc3RhdGUuZ2FtZS50eXBlXG4gICAgaWYgKGdhbWVUeXBlID09IDEpIHtcbiAgICAgIHNlbGYuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hvaWNlJykuZm9yRWFjaCgoY2hvaWNlKSA9PiB7XG4gICAgICAgIGNob2ljZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB7XG4gICAgICAgICAgY29uc3QgY2hvaWNlID0gZXZ0LnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgndmFsdWUnKVxuICAgICAgICAgIC8vIGRpc3BhdGNoIGV2ZW50IHdpdGggaHVtYW4gcGxheWVyIGNob2ljZVxuICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKCdzZWxlY3RlZENob2ljZScsIHsgY2hvaWNlLCBwbGF5ZXI6ICdodW1hbicgfSlcbiAgICAgICAgICAvLyBkaXNwYXRjaCBldmVudCBmb3IgY29tIHRvIGdlbmVyYXRlIGEgY2hvaWNlXG4gICAgICAgICAgc3RvcmUuZGlzcGF0Y2goJ3NlbGVjdGVkQ2hvaWNlJywgeyBwbGF5ZXI6ICdjb20nIH0pXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHN0YXRlQ29udGFpbmVyIGZyb20gJy4uLy4uL2hvYy9zdGF0ZUNvbnRhaW5lci5qcydcbmltcG9ydCBzdG9yZSBmcm9tICcuLi8uLi9zdG9yZS9zdG9yZSdcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFzdWx0IGV4dGVuZHMgc3RhdGVDb250YWluZXIge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcih7XG4gICAgICBzdG9yZSxcbiAgICAgIGVsZW1lbnQ6IHByb3BzLmVsZW1lbnQgfHwge31cbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBsZXQgY29udGVudCA9ICcnXG4gICAgY29uc3QgZ2FtZVR5cGUgPSBzdG9yZS5zdGF0ZS5nYW1lLnR5cGVcblxuICAgIGlmICghc3RvcmUuc3RhdGUud2lubmVyKSB7XG4gICAgICBpZiAoZ2FtZVR5cGUgPT0gMSkge1xuICAgICAgICBjb250ZW50ID0gYFxuICAgICAgICA8cCBjbGFzcz1cIndhaXRpbmdcIj5zZWxlY3Qgc29tZXRoaW5nPC9wPlxuICAgICAgYFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGVudCA9IGBcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInN0YXJ0XCI+IEdvISA8L2J1dHRvbj5cbiAgICAgICAgPHAgY2xhc3M9XCJ3YWl0aW5nXCI+TGV0IHRoZW0gZmlnaHQ8L3A+XG4gICAgICBgXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHdpbm5lciA9IHN0b3JlLnN0YXRlLndpbm5lclxuICAgIGlmICh3aW5uZXIpIHtcbiAgICAgIGlmICh3aW5uZXIuY2hvaWNlKSB7XG4gICAgICAgIGNvbnRlbnQgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaG9pY2UtaW1hZ2VcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHt3aW5uZXIuY2hvaWNlLmltZ31cIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuPiR7d2lubmVyLnR5cGV9PC9zcGFuPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGxheS1hZ2FpblwiPjwvZGl2PlxuICAgICAgYFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGVudCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInBsYXktYWdhaW5cIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNob2ljZS1pbWFnZSBkcmF3XCI+PC9kaXY+XG4gICAgICAgIDxzcGFuPkRSQVc8L3NwYW4+XG4gICAgICBgXG4gICAgICB9XG4gICAgfVxuXG4gICAgc2VsZi5lbGVtZW50LmlubmVySFRNTCA9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtY29udGFpbmVyXCI+XG4gICAgICAgICR7Y29udGVudH1cbiAgICAgIDwvZGl2PlxuICAgICAgYFxuXG4gICAgc2VsZi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5LWFnYWluJykuZm9yRWFjaCgoY2hvaWNlKSA9PiB7XG4gICAgICBjaG9pY2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIC8vIHN0YXJ0IGEgbmV3IGdhbWVcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goJ3Jlc3RhcnRHYW1lJylcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHNlbGYuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3RhcnQnKS5mb3JFYWNoKChjaG9pY2UpID0+IHtcbiAgICAgIGNob2ljZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy8gZGlzcGF0Y2ggZXZlbnQgZm9yIGJvdGggY29tc1xuICAgICAgICBzdG9yZS5kaXNwYXRjaCgnc2VsZWN0ZWRDaG9pY2UnLCB7IHBsYXllcjogJ3RoZSBjb20nIH0pXG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKCdzZWxlY3RlZENob2ljZScsIHsgcGxheWVyOiAnY29tJyB9KVxuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJjb25zdCBib29zdGVkR2FtZSA9IHtcbiAgY2hvaWNlczogW1xuICAgIHtcbiAgICAgIG5hbWU6ICdyb2NrJyxcbiAgICAgIGltZzogJ2ltYWdlcy9hY3Rpb25zL3JvY2sucG5nJyxcbiAgICAgIHN0cmVuZ3RoOiB7XG4gICAgICAgIHdpbjogWydzY2lzc29ycycsICdsaXphcmQnXSxcbiAgICAgICAgbG9zZTogWydwYXBlcicsICdzcG9jayddXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAncGFwZXInLFxuICAgICAgaW1nOiAnaW1hZ2VzL2FjdGlvbnMvcGFwZXIucG5nJyxcbiAgICAgIHN0cmVuZ3RoOiB7XG4gICAgICAgIHdpbjogWydyb2NrJywgJ3Nwb2NrJ10sXG4gICAgICAgIGxvc2U6IFsnc2Npc3NvcnMnLCAnbGl6YXJkJ11cbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdzY2lzc29ycycsXG4gICAgICBpbWc6ICdpbWFnZXMvYWN0aW9ucy9zY2lzc29ycy5wbmcnLFxuICAgICAgc3RyZW5ndGg6IHtcbiAgICAgICAgd2luOiBbJ3BhcGVyJywgJ2xpemFyZCddLFxuICAgICAgICBsb3NlOiBbJ3JvY2snLCAnc3BvY2snXVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2xpemFyZCcsXG4gICAgICBpbWc6ICdpbWFnZXMvYWN0aW9ucy9saXphcmQucG5nJyxcbiAgICAgIHN0cmVuZ3RoOiB7XG4gICAgICAgIHdpbjogWydwYXBlcicsICdzcG9jayddLFxuICAgICAgICBsb3NlOiBbJ3JvY2snLCAnc2Npc3NvcnMnXVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ3Nwb2NrJyxcbiAgICAgIGltZzogJ2ltYWdlcy9hY3Rpb25zL3Nwb2NrLnBuZycsXG4gICAgICBzdHJlbmd0aDoge1xuICAgICAgICB3aW46IFsncm9jaycsICdzY2lzc29ycyddLFxuICAgICAgICBsb3NlOiBbJ2xpemFyZCcsICdwYXBlciddXG4gICAgICB9XG4gICAgfVxuICBdXG59XG5cblxuY29uc3QgcmVndWxhckdhbWUgPSB7XG4gIGNob2ljZXM6IFtcbiAgICB7XG4gICAgICBuYW1lOiAncm9jaycsXG4gICAgICBpbWc6ICdpbWFnZXMvYWN0aW9ucy9yb2NrLnBuZycsXG4gICAgICBzdHJlbmd0aDoge1xuICAgICAgICB3aW46IFsnc2Npc3NvcnMnXSxcbiAgICAgICAgbG9zZTogWydwYXBlciddXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAncGFwZXInLFxuICAgICAgaW1nOiAnaW1hZ2VzL2FjdGlvbnMvcGFwZXIucG5nJyxcbiAgICAgIHN0cmVuZ3RoOiB7XG4gICAgICAgIHdpbjogWydyb2NrJ10sXG4gICAgICAgIGxvc2U6IFsnc2Npc3NvcnMnXVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ3NjaXNzb3JzJyxcbiAgICAgIGltZzogJ2ltYWdlcy9hY3Rpb25zL3NjaXNzb3JzLnBuZycsXG4gICAgICBzdHJlbmd0aDoge1xuICAgICAgICB3aW46IFsncGFwZXInXSxcbiAgICAgICAgbG9zZTogWydyb2NrJ11cbiAgICAgIH1cbiAgICB9XG4gIF1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYm9vc3RlZEdhbWVcbiIsImltcG9ydCBTdG9yZSBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcydcblxuLy8gcmVwcmVzZW50cyBhIGhpZ2hlciBvcmRlciwgcmVzcG9uc2libGUgb2YgY29tbXVuaWNhdGluZyB3aXRoIG91ciBzdGF0ZVxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc3RhdGVDb250YWluZXIge1xuICBjb25zdHJ1Y3RvciAocHJvcHMgPSB7fSkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIC8vIHVzZSByZW5kZXIgbWV0aG9kIG9mIGNoaWxkXG4gICAgdGhpcy5yZW5kZXIgPSB0aGlzLnJlbmRlciB8fCBmdW5jdGlvbiAoKSB7fVxuICAgIGlmIChwcm9wcy5zdG9yZSBpbnN0YW5jZW9mIFN0b3JlKSB7XG4gICAgICAvLyByZS1yZW5kZXIgaW4gY2FzZSBzdGF0ZSBjaGFuZ2VzXG4gICAgICBwcm9wcy5zdG9yZS5ldmVudHMuc3Vic2NyaWJlKCdzdGF0ZUNoYW5nZScsICgpID0+IHNlbGYucmVuZGVyKCkpXG4gICAgfVxuICAgIC8vIHNldCBvdXIgdGhlIGVsZW1lbnRcbiAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoJ2VsZW1lbnQnKSkge1xuICAgICAgdGhpcy5lbGVtZW50ID0gcHJvcHMuZWxlbWVudFxuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiBwdWJzdWIgbGlicmFyeVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQdWJTdWIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5ldmVudHMgPSB7fVxuICB9XG5cbiAgLyoqXG4gICAqIGlmIGV2ZW50IGRvZXMgbm90IGFscmVhZHQgZXhpc3RzLCBjcmVhdGUgYSBuZXcgb25lIHRoZW5cbiAgICogcGFzcyB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gdG8gaXRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50XG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IEEgY291bnQgb2YgY2FsbGJhY2tzIGZvciB0aGlzIGV2ZW50XG4gICAqL1xuICBzdWJzY3JpYmUgKGV2ZW50LCBjYWxsYmFjaykge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIGlmICghc2VsZi5ldmVudHMuaGFzT3duUHJvcGVydHkoZXZlbnQpKSB7XG4gICAgICBzZWxmLmV2ZW50c1tldmVudF0gPSBbXVxuICAgIH1cbiAgICByZXR1cm4gc2VsZi5ldmVudHNbZXZlbnRdLnB1c2goY2FsbGJhY2spXG4gIH1cblxuICAvKipcbiAgICogaWYgY2FsbGJhY2sgZm9yIGFuIGV2ZW50IGV4aXN0cywgbG9vcCBvdmVyIHRoZW0gd2l0aCB0aGUgZ2l2ZW4gZGF0YVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRcbiAgICogQHBhcmFtIHtvYmplY3R9IFtkYXRhPXt9XVxuICAgKiBAcmV0dXJucyB7YXJyYXl9IFRoZSBjYWxsYmFja3MgZm9yIHRoaXMgZXZlbnRcbiAgICovXG4gIHB1Ymxpc2ggKGV2ZW50LCBkYXRhID0ge30pIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBpZiAoIXNlbGYuZXZlbnRzLmhhc093blByb3BlcnR5KGV2ZW50KSkge1xuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuICAgIHJldHVybiBzZWxmLmV2ZW50c1tldmVudF0ubWFwKGNhbGxiYWNrID0+IGNhbGxiYWNrKGRhdGEpKVxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gcmFuZG9tQ2hvaWNlIChjaG9pY2VzID0gW10pIHtcbiAgcmV0dXJuIGNob2ljZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hvaWNlcy5sZW5ndGgpXVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2hvaWNlT2JqIChjaG9pY2VzID0gW10sIHZhbHVlKSB7XG4gIGNvbnN0IGNob2ljZSA9IGNob2ljZXMuZmlsdGVyKGVsbSA9PiB7XG4gICAgaWYgKGVsbS5uYW1lID09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gZWxtXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBjaG9pY2UubGVuZ3RoID09PSAxID8gY2hvaWNlWzBdIDogJydcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdpbm5lciAocGxheWVycykge1xuICBpZiAocGxheWVyc1swXS5jaG9pY2Uuc3RyZW5ndGgud2luLmluY2x1ZGVzKHBsYXllcnNbMV0uY2hvaWNlLm5hbWUpKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuICBpZiAocGxheWVyc1swXS5jaG9pY2Uuc3RyZW5ndGgubG9zZS5pbmNsdWRlcyhwbGF5ZXJzWzFdLmNob2ljZS5uYW1lKSkge1xuICAgIHJldHVybiAxXG4gIH1cbiAgcmV0dXJuIC0xXG59XG4iLCJjb25zdCBhY3Rpb25zID0ge1xuICBzZWxlY3RlZEdhbWUgKGNvbnRleHQsIHBheWxvYWQpIHtcbiAgICBjb250ZXh0LmNvbW1pdCgnc2VsZWN0ZWRHYW1lJywgcGF5bG9hZClcbiAgfSxcblxuICBzZWxlY3RlZENob2ljZSAoY29udGV4dCwgcGF5bG9hZCkge1xuICAgIGNvbnRleHQuY29tbWl0KCdzZWxlY3RlZENob2ljZScsIHBheWxvYWQpXG4gIH0sXG5cbiAgcmVzdGFydEdhbWUgKGNvbnRleHQpIHtcbiAgICBjb250ZXh0LmNvbW1pdCgncmVzdGFydEdhbWUnKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFjdGlvbnNcbiIsImltcG9ydCBQdWJTdWIgZnJvbSAnLi4vbGliL3B1YnN1YidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmUge1xuICBjb25zdHJ1Y3RvciAocGFyYW1zKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi5hY3Rpb25zID0gcGFyYW1zLmFjdGlvbnMgfHwge31cbiAgICBzZWxmLnJlZHVjZXJzID0gcGFyYW1zLnJlZHVjZXJzIHx8IHt9XG4gICAgc2VsZi5zdGF0ZSA9IHt9XG4gICAgc2VsZi5zdGF0dXMgPSAncmVzdGluZydcblxuICAgIC8vIGFkZCBQdWJTdWIgbW9kdWxlIGFzIGFuIGBldmVudHNgIGVsZW1lbnRcbiAgICBzZWxmLmV2ZW50cyA9IG5ldyBQdWJTdWIoKVxuXG4gICAgLy8gaGF2ZSBvdXIgc3RhdGUgYXMgYSBwcm94eSB0byBjb250cm9sZSBob3cgZGF0YSBpcyBzZXQuXG4gICAgc2VsZi5zdGF0ZSA9IG5ldyBQcm94eShwYXJhbXMuc3RhdGUgfHwge30sIHtcbiAgICAgIHNldDogZnVuY3Rpb24gKHN0YXRlLCBrZXksIHZhbHVlKSB7XG4gICAgICAgIHN0YXRlW2tleV0gPSB2YWx1ZVxuICAgICAgICAvLyBub3RpZnkgb3RoZXIgY29tcG9uZW50cyB0aGF0IG1heSBiZSBpbnRlcmVzc3RlZCBpbiB0aGlzIGluZm9cbiAgICAgICAgc2VsZi5ldmVudHMucHVibGlzaCgnc3RhdGVDaGFuZ2UnLCBzZWxmLnN0YXRlKVxuICAgICAgICAvLyBibG9jayBhbnkgc3RhdGUgY2hhbmdlIHRoYWF0IGRvZXMgbm90IHVzZSByZWR1Y2VyXG4gICAgICAgIGlmIChzZWxmLnN0YXR1cyAhPT0gJ3JlZHVjZXInKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBwbGVhc2UgdXNlIGEgcmVkdWNlciB0byB1cGRhdGUgdGhlIHN0YXRlYClcbiAgICAgICAgfVxuICAgICAgICAvLyBSZXNldCB0aGUgc3RhdHVzIHJlYWR5IGZvciB0aGUgbmV4dCBvcGVyYXRpb25cbiAgICAgICAgc2VsZi5zdGF0dXMgPSAncmVzdGluZydcbiAgICAgICAgY29uc29sZS5sb2coc3RhdGUpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGRpc3BhdGNoZXIgZm9yIGFjdGlvbnMgdGhhdCBsb29rcyBpbiB0aGUgYWN0aW9uc1xuICAgKiBjb2xsZWN0aW9uIGFuZCBydW5zIHRoZSBhY3Rpb24gaWYgaXQgY2FuIGZpbmQgaXRcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbktleVxuICAgKiBAcGFyYW0ge21peGVkfSBwYXlsb2FkXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZGlzcGF0Y2ggKGFjdGlvbktleSwgcGF5bG9hZCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIC8vIFJ1biBhIHF1aWNrIGNoZWNrIHRvIHNlZSBpZiB0aGUgYWN0aW9uIGFjdHVhbGx5IGV4aXN0c1xuICAgIC8vIGJlZm9yZSB3ZSB0cnkgdG8gcnVuIGl0XG4gICAgaWYgKHR5cGVvZiBzZWxmLmFjdGlvbnNbYWN0aW9uS2V5XSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS5lcnJvcihgQWN0aW9uIFwiJHthY3Rpb25LZXl9IG5vdCBhdmFpbGFibGUuYClcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICAvLyBDcmVhdGUgYSBjb25zb2xlIGdyb3VwIHdoaWNoIHdpbGwgY29udGFpbiB0aGUgbG9ncyBmcm9tIG91ciBQcm94eSBldGNcbiAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGBwZXJmb3JtaW5nIEFDVElPTjogJHthY3Rpb25LZXl9YClcbiAgICAvLyBjYWxsIHRoZSBhY3Rpb24gYW5kIHBhc3MgaXQgdGhlIFN0b3JlIGNvbnRleHQgYW5kIHdoYXRldmVyIHBheWxvYWQgd2FzIHBhc3NlZFxuICAgIHNlbGYuYWN0aW9uc1thY3Rpb25LZXldKHNlbGYsIHBheWxvYWQpXG4gICAgLy8gQ2xvc2Ugb3VyIGNvbnNvbGUgZ3JvdXAgdG8ga2VlcCB0aGluZ3MgbmljZSBhbmQgbmVhdFxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICAvKipcbiAgICogTG9vayBmb3IgYSByZWR1Y2VyIGFuZCBtb2RpZnkgdGhlIHN0YXRlIG9iamVjdFxuICAgKiBpZiB0aGF0IHJlZHVjZXIgZXhpc3RzIGJ5IGNhbGxpbmcgaXRcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlZHVjZXJLZXlcbiAgICogQHBhcmFtIHttaXhlZH0gcGF5bG9hZFxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGNvbW1pdCAocmVkdWNlcktleSwgcGF5bG9hZCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIC8vIGNoZWNrIGlmIHRoZSByZWR1Y2VyIGV4aXN0c1xuICAgIGlmICh0eXBlb2Ygc2VsZi5yZWR1Y2Vyc1tyZWR1Y2VyS2V5XSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS5lcnJvcihgcmVkdWNlciBcIiR7cmVkdWNlcktleX1cIiBkb2Vzbid0IGV4aXN0YClcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBzZWxmLnN0YXR1cyA9ICdyZWR1Y2VyJ1xuICAgIC8vIGdldCB0aGUgbmV3IHN0YXRlIGFmdGVyIHJlZHVjZXIgZGlkIGl0IG1hZ2ljXG4gICAgbGV0IG5ld1N0YXRlID0gc2VsZi5yZWR1Y2Vyc1tyZWR1Y2VyS2V5XShzZWxmLnN0YXRlLCBwYXlsb2FkKVxuICAgIC8vIHVwZGF0ZSBzdGF0ZSBvbmx5IGlmIHdlIGhhdmUgYSBkaWZmZXJlbmNlIC8vIGNvdWxkIGFsc28gdXNlIGRlZXAgZXF1YWxcbiAgICBpZiAoSlNPTi5zdHJpbmdpZnkobmV3U3RhdGUpICE9PSBKU09OLnN0cmluZ2lmeShzZWxmLnN0YXRlKSkge1xuICAgICAgLy8gbWVyZ2UgdGhlIG5ldyBzdGF0ZSB3aXRoIHdoYXQgd2UgYWxyZWFkeSBoYWRcbiAgICAgIHNlbGYuc3RhdGUgPSBPYmplY3QuYXNzaWduKHNlbGYuc3RhdGUsIG5ld1N0YXRlKVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG59XG4iLCIvLyB0aGlzIGlzIG91ciBpbml0aWFsIHN0YXRlXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdhbWU6IHtcbiAgICB0eXBlOiAxXG4gIH0sXG4gIHBsYXllcnM6IFtcbiAgICB7XG4gICAgICBzY29yZTogMCxcbiAgICAgIHR5cGU6ICdodW1hbicsXG4gICAgICBhdmF0YXI6ICdpbWFnZXMvcGxheWVyL2h1bWFuLnBuZydcbiAgICB9LFxuICAgIHtcbiAgICAgIHNjb3JlOiAwLFxuICAgICAgdHlwZTogJ2NvbScsXG4gICAgICBhdmF0YXI6ICdpbWFnZXMvcGxheWVyL2FpLnBuZydcbiAgICB9XG4gIF0sXG4gIHJlYWR5OiAwLFxuICB3aW5uZXI6IGZhbHNlXG59XG4iLCJpbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCB7Z2V0Q2hvaWNlT2JqLCByYW5kb21DaG9pY2UsIGdldFdpbm5lcn0gZnJvbSAnLi4vbGliL3V0aWxzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNlbGVjdGVkR2FtZSAoc3RhdGUsIHBheWxvYWQpIHtcbiAgICAvLyBzZXQgdGhlIGdhbWUgdHlwZVxuICAgIC8vIHJlc3RldCBhbGwgc2NvcmVzIGFuZCBjaG9pY2VzIG1hZGVcbiAgICAvLyB1cGRhdGUgcGxheWVyIHR5cGVcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBnYW1lOiB7dHlwZTogcGF5bG9hZC5nYW1lVHlwZX0sXG4gICAgICBwbGF5ZXJzOiBzdGF0ZS5wbGF5ZXJzLm1hcCgocGxheWVyLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdQbGF5ZXIgPSBwYXlsb2FkLmdhbWVUeXBlID09IDEgPyAnaHVtYW4nIDogJ3RoZSBjb20nXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4ucGxheWVyLFxuICAgICAgICAgIHR5cGU6IGluZGV4ID09IDAgPyBuZXdQbGF5ZXIgOiAnY29tJyxcbiAgICAgICAgICBzY29yZTogMCxcbiAgICAgICAgICBjaG9pY2U6IG51bGxcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH0sXG4gIHNlbGVjdGVkQ2hvaWNlIChzdGF0ZSwgcGF5bG9hZCkge1xuICAgIGxldCByZWFkeSA9IHN0YXRlLnJlYWR5ICsgMSB8fCAxXG4gICAgLy8gc2V0IHRoZSBjaG9pY2UgZm9yIHRoZSBodW1hbiBwbGF5ZXJcbiAgICBsZXQgcGxheWVycyA9IHN0YXRlLnBsYXllcnMubWFwKGl0ZW0gPT4ge1xuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gcGF5bG9hZC5wbGF5ZXIpIHtcbiAgICAgICAgaXRlbS5jaG9pY2UgPSBwYXlsb2FkLmNob2ljZVxuICAgICAgICAgID8gZ2V0Q2hvaWNlT2JqKGNvbmZpZy5jaG9pY2VzLCBwYXlsb2FkLmNob2ljZSlcbiAgICAgICAgICA6IHJhbmRvbUNob2ljZShjb25maWcuY2hvaWNlcylcbiAgICAgIH1cbiAgICAgIHJldHVybiBpdGVtXG4gICAgfSlcblxuICAgIC8vIGlmIGFsbCBwbGF5ZXIgaGF2ZSBmaW5pc2hlZCwgY2hlY2sgd2hvIHdvblxuICAgIGxldCB3aW5uZXIgPSBmYWxzZVxuICAgIGlmIChyZWFkeSA9PSBzdGF0ZS5wbGF5ZXJzLmxlbmd0aCkge1xuICAgICAgd2lubmVyID0ge31cbiAgICAgIGNvbnN0IHdpbm5lckluZGV4ID0gZ2V0V2lubmVyKHN0YXRlLnBsYXllcnMpXG4gICAgICBpZiAod2lubmVySW5kZXggPj0gMCkge1xuICAgICAgICB3aW5uZXIgPSBzdGF0ZS5wbGF5ZXJzW3dpbm5lckluZGV4XVxuICAgICAgICAvLyB1cGRhdGUgc2NvcmUgb2YgdGhlIHdpbm5lclxuICAgICAgICBwbGF5ZXJzID0gT2JqZWN0LmFzc2lnbihbLi4uc3RhdGUucGxheWVyc10sIHtcbiAgICAgICAgICBbd2lubmVySW5kZXhdOiB7XG4gICAgICAgICAgICAuLi5zdGF0ZS5wbGF5ZXJzW3dpbm5lckluZGV4XSxcbiAgICAgICAgICAgIHNjb3JlOiBzdGF0ZS5wbGF5ZXJzW3dpbm5lckluZGV4XS5zY29yZSArIDFcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICByZWFkeSA9IDBcbiAgICB9XG4gICAgcmV0dXJuIHsuLi5zdGF0ZSwgcGxheWVycywgcmVhZHksIHdpbm5lcn1cbiAgfSxcbiAgcmVzdGFydEdhbWUgKHN0YXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLCByZWFkeTogMCwgd2lubmVyOiBmYWxzZSwgcGxheWVyczogc3RhdGUucGxheWVycy5tYXAocGxheWVyID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5wbGF5ZXIsXG4gICAgICAgICAgY2hvaWNlOiBudWxsXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMuanMnXG5pbXBvcnQgcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2Vycy5qcydcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi9pbml0aWFsU3RhdGUuanMnXG5pbXBvcnQgU3RvcmUgZnJvbSAnLi9jb25maWd1cmVTdG9yZS5qcydcblxuZXhwb3J0IGRlZmF1bHQgbmV3IFN0b3JlKHtcbiAgYWN0aW9ucyxcbiAgcmVkdWNlcnMsXG4gIHN0YXRlOiBpbml0aWFsU3RhdGVcbn0pXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9