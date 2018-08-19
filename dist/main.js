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
/*
const player1 = new Player({ element: player1Elm });
player1.render();

const player2 = new Player({ element: player2Elm });
player2.render();
*/

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
      var props = self.props;

      if (props.selected) {
        content = "\n            <div class=\"choice single\" value=\"".concat(props.selected.name, "\">\n              <img src=").concat(props.selected.img, ">\n            </div>");
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
          console.log('woooooo');
          content = "\n        <p class=\"waiting\">select something</p>\n      ";
        } else {
          console.log('llllll');
          content = "\n        <button class=\"start\"> Go! </button>\n        <p class=\"waiting\">Let them fight</p>\n      ";
        }
      }

      var winner = _store.default.state.winner;

      if (winner) {
        if (winner.choice) {
          content = "\n        <div class=\"choice-image\">\n            <img src=\"".concat(winner.choice.img, "\">\n        </div>\n        <span>").concat(winner.type, "</span>\n        <div class=\"play-again\"></div>\n      ");
        } else {
          content = "\n        <div class=\"play-again\"></div>\n        <span>DRAW</span>\n      ";
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
var _default = {
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

/***/ "./src/js/pubsub/index.js":
/*!********************************!*\
  !*** ./src/js/pubsub/index.js ***!
  \********************************/
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

var _pubsub = _interopRequireDefault(__webpack_require__(/*! ../pubsub */ "./src/js/pubsub/index.js"));

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
        self.state = Object.assign(self.state, newState); // TODO: check with spread later
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
      winner: false
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2Nob2ljZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvY2hvaWNlcy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2dhbWVUeXBlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2dhbWVUeXBlL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvcGxheWVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9wbGF5ZXJzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvcmVzdWx0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9yZXN1bHRzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaG9jL3N0YXRlQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3B1YnN1Yi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3RvcmUvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0b3JlL2luaXRpYWxTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3RvcmUvcmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0b3JlL3N0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImdhbWVUeXBlQ29tcG9uZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2FtZVR5cGUiLCJHYW1lVHlwZSIsImVsZW1lbnQiLCJyZW5kZXIiLCJwbGF5ZXJzQ29tcG9uZW50IiwicGxheWVycyIsIlBsYXllcnMiLCJyZXN1bHRzQ29tcG9uZW50IiwicmVzdWx0cyIsIlJlc3VsdHMiLCJDaG9pY2VzIiwicHJvcHMiLCJzdG9yZSIsInNlbGYiLCJjb250ZW50Iiwic2VsZWN0ZWQiLCJuYW1lIiwiaW1nIiwiY29uZmlnIiwiY2hvaWNlcyIsIm1hcCIsImNob2ljZSIsImpvaW4iLCJpbm5lckhUTUwiLCJzdGF0ZUNvbnRhaW5lciIsInN0YXRlIiwiZ2FtZSIsInR5cGUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRpc3BhdGNoIiwiaXRlbSIsImtleSIsInNjb3JlIiwiYXZhdGFyIiwicGFyZW50RWxlbWVudCIsImdldEF0dHJpYnV0ZSIsInBsYXllciIsIlJlYXN1bHQiLCJ3aW5uZXIiLCJjb25zb2xlIiwibG9nIiwic3RyZW5ndGgiLCJ3aW4iLCJsb3NlIiwiU3RvcmUiLCJldmVudHMiLCJzdWJzY3JpYmUiLCJoYXNPd25Qcm9wZXJ0eSIsInJhbmRvbUNob2ljZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImdldENob2ljZU9iaiIsImZpbHRlciIsImVsbSIsImdldFdpbm5lciIsImluY2x1ZGVzIiwiUHViU3ViIiwiZXZlbnQiLCJjYWxsYmFjayIsInB1c2giLCJkYXRhIiwiYWN0aW9ucyIsInNlbGVjdGVkR2FtZSIsImNvbnRleHQiLCJwYXlsb2FkIiwiY29tbWl0Iiwic2VsZWN0ZWRDaG9pY2UiLCJyZXN0YXJ0R2FtZSIsInBhcmFtcyIsInJlZHVjZXJzIiwic3RhdHVzIiwiUHJveHkiLCJzZXQiLCJwdWJsaXNoIiwid2FybiIsImFjdGlvbktleSIsImVycm9yIiwiZ3JvdXBDb2xsYXBzZWQiLCJncm91cEVuZCIsInJlZHVjZXJLZXkiLCJuZXdTdGF0ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJPYmplY3QiLCJhc3NpZ24iLCJyZWFkeSIsImluZGV4IiwibmV3UGxheWVyIiwid2lubmVySW5kZXgiLCJpbml0aWFsU3RhdGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7QUFDQTs7QUFDQTs7QUFHQTs7OztBQURBO0FBR0EsSUFBTUEsaUJBQWlCLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixZQUF2QixDQUExQjtBQUNBLElBQU1DLFFBQVEsR0FBRyxJQUFJQyxpQkFBSixDQUFhO0FBQUVDLFNBQU8sRUFBRUw7QUFBWCxDQUFiLENBQWpCO0FBQ0FHLFFBQVEsQ0FBQ0csTUFBVDtBQUVBLElBQU1DLGdCQUFnQixHQUFHTixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBekI7QUFDQSxJQUFNTSxPQUFP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Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIZjs7QUFDQTs7QUFDQTs7QUFDQTs7OztlQUVlLElBQUlNLHVCQUFKLENBQVU7QUFDdkJtQixTQUFPLEVBQVBBLGdCQUR1QjtBQUV2QlEsVUFBUSxFQUFSQSxpQkFGdUI7QUFHdkJwRCxPQUFLLEVBQUV3RTtBQUhnQixDQUFWLEM7Ozs7Ozs7Ozs7Ozs7QUNMZix1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdFwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBQbGF5ZXJzIGZyb20gJy4vanMvY29tcG9uZW50cy9wbGF5ZXJzL2luZGV4LmpzJ1xuaW1wb3J0IEdhbWVUeXBlIGZyb20gJy4vanMvY29tcG9uZW50cy9nYW1lVHlwZSdcbmltcG9ydCBSZXN1bHRzIGZyb20gJy4vanMvY29tcG9uZW50cy9yZXN1bHRzJ1xuXG4vLyBpbXBvcnQgZ2xvYmFsIHN0eWxpbmdcbmltcG9ydCAnLi9zdHlsZS9pbmRleC5zY3NzJ1xuXG5jb25zdCBnYW1lVHlwZUNvbXBvbmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLXR5cGUnKVxuY29uc3QgZ2FtZVR5cGUgPSBuZXcgR2FtZVR5cGUoeyBlbGVtZW50OiBnYW1lVHlwZUNvbXBvbmVudCB9KVxuZ2FtZVR5cGUucmVuZGVyKClcblxuY29uc3QgcGxheWVyc0NvbXBvbmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJzJylcbmNvbnN0IHBsYXllcnMgPSBuZXcgUGxheWVycyh7IGVsZW1lbnQ6IHBsYXllcnNDb21wb25lbnQgfSlcbnBsYXllcnMucmVuZGVyKClcblxuY29uc3QgcmVzdWx0c0NvbXBvbmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRzJylcbmNvbnN0IHJlc3VsdHMgPSBuZXcgUmVzdWx0cyh7IGVsZW1lbnQ6IHJlc3VsdHNDb21wb25lbnQgfSlcbnJlc3VsdHMucmVuZGVyKClcblxuLypcbmNvbnN0IHBsYXllcjEgPSBuZXcgUGxheWVyKHsgZWxlbWVudDogcGxheWVyMUVsbSB9KTtcbnBsYXllcjEucmVuZGVyKCk7XG5cbmNvbnN0IHBsYXllcjIgPSBuZXcgUGxheWVyKHsgZWxlbWVudDogcGxheWVyMkVsbSB9KTtcbnBsYXllcjIucmVuZGVyKCk7XG4qL1xuIiwiaW1wb3J0IHN0YXRlQ29udGFpbmVyIGZyb20gJy4uLy4uL2hvYy9zdGF0ZUNvbnRhaW5lci5qcydcbmltcG9ydCBzdG9yZSBmcm9tICcuLi8uLi9zdG9yZS9zdG9yZSdcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vLi4vY29uZmlnJ1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaG9pY2VzIGV4dGVuZHMgc3RhdGVDb250YWluZXIge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcih7XG4gICAgICBzdG9yZSxcbiAgICAgIGVsZW1lbnQ6IHByb3BzLmVsZW1lbnQgfHwge31cbiAgICB9KVxuICAgIHRoaXMucHJvcHMgPSBwcm9wc1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBsZXQgY29udGVudCA9ICcnXG4gICAgY29uc3QgcHJvcHMgPSBzZWxmLnByb3BzXG4gICAgaWYgKHByb3BzLnNlbGVjdGVkKSB7XG4gICAgICBjb250ZW50ID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNob2ljZSBzaW5nbGVcIiB2YWx1ZT1cIiR7cHJvcHMuc2VsZWN0ZWQubmFtZX1cIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9JHtwcm9wcy5zZWxlY3RlZC5pbWd9PlxuICAgICAgICAgICAgPC9kaXY+YFxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZW50ID0gYCR7Y29uZmlnLmNob2ljZXNcbiAgICAgICAgLm1hcCgoY2hvaWNlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaG9pY2VcIiB2YWx1ZT1cIiR7Y2hvaWNlLm5hbWV9XCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPSR7Y2hvaWNlLmltZ30+XG4gICAgICAgICAgICA8L2Rpdj5gXG4gICAgICAgIH0pXG4gICAgICAgIC5qb2luKCcnKX1gXG4gICAgfVxuICAgIHNlbGYuZWxlbWVudC5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cImNob2ljZXMtY29udGFpbmVyXCI+XG4gICAgICR7Y29udGVudH1cbiAgICA8L2Rpdj5cbmBcbiAgfVxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHN0YXRlQ29udGFpbmVyIGZyb20gJy4uLy4uL2hvYy9zdGF0ZUNvbnRhaW5lci5qcydcbmltcG9ydCBzdG9yZSBmcm9tICcuLi8uLi9zdG9yZS9zdG9yZSdcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVHlwZSBleHRlbmRzIHN0YXRlQ29udGFpbmVyIHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIoe1xuICAgICAgc3RvcmUsXG4gICAgICBlbGVtZW50OiBwcm9wcy5lbGVtZW50IHx8IHt9XG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi5lbGVtZW50LmlubmVySFRNTCA9IGBcbiAgICAgPGRpdiBjbGFzcz1cImdhbWVUeXBlLWNvbnRhaW5lclwiPlxuICAgICAgICA8YnV0dG9uIHZhbHVlPVwiMVwiIGNsYXNzPVwiJHtcbiAgc3RvcmUuc3RhdGUuZ2FtZS50eXBlID09IDEgPyAnYWN0aXZlJyA6ICcnXG59XCI+UGxheWVyIFZTIENPTTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIHZhbHVlPVwiMlwiIGNsYXNzPVwiJHtcbiAgc3RvcmUuc3RhdGUuZ2FtZS50eXBlID09IDIgPyAnYWN0aXZlJyA6ICcnXG59XCI+Q09NIFZTIENPTTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgICAgYFxuXG4gICAgc2VsZi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHtcbiAgICAgICAgY29uc3QgZ2FtZVR5cGUgPSBldnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKCdzZWxlY3RlZEdhbWUnLCB7IGdhbWVUeXBlIH0pXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBzdGF0ZUNvbnRhaW5lciBmcm9tICcuLi8uLi9ob2Mvc3RhdGVDb250YWluZXIuanMnXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vLi4vc3RvcmUvc3RvcmUnXG5cbmltcG9ydCBDaG9pY2VzIGZyb20gJy4uL2Nob2ljZXMnXG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVycyBleHRlbmRzIHN0YXRlQ29udGFpbmVyIHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIoe1xuICAgICAgc3RvcmUsXG4gICAgICBlbGVtZW50OiBwcm9wcy5lbGVtZW50IHx8IHt9XG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgLy8gbG9vcCBvdmVyIHBsYXllcnMgYXZhaWxhYmxlXG4gICAgLy8gYW5kIGluamVjdCBjaG9pY2VzIGNvbXBvbmVudCBmb3IgZWFjaCBvbmUgb2YgdGhlbVxuICAgIHNlbGYuZWxlbWVudC5pbm5lckhUTUwgPSBgXG4gICAgICR7c3RvcmUuc3RhdGUucGxheWVyc1xuICAgIC5tYXAoKGl0ZW0sIGtleSkgPT4ge1xuICAgICAgLy8gY2hvaWNlcyBpcyBhIGR1bWIgY29tcG9uZW50LCBubyBsb2dpYyBpbnNpZGUgaXMgbmVlZGVkXG4gICAgICBjb25zdCBzZWxlY3RlZCA9IGl0ZW0uY2hvaWNlID8gaXRlbS5jaG9pY2UgOiBmYWxzZVxuICAgICAgY29uc3QgY2hvaWNlcyA9IG5ldyBDaG9pY2VzKHsgc2VsZWN0ZWQgfSlcbiAgICAgIGNob2ljZXMucmVuZGVyKClcbiAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cInBsYXllciBjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzY29yZVwiPlxuICAgICAgICAgICAgICAke2l0ZW0udHlwZX0gOjxzcGFuPiAke2l0ZW0uc2NvcmV9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXZhdGFyXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPSR7aXRlbS5hdmF0YXJ9PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIiR7YHBsYXllciR7a2V5fS1jaG9pY2VzYH1cIj5cbiAgICAgICAgICAgICR7Y2hvaWNlcy5lbGVtZW50LmlubmVySFRNTH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5gXG4gICAgfSlcbiAgICAuam9pbignJyl9XG5gXG4gICAgY29uc3QgZ2FtZVR5cGUgPSBzdG9yZS5zdGF0ZS5nYW1lLnR5cGVcbiAgICBpZiAoZ2FtZVR5cGUgPT0gMSkge1xuICAgICAgc2VsZi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaG9pY2UnKS5mb3JFYWNoKChjaG9pY2UpID0+IHtcbiAgICAgICAgY2hvaWNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHtcbiAgICAgICAgICBjb25zdCBjaG9pY2UgPSBldnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpXG4gICAgICAgICAgLy8gZGlzcGF0Y2ggZXZlbnQgd2l0aCBodW1hbiBwbGF5ZXIgY2hvaWNlXG4gICAgICAgICAgc3RvcmUuZGlzcGF0Y2goJ3NlbGVjdGVkQ2hvaWNlJywgeyBjaG9pY2UsIHBsYXllcjogJ2h1bWFuJyB9KVxuICAgICAgICAgIC8vIGRpc3BhdGNoIGV2ZW50IGZvciBjb20gdG8gZ2VuZXJhdGUgYSBjaG9pY2VcbiAgICAgICAgICBzdG9yZS5kaXNwYXRjaCgnc2VsZWN0ZWRDaG9pY2UnLCB7IHBsYXllcjogJ2NvbScgfSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgc3RhdGVDb250YWluZXIgZnJvbSAnLi4vLi4vaG9jL3N0YXRlQ29udGFpbmVyLmpzJ1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uLy4uL3N0b3JlL3N0b3JlJ1xuXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYXN1bHQgZXh0ZW5kcyBzdGF0ZUNvbnRhaW5lciB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHtcbiAgICAgIHN0b3JlLFxuICAgICAgZWxlbWVudDogcHJvcHMuZWxlbWVudCB8fCB7fVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIGxldCBjb250ZW50ID0gJydcbiAgICBjb25zdCBnYW1lVHlwZSA9IHN0b3JlLnN0YXRlLmdhbWUudHlwZVxuXG4gICAgaWYgKCFzdG9yZS5zdGF0ZS53aW5uZXIpIHtcbiAgICAgIGlmIChnYW1lVHlwZSA9PSAxKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd3b29vb29vJylcbiAgICAgICAgY29udGVudCA9IGBcbiAgICAgICAgPHAgY2xhc3M9XCJ3YWl0aW5nXCI+c2VsZWN0IHNvbWV0aGluZzwvcD5cbiAgICAgIGBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsbGxsbGwnKVxuICAgICAgICBjb250ZW50ID0gYFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwic3RhcnRcIj4gR28hIDwvYnV0dG9uPlxuICAgICAgICA8cCBjbGFzcz1cIndhaXRpbmdcIj5MZXQgdGhlbSBmaWdodDwvcD5cbiAgICAgIGBcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgd2lubmVyID0gc3RvcmUuc3RhdGUud2lubmVyXG4gICAgaWYgKHdpbm5lcikge1xuICAgICAgaWYgKHdpbm5lci5jaG9pY2UpIHtcbiAgICAgICAgY29udGVudCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNob2ljZS1pbWFnZVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke3dpbm5lci5jaG9pY2UuaW1nfVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4+JHt3aW5uZXIudHlwZX08L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwbGF5LWFnYWluXCI+PC9kaXY+XG4gICAgICBgXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZW50ID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicGxheS1hZ2FpblwiPjwvZGl2PlxuICAgICAgICA8c3Bhbj5EUkFXPC9zcGFuPlxuICAgICAgYFxuICAgICAgfVxuICAgIH1cblxuICAgIHNlbGYuZWxlbWVudC5pbm5lckhUTUwgPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWNvbnRhaW5lclwiPlxuICAgICAgICAke2NvbnRlbnR9XG4gICAgICA8L2Rpdj5cbiAgICAgIGBcblxuICAgIHNlbGYuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheS1hZ2FpbicpLmZvckVhY2goKGNob2ljZSkgPT4ge1xuICAgICAgY2hvaWNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAvLyBzdGFydCBhIG5ldyBnYW1lXG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKCdyZXN0YXJ0R2FtZScpXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICBzZWxmLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0YXJ0JykuZm9yRWFjaCgoY2hvaWNlKSA9PiB7XG4gICAgICBjaG9pY2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIC8vIGRpc3BhdGNoIGV2ZW50IGZvciBib3RoIGNvbXNcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goJ3NlbGVjdGVkQ2hvaWNlJywgeyBwbGF5ZXI6ICd0aGUgY29tJyB9KVxuICAgICAgICBzdG9yZS5kaXNwYXRjaCgnc2VsZWN0ZWRDaG9pY2UnLCB7IHBsYXllcjogJ2NvbScgfSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiZXhwb3J0IGRlZmF1bHQge1xuICBjaG9pY2VzOiBbXG4gICAge1xuICAgICAgbmFtZTogJ3JvY2snLFxuICAgICAgaW1nOiAnaW1hZ2VzL2FjdGlvbnMvcm9jay5wbmcnLFxuICAgICAgc3RyZW5ndGg6IHtcbiAgICAgICAgd2luOiBbJ3NjaXNzb3JzJ10sXG4gICAgICAgIGxvc2U6IFsncGFwZXInXVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ3BhcGVyJyxcbiAgICAgIGltZzogJ2ltYWdlcy9hY3Rpb25zL3BhcGVyLnBuZycsXG4gICAgICBzdHJlbmd0aDoge1xuICAgICAgICB3aW46IFsncm9jayddLFxuICAgICAgICBsb3NlOiBbJ3NjaXNzb3JzJ11cbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdzY2lzc29ycycsXG4gICAgICBpbWc6ICdpbWFnZXMvYWN0aW9ucy9zY2lzc29ycy5wbmcnLFxuICAgICAgc3RyZW5ndGg6IHtcbiAgICAgICAgd2luOiBbJ3BhcGVyJ10sXG4gICAgICAgIGxvc2U6IFsncm9jayddXG4gICAgICB9XG4gICAgfVxuICBdXG59XG4iLCJpbXBvcnQgU3RvcmUgZnJvbSAnLi4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMnXG5cbi8vIHJlcHJlc2VudHMgYSBoaWdoZXIgb3JkZXIsIHJlc3BvbnNpYmxlIG9mIGNvbW11bmljYXRpbmcgd2l0aCBvdXIgc3RhdGVcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHN0YXRlQ29udGFpbmVyIHtcbiAgY29uc3RydWN0b3IgKHByb3BzID0ge30pIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAvLyB1c2UgcmVuZGVyIG1ldGhvZCBvZiBjaGlsZFxuICAgIHRoaXMucmVuZGVyID0gdGhpcy5yZW5kZXIgfHwgZnVuY3Rpb24gKCkge31cbiAgICBpZiAocHJvcHMuc3RvcmUgaW5zdGFuY2VvZiBTdG9yZSkge1xuICAgICAgLy8gcmUtcmVuZGVyIGluIGNhc2Ugc3RhdGUgY2hhbmdlc1xuICAgICAgcHJvcHMuc3RvcmUuZXZlbnRzLnN1YnNjcmliZSgnc3RhdGVDaGFuZ2UnLCAoKSA9PiBzZWxmLnJlbmRlcigpKVxuICAgIH1cbiAgICAvLyBzZXQgb3VyIHRoZSBlbGVtZW50XG4gICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KCdlbGVtZW50JykpIHtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHByb3BzLmVsZW1lbnRcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiByYW5kb21DaG9pY2UgKGNob2ljZXMgPSBbXSkge1xuICByZXR1cm4gY2hvaWNlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaG9pY2VzLmxlbmd0aCldXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaG9pY2VPYmogKGNob2ljZXMgPSBbXSwgdmFsdWUpIHtcbiAgY29uc3QgY2hvaWNlID0gY2hvaWNlcy5maWx0ZXIoZWxtID0+IHtcbiAgICBpZiAoZWxtLm5hbWUgPT0gdmFsdWUpIHtcbiAgICAgIHJldHVybiBlbG1cbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGNob2ljZS5sZW5ndGggPT09IDEgPyBjaG9pY2VbMF0gOiAnJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2lubmVyIChwbGF5ZXJzKSB7XG4gIGlmIChwbGF5ZXJzWzBdLmNob2ljZS5zdHJlbmd0aC53aW4uaW5jbHVkZXMocGxheWVyc1sxXS5jaG9pY2UubmFtZSkpIHtcbiAgICByZXR1cm4gMFxuICB9XG4gIGlmIChwbGF5ZXJzWzBdLmNob2ljZS5zdHJlbmd0aC5sb3NlLmluY2x1ZGVzKHBsYXllcnNbMV0uY2hvaWNlLm5hbWUpKSB7XG4gICAgcmV0dXJuIDFcbiAgfVxuICByZXR1cm4gLTFcbn1cbiIsIi8qKlxuICogcHVic3ViIGxpYnJhcnlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHViU3ViIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuZXZlbnRzID0ge31cbiAgfVxuXG4gIC8qKlxuICAgKiBpZiBldmVudCBkb2VzIG5vdCBhbHJlYWR0IGV4aXN0cywgY3JlYXRlIGEgbmV3IG9uZSB0aGVuXG4gICAqIHBhc3MgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGl0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBBIGNvdW50IG9mIGNhbGxiYWNrcyBmb3IgdGhpcyBldmVudFxuICAgKi9cbiAgc3Vic2NyaWJlIChldmVudCwgY2FsbGJhY2spIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBpZiAoIXNlbGYuZXZlbnRzLmhhc093blByb3BlcnR5KGV2ZW50KSkge1xuICAgICAgc2VsZi5ldmVudHNbZXZlbnRdID0gW11cbiAgICB9XG4gICAgcmV0dXJuIHNlbGYuZXZlbnRzW2V2ZW50XS5wdXNoKGNhbGxiYWNrKVxuICB9XG5cbiAgLyoqXG4gICAqIGlmIGNhbGxiYWNrIGZvciBhbiBldmVudCBleGlzdHMsIGxvb3Agb3ZlciB0aGVtIHdpdGggdGhlIGdpdmVuIGRhdGFcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50XG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbZGF0YT17fV1cbiAgICogQHJldHVybnMge2FycmF5fSBUaGUgY2FsbGJhY2tzIGZvciB0aGlzIGV2ZW50XG4gICAqL1xuICBwdWJsaXNoIChldmVudCwgZGF0YSA9IHt9KSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgaWYgKCFzZWxmLmV2ZW50cy5oYXNPd25Qcm9wZXJ0eShldmVudCkpIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH1cbiAgICByZXR1cm4gc2VsZi5ldmVudHNbZXZlbnRdLm1hcChjYWxsYmFjayA9PiBjYWxsYmFjayhkYXRhKSlcbiAgfVxufVxuIiwiY29uc3QgYWN0aW9ucyA9IHtcbiAgc2VsZWN0ZWRHYW1lIChjb250ZXh0LCBwYXlsb2FkKSB7XG4gICAgY29udGV4dC5jb21taXQoJ3NlbGVjdGVkR2FtZScsIHBheWxvYWQpXG4gIH0sXG5cbiAgc2VsZWN0ZWRDaG9pY2UgKGNvbnRleHQsIHBheWxvYWQpIHtcbiAgICBjb250ZXh0LmNvbW1pdCgnc2VsZWN0ZWRDaG9pY2UnLCBwYXlsb2FkKVxuICB9LFxuXG4gIHJlc3RhcnRHYW1lIChjb250ZXh0KSB7XG4gICAgY29udGV4dC5jb21taXQoJ3Jlc3RhcnRHYW1lJylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhY3Rpb25zXG4iLCJpbXBvcnQgUHViU3ViIGZyb20gJy4uL3B1YnN1YidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmUge1xuICBjb25zdHJ1Y3RvciAocGFyYW1zKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi5hY3Rpb25zID0gcGFyYW1zLmFjdGlvbnMgfHwge31cbiAgICBzZWxmLnJlZHVjZXJzID0gcGFyYW1zLnJlZHVjZXJzIHx8IHt9XG4gICAgc2VsZi5zdGF0ZSA9IHt9XG4gICAgc2VsZi5zdGF0dXMgPSAncmVzdGluZydcblxuICAgIC8vIGFkZCBQdWJTdWIgbW9kdWxlIGFzIGFuIGBldmVudHNgIGVsZW1lbnRcbiAgICBzZWxmLmV2ZW50cyA9IG5ldyBQdWJTdWIoKVxuXG4gICAgLy8gaGF2ZSBvdXIgc3RhdGUgYXMgYSBwcm94eSB0byBjb250cm9sZSBob3cgZGF0YSBpcyBzZXQuXG4gICAgc2VsZi5zdGF0ZSA9IG5ldyBQcm94eShwYXJhbXMuc3RhdGUgfHwge30sIHtcbiAgICAgIHNldDogZnVuY3Rpb24gKHN0YXRlLCBrZXksIHZhbHVlKSB7XG4gICAgICAgIHN0YXRlW2tleV0gPSB2YWx1ZVxuICAgICAgICAvLyBub3RpZnkgb3RoZXIgY29tcG9uZW50cyB0aGF0IG1heSBiZSBpbnRlcmVzc3RlZCBpbiB0aGlzIGluZm9cbiAgICAgICAgc2VsZi5ldmVudHMucHVibGlzaCgnc3RhdGVDaGFuZ2UnLCBzZWxmLnN0YXRlKVxuICAgICAgICAvLyBibG9jayBhbnkgc3RhdGUgY2hhbmdlIHRoYWF0IGRvZXMgbm90IHVzZSByZWR1Y2VyXG4gICAgICAgIGlmIChzZWxmLnN0YXR1cyAhPT0gJ3JlZHVjZXInKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBwbGVhc2UgdXNlIGEgcmVkdWNlciB0byB1cGRhdGUgdGhlIHN0YXRlYClcbiAgICAgICAgfVxuICAgICAgICAvLyBSZXNldCB0aGUgc3RhdHVzIHJlYWR5IGZvciB0aGUgbmV4dCBvcGVyYXRpb25cbiAgICAgICAgc2VsZi5zdGF0dXMgPSAncmVzdGluZydcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEEgZGlzcGF0Y2hlciBmb3IgYWN0aW9ucyB0aGF0IGxvb2tzIGluIHRoZSBhY3Rpb25zXG4gICAqIGNvbGxlY3Rpb24gYW5kIHJ1bnMgdGhlIGFjdGlvbiBpZiBpdCBjYW4gZmluZCBpdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uS2V5XG4gICAqIEBwYXJhbSB7bWl4ZWR9IHBheWxvYWRcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBkaXNwYXRjaCAoYWN0aW9uS2V5LCBwYXlsb2FkKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgLy8gUnVuIGEgcXVpY2sgY2hlY2sgdG8gc2VlIGlmIHRoZSBhY3Rpb24gYWN0dWFsbHkgZXhpc3RzXG4gICAgLy8gYmVmb3JlIHdlIHRyeSB0byBydW4gaXRcbiAgICBpZiAodHlwZW9mIHNlbGYuYWN0aW9uc1thY3Rpb25LZXldICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBBY3Rpb24gXCIke2FjdGlvbktleX0gbm90IGF2YWlsYWJsZS5gKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIC8vIENyZWF0ZSBhIGNvbnNvbGUgZ3JvdXAgd2hpY2ggd2lsbCBjb250YWluIHRoZSBsb2dzIGZyb20gb3VyIFByb3h5IGV0Y1xuICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYHBlcmZvcm1pbmcgQUNUSU9OOiAke2FjdGlvbktleX1gKVxuICAgIC8vIGNhbGwgdGhlIGFjdGlvbiBhbmQgcGFzcyBpdCB0aGUgU3RvcmUgY29udGV4dCBhbmQgd2hhdGV2ZXIgcGF5bG9hZCB3YXMgcGFzc2VkXG4gICAgc2VsZi5hY3Rpb25zW2FjdGlvbktleV0oc2VsZiwgcGF5bG9hZClcbiAgICAvLyBDbG9zZSBvdXIgY29uc29sZSBncm91cCB0byBrZWVwIHRoaW5ncyBuaWNlIGFuZCBuZWF0XG4gICAgY29uc29sZS5ncm91cEVuZCgpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIC8qKlxuICAgKiBMb29rIGZvciBhIHJlZHVjZXIgYW5kIG1vZGlmeSB0aGUgc3RhdGUgb2JqZWN0XG4gICAqIGlmIHRoYXQgcmVkdWNlciBleGlzdHMgYnkgY2FsbGluZyBpdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVkdWNlcktleVxuICAgKiBAcGFyYW0ge21peGVkfSBwYXlsb2FkXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgY29tbWl0IChyZWR1Y2VyS2V5LCBwYXlsb2FkKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgLy8gY2hlY2sgaWYgdGhlIHJlZHVjZXIgZXhpc3RzXG4gICAgaWYgKHR5cGVvZiBzZWxmLnJlZHVjZXJzW3JlZHVjZXJLZXldICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGByZWR1Y2VyIFwiJHtyZWR1Y2VyS2V5fVwiIGRvZXNuJ3QgZXhpc3RgKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHNlbGYuc3RhdHVzID0gJ3JlZHVjZXInXG4gICAgLy8gZ2V0IHRoZSBuZXcgc3RhdGUgYWZ0ZXIgcmVkdWNlciBkaWQgaXQgbWFnaWNcbiAgICBsZXQgbmV3U3RhdGUgPSBzZWxmLnJlZHVjZXJzW3JlZHVjZXJLZXldKHNlbGYuc3RhdGUsIHBheWxvYWQpXG4gICAgLy8gdXBkYXRlIHN0YXRlIG9ubHkgaWYgd2UgaGF2ZSBhIGRpZmZlcmVuY2UgLy8gY291bGQgYWxzbyB1c2UgZGVlcCBlcXVhbFxuICAgIGlmIChKU09OLnN0cmluZ2lmeShuZXdTdGF0ZSkgIT09IEpTT04uc3RyaW5naWZ5KHNlbGYuc3RhdGUpKSB7XG4gICAgICAvLyBtZXJnZSB0aGUgbmV3IHN0YXRlIHdpdGggd2hhdCB3ZSBhbHJlYWR5IGhhZFxuICAgICAgc2VsZi5zdGF0ZSA9IE9iamVjdC5hc3NpZ24oc2VsZi5zdGF0ZSwgbmV3U3RhdGUpIC8vIFRPRE86IGNoZWNrIHdpdGggc3ByZWFkIGxhdGVyXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cbn1cbiIsIi8vIHRoaXMgaXMgb3VyIGluaXRpYWwgc3RhdGVcbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2FtZToge1xuICAgIHR5cGU6IDFcbiAgfSxcbiAgcGxheWVyczogW1xuICAgIHtcbiAgICAgIHNjb3JlOiAwLFxuICAgICAgdHlwZTogJ2h1bWFuJyxcbiAgICAgIGF2YXRhcjogJ2ltYWdlcy9wbGF5ZXIvaHVtYW4ucG5nJ1xuICAgIH0sXG4gICAge1xuICAgICAgc2NvcmU6IDAsXG4gICAgICB0eXBlOiAnY29tJyxcbiAgICAgIGF2YXRhcjogJ2ltYWdlcy9wbGF5ZXIvYWkucG5nJ1xuICAgIH1cbiAgXSxcbiAgcmVhZHk6IDAsXG4gIHdpbm5lcjogZmFsc2Vcbn1cbiIsImltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IHsgZ2V0Q2hvaWNlT2JqLCByYW5kb21DaG9pY2UsIGdldFdpbm5lciB9IGZyb20gJy4uL2xpYi91dGlscydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzZWxlY3RlZEdhbWUgKHN0YXRlLCBwYXlsb2FkKSB7XG4gICAgLy8gc2V0IHRoZSBnYW1lIHR5cGVcbiAgICAvLyByZXN0ZXQgYWxsIHNjb3JlcyBhbmQgY2hvaWNlcyBtYWRlXG4gICAgLy8gdXBkYXRlIHBsYXllciB0eXBlXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgZ2FtZTogeyB0eXBlOiBwYXlsb2FkLmdhbWVUeXBlIH0sXG4gICAgICBwbGF5ZXJzOiBzdGF0ZS5wbGF5ZXJzLm1hcCgocGxheWVyLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdQbGF5ZXIgPSBwYXlsb2FkLmdhbWVUeXBlID09IDEgPyAnaHVtYW4nIDogJ3RoZSBjb20nXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4ucGxheWVyLFxuICAgICAgICAgIHR5cGU6IGluZGV4ID09IDAgPyBuZXdQbGF5ZXIgOiAnY29tJyxcbiAgICAgICAgICBzY29yZTogMCxcbiAgICAgICAgICBjaG9pY2U6IG51bGxcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH0sXG4gIHNlbGVjdGVkQ2hvaWNlIChzdGF0ZSwgcGF5bG9hZCkge1xuICAgIGxldCByZWFkeSA9IHN0YXRlLnJlYWR5ICsgMSB8fCAxXG4gICAgLy8gc2V0IHRoZSBjaG9pY2UgZm9yIHRoZSBodW1hbiBwbGF5ZXJcbiAgICBsZXQgcGxheWVycyA9IHN0YXRlLnBsYXllcnMubWFwKGl0ZW0gPT4ge1xuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gcGF5bG9hZC5wbGF5ZXIpIHtcbiAgICAgICAgaXRlbS5jaG9pY2UgPSBwYXlsb2FkLmNob2ljZVxuICAgICAgICAgID8gZ2V0Q2hvaWNlT2JqKGNvbmZpZy5jaG9pY2VzLCBwYXlsb2FkLmNob2ljZSlcbiAgICAgICAgICA6IHJhbmRvbUNob2ljZShjb25maWcuY2hvaWNlcylcbiAgICAgIH1cbiAgICAgIHJldHVybiBpdGVtXG4gICAgfSlcblxuICAgIC8vIGlmIGFsbCBwbGF5ZXIgaGF2ZSBmaW5pc2hlZCwgY2hlY2sgd2hvIHdvblxuICAgIGxldCB3aW5uZXIgPSBmYWxzZVxuICAgIGlmIChyZWFkeSA9PSBzdGF0ZS5wbGF5ZXJzLmxlbmd0aCkge1xuICAgICAgd2lubmVyID0ge31cbiAgICAgIGNvbnN0IHdpbm5lckluZGV4ID0gZ2V0V2lubmVyKHN0YXRlLnBsYXllcnMpXG4gICAgICBpZiAod2lubmVySW5kZXggPj0gMCkge1xuICAgICAgICB3aW5uZXIgPSBzdGF0ZS5wbGF5ZXJzW3dpbm5lckluZGV4XVxuICAgICAgICAvLyB1cGRhdGUgc2NvcmUgb2YgdGhlIHdpbm5lclxuICAgICAgICBwbGF5ZXJzID0gT2JqZWN0LmFzc2lnbihbLi4uc3RhdGUucGxheWVyc10sIHtcbiAgICAgICAgICBbd2lubmVySW5kZXhdOiB7XG4gICAgICAgICAgICAuLi5zdGF0ZS5wbGF5ZXJzW3dpbm5lckluZGV4XSxcbiAgICAgICAgICAgIHNjb3JlOiBzdGF0ZS5wbGF5ZXJzW3dpbm5lckluZGV4XS5zY29yZSArIDFcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICByZWFkeSA9IDBcbiAgICB9XG4gICAgcmV0dXJuIHsgLi4uc3RhdGUsIHBsYXllcnMsIHJlYWR5LCB3aW5uZXIgfVxuICB9LFxuICByZXN0YXJ0R2FtZSAoc3RhdGUpIHtcbiAgICByZXR1cm4geyAuLi5zdGF0ZSwgcmVhZHk6IDAsIHdpbm5lcjogZmFsc2UgfVxuICB9XG59XG4iLCJpbXBvcnQgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMuanMnXG5pbXBvcnQgcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2Vycy5qcydcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi9pbml0aWFsU3RhdGUuanMnXG5pbXBvcnQgU3RvcmUgZnJvbSAnLi9jb25maWd1cmVTdG9yZS5qcydcblxuZXhwb3J0IGRlZmF1bHQgbmV3IFN0b3JlKHtcbiAgYWN0aW9ucyxcbiAgcmVkdWNlcnMsXG4gIHN0YXRlOiBpbml0aWFsU3RhdGVcbn0pXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9