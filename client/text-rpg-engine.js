(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("text-rpg-engine", [], factory);
	else if(typeof exports === 'object')
		exports["text-rpg-engine"] = factory();
	else
		root["text-rpg-engine"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
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

/*
display.js
Shows/appends text to the site
 */
var Display =
/*#__PURE__*/
function () {
  // constructor
  function Display() {
    var html = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var elementId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'display';

    _classCallCheck(this, Display);

    this.html = html;
    this.elementId = elementId;
  }
  /*
  shows given HTML
  if no HTML is given, display the HTML that's in this object's html property already
  otherwise, set both the element's inner HTML and the object's property to the given html
  */


  _createClass(Display, [{
    key: "show",
    value: function show() {
      var html = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (html === null) {
        document.getElementById(this.elementId).innerHTML = this.html;
      } else {
        document.getElementById(this.elementId).innerHTML = html;
        this.html = html;
      }
    } // append HTML to display screen

  }, {
    key: "append",
    value: function append(html) {
      document.getElementById(this.elementId).innerHtml += html;
    }
  }]);

  return Display;
}();

exports.default = Display;
module.exports = exports["default"];

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _display = _interopRequireDefault(__webpack_require__(/*! ./display */ "./src/display.js"));

var _input = _interopRequireDefault(__webpack_require__(/*! ./input */ "./src/input.js"));

var _player = _interopRequireDefault(__webpack_require__(/*! ./player */ "./src/player.js"));

var _room = _interopRequireDefault(__webpack_require__(/*! ./room */ "./src/room.js"));

var _inventory = _interopRequireDefault(__webpack_require__(/*! ./inventory */ "./src/inventory.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Game =
/*#__PURE__*/
function () {
  // constructor
  function Game() {
    var datapath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var rooms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var items = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var startRoom = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
    var endRoom = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';

    _classCallCheck(this, Game);

    this.Display = new _display.default();
    this.Input = new _input.default();
    this.datapath = datapath; // datapath is for an added challenge, I can load in a JSON file with a game built into it :) check init for more

    this.rooms = rooms; // all rooms in game

    this.startRoom = startRoom; // room the player will start in

    this.endRoom = endRoom; // which room is the game-end room

    this.Player = new _player.default(startRoom = this.startRoom);
  } // Initializes the game


  _createClass(Game, [{
    key: "init",
    value: function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var displayText, rooms, i, j, _i;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.loadData(this.datapath);

              case 2:
                rooms = _context.sent;

                for (i = 0; i < rooms.length; i++) {
                  this.addRoom(rooms[i].name, rooms[i].getText);

                  for (j = 0; j < rooms[i].prompts.length; j++) {
                    if (!rooms[i].prompts[j].name) {
                      rooms[i].prompts[j].name = '';
                    }

                    if (!rooms[i].prompts[j].keywords) {
                      rooms[i].prompts[j].keywords = [];
                    }

                    if (!rooms[i].prompts[j].results) {
                      rooms[i].prompts[j].results = {};
                    }

                    if (!rooms[i].prompts[j].requirements) {
                      rooms[i].prompts[j].requirements = [];
                    }

                    this.rooms[i].addPrompt(rooms[i].prompts[j].name, rooms[i].prompts[j].keywords, rooms[i].prompts[j].results, rooms[i].prompts[j].requirements);
                  }
                } // if game wasn't initalized with startRoom, set it to the first room


                if (this.startRoom === '' && this.rooms.length > 0) {
                  this.startRoom = this.rooms[0].name;
                  this.Player.startRoom = this.startRoom;
                  this.Player.currentRoom = this.Player.startRoom;
                } // if game wasn't initalized with endRoom, set it to the last room


                if (this.endRoom === '' && this.rooms.length > 0) {
                  this.endRoom = this.rooms[this.rooms.length - 1].name;
                } // display the startRoom text


                _i = 0;

              case 7:
                if (!(_i < this.rooms.length)) {
                  _context.next = 14;
                  break;
                }

                if (!(this.rooms[_i].name === this.startRoom)) {
                  _context.next = 11;
                  break;
                }

                displayText = this.rooms[_i].getText;
                return _context.abrupt("break", 14);

              case 11:
                _i++;
                _context.next = 7;
                break;

              case 14:
                if (displayText === undefined) {
                  displayText = 'No starting room text found';
                }

                this.Display.show(displayText);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _ref.apply(this, arguments);
      }

      return init;
    }() // manage rooms
    // create a new Room object and push it onto the current rooms list

  }, {
    key: "addRoom",
    value: function addRoom(name, getText) {
      var prompts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var requirements = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
      var roomObj = new _room.default(name, getText, requirements, prompts);
      this.rooms.push(roomObj);
      return roomObj;
    } // filter out a room and get rid of it if we don't want it anymore

  }, {
    key: "dropRoom",
    value: function dropRoom(roomName) {
      var newRooms = this.rooms.filter(function (room) {
        return room.name !== roomName;
      });
      this.rooms = newRooms;
      return this.rooms;
    } // returns room object given name

  }, {
    key: "getRoom",
    value: function getRoom(roomName) {
      // x => is a callback function that will return the room whose name is the same as roomName
      var room = this.rooms.find(function (x) {
        return x.name === roomName;
      });
      return room;
    } // Game AI

  }, {
    key: "decidePath",
    value: function decidePath(message) {
      if (message === 'restart') {
        this.resetGame();
      }

      var _this = this;

      var currRoom = _this.getRoom(_this.Player.currentRoom); // Do we have actions that we can do in the room?


      if (_typeof(currRoom.prompts) !== undefined) {
        // Check every prompt action to see if it matches our input keywords
        // For now just get the first matching prompt and do that
        var foundPrompt = false;
        currRoom.prompts.forEach(function (prompt) {
          if (foundPrompt === false) {
            var matchingPromptResults = prompt.matchKeywords(message, _this.Player.inventory.items); // If we get a matching result back

            if (matchingPromptResults !== null) {
              // This prompt has keywords that match the user's input
              foundPrompt = true; // If player succeeded in prompt action

              if ('success' in matchingPromptResults) {
                _this.Display.show("<p>".concat(matchingPromptResults.success.successText, "</p>")); // Get items from prompt if any are returned and add them to inventory


                if (matchingPromptResults.success.itemsGiven !== undefined) {
                  _this.Player.inventory.addItems(matchingPromptResults.success.itemsGiven);
                } // If the prompt success result includes entering a new room..


                if (matchingPromptResults.success.roomToEnter !== undefined) {
                  var enterRoomResultSuccess;
                  var enterRoomResultText; // Check to see if player can successfully enter the room (given the inventory / room requirements)

                  var _this$Player$enterRoo = _this.Player.enterRoom(_this.getRoom(matchingPromptResults.success.roomToEnter));

                  var _this$Player$enterRoo2 = _slicedToArray(_this$Player$enterRoo, 2);

                  enterRoomResultText = _this$Player$enterRoo2[0];
                  enterRoomResultSuccess = _this$Player$enterRoo2[1];

                  _this.Display.append("<p>".concat(enterRoomResultText, "</p>"));

                  if (enterRoomResultSuccess) {
                    // Check to see if player entered winning room
                    if (matchingPromptResults.success.roomToEnter === _this.endRoom) {
                      _this.win();
                    }
                  } else {// Player could not enter room (missing required items in inventory)
                  }
                }
              } // Player failed to do prompt (missing item requirement)


              if ('fail' in matchingPromptResults) {
                _this.Display.show("".concat(matchingPromptResults.fail.failText));

                _this.Display.append("<p>Missing required items: ".concat(matchingPromptResults.fail.missing.toString(), ".\n              </p><p>").concat(_this.getRoom(_this.Player.currentRoom).getText, "</p>"));

                return;
              }
            }
          }

          if (foundPrompt === false) {
            // Player didn't say any keywords that triggered any of the current room prompts
            _this.Display.show("<p>No actions could be done from: \"".concat(message, "\". Try something else, or be more \n          specific about what you're doing.</p><p>").concat(_this.getRoom(_this.Player.currentRoom).getText, "</p>"));
          }
        });
      } else {
        // No prompts exist for the current room
        _this.Display.show("<p>There doesn't seem to be any actions at all that you can do in this room.</p>\n      ".concat(_this.getRoom(_this.Player.currentRoom).getText));
      }
    } // Grab the message from the user and run Input.send on it

  }, {
    key: "userSend",
    value: function userSend(message) {
      // Our Input class will handle cleaning / normalizing strings
      this.Input.send(message);
      this.decidePath(this.Input.value);
    } // just makes it easier/more readable to disable input

  }, {
    key: "disableInput",
    value: function disableInput() {
      this.Input.disable();
    } // just makes it easier/more readable to enable input

  }, {
    key: "enableInput",
    value: function enableInput() {
      this.Input.enable();
    } // player wins

  }, {
    key: "win",
    value: function win() {
      // show win text
      this.Display.append('<p>YOU WIN!</p>'); // disable more input after winning

      this.disableInput();
    } // Player resets game

  }, {
    key: "resetGame",
    value: function resetGame() {
      // resets player with blank inventory and back in starting room
      this.Player.inventory = new _inventory.default();
      this.Player.currentRoom = this.startRoom;
      var room = this.getRoom(this.startRoom);
      this.Display.show(room.getText);
      this.Input.enable();
    } // load from json file

  }, {
    key: "loadData",
    value: function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(filepath) {
        var rooms, response, data, i;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                rooms = [];
                _context2.next = 3;
                return fetch(filepath);

              case 3:
                response = _context2.sent;
                _context2.next = 6;
                return response.json();

              case 6:
                data = _context2.sent;

                for (i = 0; i < data.rooms.length; i++) {
                  if (!data.rooms[i].prompts) {
                    data.rooms[i].prompts = [];
                  }

                  rooms.push(data.rooms[i]);
                }

                return _context2.abrupt("return", rooms);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function loadData(_x) {
        return _ref2.apply(this, arguments);
      }

      return loadData;
    }()
  }]);

  return Game;
}();

exports.default = Game;
module.exports = exports["default"];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _game = _interopRequireDefault(__webpack_require__(/*! ./game */ "./src/game.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var game = new _game.default();
var _default = game;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/input.js":
/*!**********************!*\
  !*** ./src/input.js ***!
  \**********************/
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

/*
input.js
Shows text, allows for input
 */
var Input =
/*#__PURE__*/
function () {
  // constructor
  function Input() {
    var disabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var elementId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'input';

    _classCallCheck(this, Input);

    this.disabled = disabled;
    this.value = value;
    this.elementId = elementId;
  } // enables input and does the same in the HTML


  _createClass(Input, [{
    key: "enable",
    value: function enable() {
      this.disabled = false;
      document.getElementById('input').disabled = false;
    } // disables input and does the same in the HTML

  }, {
    key: "disable",
    value: function disable() {
      this.disabled = true;
      document.getElementById('input').disabled = true;
    } // sends client input to be evaluated

  }, {
    key: "send",
    value: function send(value) {
      // normalize input values
      value = value.toLowerCase();
      this.value = value;
    }
  }]);

  return Input;
}();

exports.default = Input;
module.exports = exports["default"];

/***/ }),

/***/ "./src/inventory.js":
/*!**************************!*\
  !*** ./src/inventory.js ***!
  \**************************/
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

var Inventory =
/*#__PURE__*/
function () {
  // constructor
  function Inventory() {
    var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, Inventory);

    this.items = items;
  } // can add single or multiple items; parameter passed in should be an array


  _createClass(Inventory, [{
    key: "addItems",
    value: function addItems(items) {
      this.items = this.items.concat(items);
      return this.items;
    } // drop an item by filtering out the item name that we want to drop and returning the inventory without it

  }, {
    key: "dropItem",
    value: function dropItem(itemName) {
      var newInventory = this.items.filter(function (item) {
        return item.name !== itemName;
      });
      this.items = newInventory;
      return this.items;
    }
  }]);

  return Inventory;
}();

exports.default = Inventory;
module.exports = exports["default"];

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inventory = _interopRequireDefault(__webpack_require__(/*! ./inventory */ "./src/inventory.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Player =
/*#__PURE__*/
function () {
  // constructor
  function Player() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var inventory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _inventory.default();
    var currentRoom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var startRoom = arguments[3];

    _classCallCheck(this, Player);

    // if name is given, set it; if not, set name to 'player'
    this.name = name;

    if (this.name === '') {
      this.name = 'player';
    }

    this.inventory = inventory; // if currentRoom is blank, set it to startRoom

    if (this.currentRoom === '') {
      this.currentRoom = this.startRoom;
    }

    this.startRoom = startRoom;
  } // enter room


  _createClass(Player, [{
    key: "enterRoom",
    value: function enterRoom(room) {
      // assigns the value of room.enter (pass, fail, etc.) to roomResult - that logic is in Room
      var roomResult = room.enter(this.inventory.items); // roomResult[1] is the metAllRequirements bool in room.js; if it's false, well, yeah, it's false

      if (roomResult[1] === false) {// player didn't have the required items to enter the room
      } else {
        // entered room
        this.currentRoom = room.name;
      } // return results text and whether or not the player successfully entered the room


      return [roomResult[0], roomResult[1]];
    } // the logic for getItem and dropItem is in inventory.js

  }, {
    key: "getItem",
    value: function getItem(item) {
      this.inventory.addItem(item);
      return this.inventory;
    }
  }, {
    key: "dropItem",
    value: function dropItem(item) {
      this.inventory.dropItem(item);
      return this.inventory;
    }
  }]);

  return Player;
}();

exports.default = Player;
module.exports = exports["default"];

/***/ }),

/***/ "./src/prompt.js":
/*!***********************!*\
  !*** ./src/prompt.js ***!
  \***********************/
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

var Prompt =
/*#__PURE__*/
function () {
  // constructor
  function Prompt() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var keywords = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var results = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var requirements = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

    _classCallCheck(this, Prompt);

    this.name = name; // Keywords that can trigger the prompt (make all lower-case by default)

    this.keywords = keywords.map(function (v) {
      return v.toLowerCase();
    }); // Results that occur when this prompt is successfully triggered;
    // the result keys comprise of “successText” (required), "failText" (optional),
    // “itemsRequired” (optional), and “roomToEnter” (optional)

    this.results = results; // Any prerequisite items needed to do the prompt?

    this.requirements = requirements;
  } // Check if input message matches any prompt keywords and return results


  _createClass(Prompt, [{
    key: "matchKeywords",
    value: function matchKeywords(message) {
      var items = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var foundKeyword = false;
      var missingRequirements = []; // If we have any item requirements

      if (this.requirements.length > 0) {
        // Check all the requirements against the items passed
        this.requirements.forEach(function (requirement) {
          var foundRequirement = false;
          items.forEach(function (item) {
            if (item === requirement) {
              foundRequirement = true;
            }
          }); // If a requirement isn't found add that a list

          if (!foundRequirement) {
            missingRequirements.push(requirement);
          }
        });
      } // Once we check to see if the player's missing any items,
      // parse the input for matching keywords to the prompt


      this.keywords.forEach(function (keyword) {
        if (message.includes(keyword.toLowerCase())) {
          foundKeyword = true;
        }
      }); // If any keywords have been matched from the user input

      if (foundKeyword) {
        // If there are any missing item requirements
        if (missingRequirements.length > 0) {
          // Prompt fails; return missing items and failText
          return {
            'fail': {
              'missing': missingRequirements,
              'failText': this.results.failText
            }
          };
        } // Prompt succeeds; return results of the prompt


        return {
          'success': this.results
        };
      }

      return null;
    }
  }]);

  return Prompt;
}();

exports.default = Prompt;
module.exports = exports["default"];

/***/ }),

/***/ "./src/room.js":
/*!*********************!*\
  !*** ./src/room.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _prompt = _interopRequireDefault(__webpack_require__(/*! ./prompt */ "./src/prompt.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Room =
/*#__PURE__*/
function () {
  // constructor
  // accepts a string room name, string of text, an array of reqs to enter the room, and a list of acceptable prompts
  function Room() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var getText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var requirements = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var prompts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, Room);

    this.name = name;
    this.getText = getText;
    this.requirements = requirements;
    this.prompts = prompts;
  } // add a new prompt/interaction to a room


  _createClass(Room, [{
    key: "addPrompt",
    value: function addPrompt(name, keywords, results, requirements) {
      // create a new prompt and assign it to the const prompt
      var prompt = new _prompt.default(name, keywords, results, requirements); // push the prompt onto the room's list of prompts

      this.prompts.push(prompt); // return the new list of room prompts

      return this.prompts;
    } // enter a room

  }, {
    key: "enter",
    value: function enter() {
      var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var resultText = '';
      var metAllRequirements = true; // set to true until we find that it's not
      // The room is not accessible by default if we have more than one requirement (item)

      if (this.requirements > 0) {
        // if you don't have enough items, don't allow entry right off the bat
        if (items.length === 0) {
          metAllRequirements = false; // Add missing requirement messages

          this.requirements.forEach(function (requirement) {
            resultText += "".concat(requirement.failText, ". ");
          });
        } else {
          // check the requirements to see if you've found them all
          this.requirements.forEach(function (requirement) {
            var found = false; // check all user items; if it's a requirement, set found to true for that item

            this.items.forEach(function (item) {
              if (item === requirement) {
                found = true;
              }
            }); // if found is false, you're missing at least one requirement - say so

            if (found === false) {
              metAllRequirements = false;
              resultText += requirement.failText;
            }
          }); // if all items were found, enter the room and show the room text

          if (metAllRequirements === true) {
            resultText = this.getText;
          }
        } // if there aren't any items required to enter the room, just show the room text

      } else {
        resultText = this.getText;
      } // return result text, whatever it wound up being


      return [resultText, metAllRequirements];
    }
  }]);

  return Room;
}();

exports.default = Room;
module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3RleHQtcnBnLWVuZ2luZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGV4dC1ycGctZW5naW5lLy4vc3JjL2lucHV0LmpzIiwid2VicGFjazovL3RleHQtcnBnLWVuZ2luZS8uL3NyYy9pbnZlbnRvcnkuanMiLCJ3ZWJwYWNrOi8vdGV4dC1ycGctZW5naW5lLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvcHJvbXB0LmpzIiwid2VicGFjazovL3RleHQtcnBnLWVuZ2luZS8uL3NyYy9yb29tLmpzIl0sIm5hbWVzIjpbIkRpc3BsYXkiLCJodG1sIiwiZWxlbWVudElkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsImlubmVySHRtbCIsIkdhbWUiLCJkYXRhcGF0aCIsInJvb21zIiwiaXRlbXMiLCJzdGFydFJvb20iLCJlbmRSb29tIiwiSW5wdXQiLCJQbGF5ZXIiLCJsb2FkRGF0YSIsImkiLCJsZW5ndGgiLCJhZGRSb29tIiwibmFtZSIsImdldFRleHQiLCJqIiwicHJvbXB0cyIsImtleXdvcmRzIiwicmVzdWx0cyIsInJlcXVpcmVtZW50cyIsImFkZFByb21wdCIsImN1cnJlbnRSb29tIiwiZGlzcGxheVRleHQiLCJ1bmRlZmluZWQiLCJzaG93Iiwicm9vbU9iaiIsInB1c2giLCJyb29tTmFtZSIsIm5ld1Jvb21zIiwiZmlsdGVyIiwicm9vbSIsImZpbmQiLCJ4IiwibWVzc2FnZSIsInJlc2V0R2FtZSIsIl90aGlzIiwiY3VyclJvb20iLCJnZXRSb29tIiwiZm91bmRQcm9tcHQiLCJmb3JFYWNoIiwicHJvbXB0IiwibWF0Y2hpbmdQcm9tcHRSZXN1bHRzIiwibWF0Y2hLZXl3b3JkcyIsImludmVudG9yeSIsInN1Y2Nlc3MiLCJzdWNjZXNzVGV4dCIsIml0ZW1zR2l2ZW4iLCJhZGRJdGVtcyIsInJvb21Ub0VudGVyIiwiZW50ZXJSb29tUmVzdWx0U3VjY2VzcyIsImVudGVyUm9vbVJlc3VsdFRleHQiLCJlbnRlclJvb20iLCJhcHBlbmQiLCJ3aW4iLCJmYWlsIiwiZmFpbFRleHQiLCJtaXNzaW5nIiwidG9TdHJpbmciLCJzZW5kIiwiZGVjaWRlUGF0aCIsInZhbHVlIiwiZGlzYWJsZSIsImVuYWJsZSIsImRpc2FibGVJbnB1dCIsImZpbGVwYXRoIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiZ2FtZSIsImRpc2FibGVkIiwidG9Mb3dlckNhc2UiLCJJbnZlbnRvcnkiLCJjb25jYXQiLCJpdGVtTmFtZSIsIm5ld0ludmVudG9yeSIsIml0ZW0iLCJyb29tUmVzdWx0IiwiZW50ZXIiLCJhZGRJdGVtIiwiZHJvcEl0ZW0iLCJQcm9tcHQiLCJtYXAiLCJ2IiwiZm91bmRLZXl3b3JkIiwibWlzc2luZ1JlcXVpcmVtZW50cyIsInJlcXVpcmVtZW50IiwiZm91bmRSZXF1aXJlbWVudCIsImtleXdvcmQiLCJpbmNsdWRlcyIsIlJvb20iLCJyZXN1bHRUZXh0IiwibWV0QWxsUmVxdWlyZW1lbnRzIiwiZm91bmQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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LElBQUksS0FBS1UsV0FBYixFQUEwQjtBQUN4Qk8scUJBQUssR0FBRyxJQUFSO0FBQ0Q7QUFDRixhQUpELEVBSitDLENBVS9DOztBQUNBLGdCQUFJQSxLQUFLLEtBQUssS0FBZCxFQUFxQjtBQUNuQkQsZ0NBQWtCLEdBQUcsS0FBckI7QUFDQUQsd0JBQVUsSUFBSUwsV0FBVyxDQUFDL0IsUUFBMUI7QUFDRDtBQUNGLFdBZkQsRUFGSyxDQW1CTDs7QUFDQSxjQUFJcUMsa0JBQWtCLEtBQUssSUFBM0IsRUFBaUM7QUFDL0JELHNCQUFVLEdBQUcsS0FBSzdFLE9BQWxCO0FBQ0Q7QUFDRixTQS9Cd0IsQ0FpQ3pCOztBQUNELE9BbENELE1Ba0NPO0FBQ0w2RSxrQkFBVSxHQUFHLEtBQUs3RSxPQUFsQjtBQUNELE9BekNlLENBMkNoQjs7O0FBQ0EsYUFBTyxDQUFDNkUsVUFBRCxFQUFhQyxrQkFBYixDQUFQO0FBQ0QiLCJmaWxlIjoidGV4dC1ycGctZW5naW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJ0ZXh0LXJwZy1lbmdpbmVcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1widGV4dC1ycGctZW5naW5lXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInRleHQtcnBnLWVuZ2luZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qXHJcbmRpc3BsYXkuanNcclxuU2hvd3MvYXBwZW5kcyB0ZXh0IHRvIHRoZSBzaXRlXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNwbGF5IHtcclxuICAvLyBjb25zdHJ1Y3RvclxyXG4gIGNvbnN0cnVjdG9yKGh0bWwgPSAnJywgZWxlbWVudElkID0gJ2Rpc3BsYXknKSB7XHJcbiAgICB0aGlzLmh0bWwgPSBodG1sO1xyXG4gICAgdGhpcy5lbGVtZW50SWQgPSBlbGVtZW50SWQ7XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gIHNob3dzIGdpdmVuIEhUTUxcclxuICBpZiBubyBIVE1MIGlzIGdpdmVuLCBkaXNwbGF5IHRoZSBIVE1MIHRoYXQncyBpbiB0aGlzIG9iamVjdCdzIGh0bWwgcHJvcGVydHkgYWxyZWFkeVxyXG4gIG90aGVyd2lzZSwgc2V0IGJvdGggdGhlIGVsZW1lbnQncyBpbm5lciBIVE1MIGFuZCB0aGUgb2JqZWN0J3MgcHJvcGVydHkgdG8gdGhlIGdpdmVuIGh0bWxcclxuICAqL1xyXG4gIHNob3coaHRtbCA9IG51bGwpIHtcclxuICAgIGlmIChodG1sID09PSBudWxsKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5pbm5lckhUTUwgPSB0aGlzLmh0bWw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmVsZW1lbnRJZCkuaW5uZXJIVE1MID0gaHRtbDtcclxuICAgICAgdGhpcy5odG1sID0gaHRtbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGFwcGVuZCBIVE1MIHRvIGRpc3BsYXkgc2NyZWVuXHJcbiAgYXBwZW5kKGh0bWwpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5pbm5lckh0bWwgKz0gaHRtbDtcclxuICB9XHJcbn1cclxuIiwiLypcclxuZ2FtZS5qc1xyXG5pbXBvcnRzIGFuZCBtYW5hZ2VzIHRoZSBwaWVjZXMgd2UgYnVpbGQgdG8gbWFrZSBvbmUgY29oZXNpdmUgZ2FtZSEgWWF5IVxyXG4gKi9cclxuLy8gaW1wb3J0cyAtIHRoZXNlIGluc3RhbnRpYXRlIHRoZSBpbXBvcnRzIGFuZCBzdG9yZSB0aGVtIGFzIHByb3BlcnRpZXMgc28gd2UgY2FuIHJlZmVyZW5jZSB0aGVpciBwcm9wZXJ0aWVzIGluIGdhbWUuanNcclxuaW1wb3J0IERpc3BsYXkgZnJvbSAnLi9kaXNwbGF5JztcclxuaW1wb3J0IElucHV0IGZyb20gJy4vaW5wdXQnO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcclxuaW1wb3J0IFJvb20gZnJvbSAnLi9yb29tJztcclxuaW1wb3J0IEludmVudG9yeSBmcm9tICcuL2ludmVudG9yeSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcclxuICAvLyBjb25zdHJ1Y3RvclxyXG4gIGNvbnN0cnVjdG9yKGRhdGFwYXRoID0gJycsIHJvb21zID0gW10sIGl0ZW1zID0gW10sIHN0YXJ0Um9vbSA9ICcnLCBlbmRSb29tID0gJycpIHtcclxuICAgIHRoaXMuRGlzcGxheSA9IG5ldyBEaXNwbGF5KCk7XHJcbiAgICB0aGlzLklucHV0ID0gbmV3IElucHV0KCk7XHJcbiAgICB0aGlzLmRhdGFwYXRoID0gZGF0YXBhdGg7XHJcbiAgICAvLyBkYXRhcGF0aCBpcyBmb3IgYW4gYWRkZWQgY2hhbGxlbmdlLCBJIGNhbiBsb2FkIGluIGEgSlNPTiBmaWxlIHdpdGggYSBnYW1lIGJ1aWx0IGludG8gaXQgOikgY2hlY2sgaW5pdCBmb3IgbW9yZVxyXG4gICAgdGhpcy5yb29tcyA9IHJvb21zOyAvLyBhbGwgcm9vbXMgaW4gZ2FtZVxyXG4gICAgdGhpcy5zdGFydFJvb20gPSBzdGFydFJvb207IC8vIHJvb20gdGhlIHBsYXllciB3aWxsIHN0YXJ0IGluXHJcbiAgICB0aGlzLmVuZFJvb20gPSBlbmRSb29tOyAvLyB3aGljaCByb29tIGlzIHRoZSBnYW1lLWVuZCByb29tXHJcbiAgICB0aGlzLlBsYXllciA9IG5ldyBQbGF5ZXIoc3RhcnRSb29tID0gdGhpcy5zdGFydFJvb20pO1xyXG4gIH1cclxuXHJcbiAgLy8gSW5pdGlhbGl6ZXMgdGhlIGdhbWVcclxuICBhc3luYyBpbml0KCkge1xyXG4gICAgbGV0IGRpc3BsYXlUZXh0O1xyXG5cclxuICAgIGxldCByb29tcyA9IGF3YWl0IHRoaXMubG9hZERhdGEodGhpcy5kYXRhcGF0aCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb29tcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB0aGlzLmFkZFJvb20ocm9vbXNbaV0ubmFtZSwgcm9vbXNbaV0uZ2V0VGV4dCk7XHJcblxyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJvb21zW2ldLnByb21wdHMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICBpZiAoIXJvb21zW2ldLnByb21wdHNbal0ubmFtZSkge1xyXG4gICAgICAgICAgcm9vbXNbaV0ucHJvbXB0c1tqXS5uYW1lID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcm9vbXNbaV0ucHJvbXB0c1tqXS5rZXl3b3Jkcykge1xyXG4gICAgICAgICAgcm9vbXNbaV0ucHJvbXB0c1tqXS5rZXl3b3JkcyA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXJvb21zW2ldLnByb21wdHNbal0ucmVzdWx0cykge1xyXG4gICAgICAgICAgcm9vbXNbaV0ucHJvbXB0c1tqXS5yZXN1bHRzID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcm9vbXNbaV0ucHJvbXB0c1tqXS5yZXF1aXJlbWVudHMpIHtcclxuICAgICAgICAgIHJvb21zW2ldLnByb21wdHNbal0ucmVxdWlyZW1lbnRzID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucm9vbXNbaV0uYWRkUHJvbXB0KHJvb21zW2ldLnByb21wdHNbal0ubmFtZSwgcm9vbXNbaV0ucHJvbXB0c1tqXS5rZXl3b3JkcyxcclxuICAgICAgICAgIHJvb21zW2ldLnByb21wdHNbal0ucmVzdWx0cywgcm9vbXNbaV0ucHJvbXB0c1tqXS5yZXF1aXJlbWVudHMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaWYgZ2FtZSB3YXNuJ3QgaW5pdGFsaXplZCB3aXRoIHN0YXJ0Um9vbSwgc2V0IGl0IHRvIHRoZSBmaXJzdCByb29tXHJcbiAgICBpZiAodGhpcy5zdGFydFJvb20gPT09ICcnICYmIHRoaXMucm9vbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnN0YXJ0Um9vbSA9IHRoaXMucm9vbXNbMF0ubmFtZTtcclxuICAgICAgdGhpcy5QbGF5ZXIuc3RhcnRSb29tID0gdGhpcy5zdGFydFJvb207XHJcbiAgICAgIHRoaXMuUGxheWVyLmN1cnJlbnRSb29tID0gdGhpcy5QbGF5ZXIuc3RhcnRSb29tO1xyXG4gICAgfVxyXG4gICAgLy8gaWYgZ2FtZSB3YXNuJ3QgaW5pdGFsaXplZCB3aXRoIGVuZFJvb20sIHNldCBpdCB0byB0aGUgbGFzdCByb29tXHJcbiAgICBpZiAodGhpcy5lbmRSb29tID09PSAnJyAmJiB0aGlzLnJvb21zLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5lbmRSb29tID0gdGhpcy5yb29tc1t0aGlzLnJvb21zLmxlbmd0aCAtIDFdLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZGlzcGxheSB0aGUgc3RhcnRSb29tIHRleHRcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb29tcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodGhpcy5yb29tc1tpXS5uYW1lID09PSB0aGlzLnN0YXJ0Um9vbSkge1xyXG4gICAgICAgIGRpc3BsYXlUZXh0ID0gdGhpcy5yb29tc1tpXS5nZXRUZXh0O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRpc3BsYXlUZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgZGlzcGxheVRleHQgPSAnTm8gc3RhcnRpbmcgcm9vbSB0ZXh0IGZvdW5kJztcclxuICAgIH1cclxuICAgIHRoaXMuRGlzcGxheS5zaG93KGRpc3BsYXlUZXh0KTtcclxuICB9XHJcblxyXG4gIC8vIG1hbmFnZSByb29tc1xyXG5cclxuICAvLyBjcmVhdGUgYSBuZXcgUm9vbSBvYmplY3QgYW5kIHB1c2ggaXQgb250byB0aGUgY3VycmVudCByb29tcyBsaXN0XHJcbiAgYWRkUm9vbShuYW1lLCBnZXRUZXh0LCBwcm9tcHRzID0gW10sIHJlcXVpcmVtZW50cyA9IFtdKSB7XHJcbiAgICBsZXQgcm9vbU9iaiA9IG5ldyBSb29tKG5hbWUsIGdldFRleHQsIHJlcXVpcmVtZW50cywgcHJvbXB0cyk7XHJcblxyXG4gICAgdGhpcy5yb29tcy5wdXNoKHJvb21PYmopO1xyXG4gICAgcmV0dXJuIHJvb21PYmo7XHJcbiAgfVxyXG5cclxuICAvLyBmaWx0ZXIgb3V0IGEgcm9vbSBhbmQgZ2V0IHJpZCBvZiBpdCBpZiB3ZSBkb24ndCB3YW50IGl0IGFueW1vcmVcclxuICBkcm9wUm9vbShyb29tTmFtZSkge1xyXG4gICAgbGV0IG5ld1Jvb21zID0gdGhpcy5yb29tcy5maWx0ZXIoZnVuY3Rpb24gKHJvb20pIHtcclxuICAgICAgcmV0dXJuIHJvb20ubmFtZSAhPT0gcm9vbU5hbWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnJvb21zID0gbmV3Um9vbXM7XHJcbiAgICByZXR1cm4gdGhpcy5yb29tcztcclxuICB9XHJcblxyXG4gIC8vIHJldHVybnMgcm9vbSBvYmplY3QgZ2l2ZW4gbmFtZVxyXG4gIGdldFJvb20ocm9vbU5hbWUpIHtcclxuICAgIC8vIHggPT4gaXMgYSBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IHdpbGwgcmV0dXJuIHRoZSByb29tIHdob3NlIG5hbWUgaXMgdGhlIHNhbWUgYXMgcm9vbU5hbWVcclxuICAgIGNvbnN0IHJvb20gPSB0aGlzLnJvb21zLmZpbmQoeCA9PiB4Lm5hbWUgPT09IHJvb21OYW1lKTtcclxuXHJcbiAgICByZXR1cm4gcm9vbTtcclxuICB9XHJcblxyXG4gIC8vIEdhbWUgQUlcclxuICBkZWNpZGVQYXRoKG1lc3NhZ2UpIHtcclxuICAgIGlmIChtZXNzYWdlID09PSAncmVzdGFydCcpIHtcclxuICAgICAgdGhpcy5yZXNldEdhbWUoKTtcclxuICAgIH1cclxuICAgIGNvbnN0IF90aGlzID0gdGhpcztcclxuICAgIGNvbnN0IGN1cnJSb29tID0gX3RoaXMuZ2V0Um9vbShfdGhpcy5QbGF5ZXIuY3VycmVudFJvb20pO1xyXG5cclxuICAgIC8vIERvIHdlIGhhdmUgYWN0aW9ucyB0aGF0IHdlIGNhbiBkbyBpbiB0aGUgcm9vbT9cclxuICAgIGlmICh0eXBlb2YgY3VyclJvb20ucHJvbXB0cyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIC8vIENoZWNrIGV2ZXJ5IHByb21wdCBhY3Rpb24gdG8gc2VlIGlmIGl0IG1hdGNoZXMgb3VyIGlucHV0IGtleXdvcmRzXHJcbiAgICAgIC8vIEZvciBub3cganVzdCBnZXQgdGhlIGZpcnN0IG1hdGNoaW5nIHByb21wdCBhbmQgZG8gdGhhdFxyXG4gICAgICBsZXQgZm91bmRQcm9tcHQgPSBmYWxzZTtcclxuXHJcbiAgICAgIGN1cnJSb29tLnByb21wdHMuZm9yRWFjaChmdW5jdGlvbiAocHJvbXB0KSB7XHJcbiAgICAgICAgaWYgKGZvdW5kUHJvbXB0ID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgY29uc3QgbWF0Y2hpbmdQcm9tcHRSZXN1bHRzID0gcHJvbXB0Lm1hdGNoS2V5d29yZHMobWVzc2FnZSwgX3RoaXMuUGxheWVyLmludmVudG9yeS5pdGVtcyk7XHJcblxyXG4gICAgICAgICAgLy8gSWYgd2UgZ2V0IGEgbWF0Y2hpbmcgcmVzdWx0IGJhY2tcclxuICAgICAgICAgIGlmIChtYXRjaGluZ1Byb21wdFJlc3VsdHMgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgLy8gVGhpcyBwcm9tcHQgaGFzIGtleXdvcmRzIHRoYXQgbWF0Y2ggdGhlIHVzZXIncyBpbnB1dFxyXG4gICAgICAgICAgICBmb3VuZFByb21wdCA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIElmIHBsYXllciBzdWNjZWVkZWQgaW4gcHJvbXB0IGFjdGlvblxyXG4gICAgICAgICAgICBpZiAoJ3N1Y2Nlc3MnIGluIG1hdGNoaW5nUHJvbXB0UmVzdWx0cykge1xyXG4gICAgICAgICAgICAgIF90aGlzLkRpc3BsYXkuc2hvdyhgPHA+JHttYXRjaGluZ1Byb21wdFJlc3VsdHMuc3VjY2Vzcy5zdWNjZXNzVGV4dH08L3A+YCk7XHJcbiAgICAgICAgICAgICAgLy8gR2V0IGl0ZW1zIGZyb20gcHJvbXB0IGlmIGFueSBhcmUgcmV0dXJuZWQgYW5kIGFkZCB0aGVtIHRvIGludmVudG9yeVxyXG4gICAgICAgICAgICAgIGlmIChtYXRjaGluZ1Byb21wdFJlc3VsdHMuc3VjY2Vzcy5pdGVtc0dpdmVuICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLlBsYXllci5pbnZlbnRvcnkuYWRkSXRlbXMobWF0Y2hpbmdQcm9tcHRSZXN1bHRzLnN1Y2Nlc3MuaXRlbXNHaXZlbik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8vIElmIHRoZSBwcm9tcHQgc3VjY2VzcyByZXN1bHQgaW5jbHVkZXMgZW50ZXJpbmcgYSBuZXcgcm9vbS4uXHJcbiAgICAgICAgICAgICAgaWYgKG1hdGNoaW5nUHJvbXB0UmVzdWx0cy5zdWNjZXNzLnJvb21Ub0VudGVyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBlbnRlclJvb21SZXN1bHRTdWNjZXNzO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVudGVyUm9vbVJlc3VsdFRleHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHBsYXllciBjYW4gc3VjY2Vzc2Z1bGx5IGVudGVyIHRoZSByb29tIChnaXZlbiB0aGUgaW52ZW50b3J5IC8gcm9vbSByZXF1aXJlbWVudHMpXHJcbiAgICAgICAgICAgICAgICBbZW50ZXJSb29tUmVzdWx0VGV4dCwgZW50ZXJSb29tUmVzdWx0U3VjY2Vzc10gPVxyXG4gICAgICAgICAgICAgICAgICBfdGhpcy5QbGF5ZXIuZW50ZXJSb29tKF90aGlzLmdldFJvb20obWF0Y2hpbmdQcm9tcHRSZXN1bHRzLnN1Y2Nlc3Mucm9vbVRvRW50ZXIpKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLkRpc3BsYXkuYXBwZW5kKGA8cD4ke2VudGVyUm9vbVJlc3VsdFRleHR9PC9wPmApO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVudGVyUm9vbVJlc3VsdFN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHBsYXllciBlbnRlcmVkIHdpbm5pbmcgcm9vbVxyXG4gICAgICAgICAgICAgICAgICBpZiAobWF0Y2hpbmdQcm9tcHRSZXN1bHRzLnN1Y2Nlc3Mucm9vbVRvRW50ZXIgPT09IF90aGlzLmVuZFJvb20pIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy53aW4oKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgLy8gUGxheWVyIGNvdWxkIG5vdCBlbnRlciByb29tIChtaXNzaW5nIHJlcXVpcmVkIGl0ZW1zIGluIGludmVudG9yeSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gUGxheWVyIGZhaWxlZCB0byBkbyBwcm9tcHQgKG1pc3NpbmcgaXRlbSByZXF1aXJlbWVudClcclxuICAgICAgICAgICAgaWYgKCdmYWlsJyBpbiBtYXRjaGluZ1Byb21wdFJlc3VsdHMpIHtcclxuICAgICAgICAgICAgICBfdGhpcy5EaXNwbGF5LnNob3coYCR7bWF0Y2hpbmdQcm9tcHRSZXN1bHRzLmZhaWwuZmFpbFRleHR9YCk7XHJcbiAgICAgICAgICAgICAgX3RoaXMuRGlzcGxheS5hcHBlbmQoYDxwPk1pc3NpbmcgcmVxdWlyZWQgaXRlbXM6ICR7bWF0Y2hpbmdQcm9tcHRSZXN1bHRzLmZhaWwubWlzc2luZy50b1N0cmluZygpfS5cclxuICAgICAgICAgICAgICA8L3A+PHA+JHtfdGhpcy5nZXRSb29tKF90aGlzLlBsYXllci5jdXJyZW50Um9vbSkuZ2V0VGV4dH08L3A+YCk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmb3VuZFByb21wdCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgIC8vIFBsYXllciBkaWRuJ3Qgc2F5IGFueSBrZXl3b3JkcyB0aGF0IHRyaWdnZXJlZCBhbnkgb2YgdGhlIGN1cnJlbnQgcm9vbSBwcm9tcHRzXHJcbiAgICAgICAgICBfdGhpcy5EaXNwbGF5LnNob3coYDxwPk5vIGFjdGlvbnMgY291bGQgYmUgZG9uZSBmcm9tOiBcIiR7bWVzc2FnZX1cIi4gVHJ5IHNvbWV0aGluZyBlbHNlLCBvciBiZSBtb3JlIFxyXG4gICAgICAgICAgc3BlY2lmaWMgYWJvdXQgd2hhdCB5b3UncmUgZG9pbmcuPC9wPjxwPiR7X3RoaXMuZ2V0Um9vbShfdGhpcy5QbGF5ZXIuY3VycmVudFJvb20pLmdldFRleHR9PC9wPmApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBObyBwcm9tcHRzIGV4aXN0IGZvciB0aGUgY3VycmVudCByb29tXHJcbiAgICAgIF90aGlzLkRpc3BsYXkuc2hvdyhgPHA+VGhlcmUgZG9lc24ndCBzZWVtIHRvIGJlIGFueSBhY3Rpb25zIGF0IGFsbCB0aGF0IHlvdSBjYW4gZG8gaW4gdGhpcyByb29tLjwvcD5cclxuICAgICAgJHtfdGhpcy5nZXRSb29tKF90aGlzLlBsYXllci5jdXJyZW50Um9vbSkuZ2V0VGV4dH1gKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEdyYWIgdGhlIG1lc3NhZ2UgZnJvbSB0aGUgdXNlciBhbmQgcnVuIElucHV0LnNlbmQgb24gaXRcclxuICB1c2VyU2VuZChtZXNzYWdlKSB7XHJcbiAgICAvLyBPdXIgSW5wdXQgY2xhc3Mgd2lsbCBoYW5kbGUgY2xlYW5pbmcgLyBub3JtYWxpemluZyBzdHJpbmdzXHJcbiAgICB0aGlzLklucHV0LnNlbmQobWVzc2FnZSk7XHJcbiAgICB0aGlzLmRlY2lkZVBhdGgodGhpcy5JbnB1dC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvLyBqdXN0IG1ha2VzIGl0IGVhc2llci9tb3JlIHJlYWRhYmxlIHRvIGRpc2FibGUgaW5wdXRcclxuICBkaXNhYmxlSW5wdXQoKSB7XHJcbiAgICB0aGlzLklucHV0LmRpc2FibGUoKTtcclxuICB9XHJcblxyXG4gIC8vIGp1c3QgbWFrZXMgaXQgZWFzaWVyL21vcmUgcmVhZGFibGUgdG8gZW5hYmxlIGlucHV0XHJcbiAgZW5hYmxlSW5wdXQoKSB7XHJcbiAgICB0aGlzLklucHV0LmVuYWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gcGxheWVyIHdpbnNcclxuICB3aW4oKSB7XHJcbiAgICAvLyBzaG93IHdpbiB0ZXh0XHJcbiAgICB0aGlzLkRpc3BsYXkuYXBwZW5kKCc8cD5ZT1UgV0lOITwvcD4nKTtcclxuXHJcbiAgICAvLyBkaXNhYmxlIG1vcmUgaW5wdXQgYWZ0ZXIgd2lubmluZ1xyXG4gICAgdGhpcy5kaXNhYmxlSW5wdXQoKTtcclxuICB9XHJcblxyXG4gIC8vIFBsYXllciByZXNldHMgZ2FtZVxyXG4gIHJlc2V0R2FtZSgpIHtcclxuICAgIC8vIHJlc2V0cyBwbGF5ZXIgd2l0aCBibGFuayBpbnZlbnRvcnkgYW5kIGJhY2sgaW4gc3RhcnRpbmcgcm9vbVxyXG4gICAgdGhpcy5QbGF5ZXIuaW52ZW50b3J5ID0gbmV3IEludmVudG9yeSgpO1xyXG4gICAgdGhpcy5QbGF5ZXIuY3VycmVudFJvb20gPSB0aGlzLnN0YXJ0Um9vbTtcclxuICAgIGNvbnN0IHJvb20gPSB0aGlzLmdldFJvb20odGhpcy5zdGFydFJvb20pO1xyXG5cclxuICAgIHRoaXMuRGlzcGxheS5zaG93KHJvb20uZ2V0VGV4dCk7XHJcbiAgICB0aGlzLklucHV0LmVuYWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gbG9hZCBmcm9tIGpzb24gZmlsZVxyXG4gIGFzeW5jIGxvYWREYXRhKGZpbGVwYXRoKSB7XHJcbiAgICBsZXQgcm9vbXMgPSBbXTtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGZpbGVwYXRoKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLnJvb21zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICghZGF0YS5yb29tc1tpXS5wcm9tcHRzKSB7XHJcbiAgICAgICAgZGF0YS5yb29tc1tpXS5wcm9tcHRzID0gW107XHJcbiAgICAgIH1cclxuICAgICAgcm9vbXMucHVzaChkYXRhLnJvb21zW2ldKTtcclxuICAgIH1cclxuICAgIHJldHVybiByb29tcztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcclxuXHJcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2FtZTtcclxuIiwiLypcclxuaW5wdXQuanNcclxuU2hvd3MgdGV4dCwgYWxsb3dzIGZvciBpbnB1dFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQge1xyXG4gIC8vIGNvbnN0cnVjdG9yXHJcbiAgY29uc3RydWN0b3IoZGlzYWJsZWQgPSBmYWxzZSwgdmFsdWUgPSAnJywgZWxlbWVudElkID0gJ2lucHV0Jykge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGRpc2FibGVkO1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5lbGVtZW50SWQgPSBlbGVtZW50SWQ7XHJcbiAgfVxyXG5cclxuICAvLyBlbmFibGVzIGlucHV0IGFuZCBkb2VzIHRoZSBzYW1lIGluIHRoZSBIVE1MXHJcbiAgZW5hYmxlKCkge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0JykuZGlzYWJsZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8vIGRpc2FibGVzIGlucHV0IGFuZCBkb2VzIHRoZSBzYW1lIGluIHRoZSBIVE1MXHJcbiAgZGlzYWJsZSgpIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0JykuZGlzYWJsZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLy8gc2VuZHMgY2xpZW50IGlucHV0IHRvIGJlIGV2YWx1YXRlZFxyXG4gIHNlbmQodmFsdWUpIHtcclxuICAgIC8vIG5vcm1hbGl6ZSBpbnB1dCB2YWx1ZXNcclxuICAgIHZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW52ZW50b3J5IHtcclxuICAvLyBjb25zdHJ1Y3RvclxyXG4gIGNvbnN0cnVjdG9yKGl0ZW1zID0gW10pIHtcclxuICAgIHRoaXMuaXRlbXMgPSBpdGVtcztcclxuICB9XHJcblxyXG4gIC8vIGNhbiBhZGQgc2luZ2xlIG9yIG11bHRpcGxlIGl0ZW1zOyBwYXJhbWV0ZXIgcGFzc2VkIGluIHNob3VsZCBiZSBhbiBhcnJheVxyXG4gIGFkZEl0ZW1zKGl0ZW1zKSB7XHJcbiAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtcy5jb25jYXQoaXRlbXMpO1xyXG4gICAgcmV0dXJuIHRoaXMuaXRlbXM7XHJcbiAgfVxyXG5cclxuICAvLyBkcm9wIGFuIGl0ZW0gYnkgZmlsdGVyaW5nIG91dCB0aGUgaXRlbSBuYW1lIHRoYXQgd2Ugd2FudCB0byBkcm9wIGFuZCByZXR1cm5pbmcgdGhlIGludmVudG9yeSB3aXRob3V0IGl0XHJcbiAgZHJvcEl0ZW0oaXRlbU5hbWUpIHtcclxuICAgIGxldCBuZXdJbnZlbnRvcnkgPSB0aGlzLml0ZW1zLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICByZXR1cm4gaXRlbS5uYW1lICE9PSBpdGVtTmFtZTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuaXRlbXMgPSBuZXdJbnZlbnRvcnk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaXRlbXM7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBJbnZlbnRvcnkgZnJvbSAnLi9pbnZlbnRvcnknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcclxuICAvLyBjb25zdHJ1Y3RvclxyXG4gIGNvbnN0cnVjdG9yKG5hbWUgPSAnJywgaW52ZW50b3J5ID0gbmV3IEludmVudG9yeSgpLCBjdXJyZW50Um9vbSA9ICcnLCBzdGFydFJvb20pIHtcclxuICAgIC8vIGlmIG5hbWUgaXMgZ2l2ZW4sIHNldCBpdDsgaWYgbm90LCBzZXQgbmFtZSB0byAncGxheWVyJ1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIGlmICh0aGlzLm5hbWUgPT09ICcnKSB7XHJcbiAgICAgIHRoaXMubmFtZSA9ICdwbGF5ZXInO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW52ZW50b3J5ID0gaW52ZW50b3J5O1xyXG5cclxuICAgIC8vIGlmIGN1cnJlbnRSb29tIGlzIGJsYW5rLCBzZXQgaXQgdG8gc3RhcnRSb29tXHJcbiAgICBpZiAodGhpcy5jdXJyZW50Um9vbSA9PT0gJycpIHtcclxuICAgICAgdGhpcy5jdXJyZW50Um9vbSA9IHRoaXMuc3RhcnRSb29tO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdGFydFJvb20gPSBzdGFydFJvb207XHJcbiAgfVxyXG5cclxuICAvLyBlbnRlciByb29tXHJcbiAgZW50ZXJSb29tKHJvb20pIHtcclxuICAgIC8vIGFzc2lnbnMgdGhlIHZhbHVlIG9mIHJvb20uZW50ZXIgKHBhc3MsIGZhaWwsIGV0Yy4pIHRvIHJvb21SZXN1bHQgLSB0aGF0IGxvZ2ljIGlzIGluIFJvb21cclxuICAgIGNvbnN0IHJvb21SZXN1bHQgPSByb29tLmVudGVyKHRoaXMuaW52ZW50b3J5Lml0ZW1zKTtcclxuXHJcbiAgICAvLyByb29tUmVzdWx0WzFdIGlzIHRoZSBtZXRBbGxSZXF1aXJlbWVudHMgYm9vbCBpbiByb29tLmpzOyBpZiBpdCdzIGZhbHNlLCB3ZWxsLCB5ZWFoLCBpdCdzIGZhbHNlXHJcbiAgICBpZiAocm9vbVJlc3VsdFsxXSA9PT0gZmFsc2UpIHtcclxuICAgICAgLy8gcGxheWVyIGRpZG4ndCBoYXZlIHRoZSByZXF1aXJlZCBpdGVtcyB0byBlbnRlciB0aGUgcm9vbVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gZW50ZXJlZCByb29tXHJcbiAgICAgIHRoaXMuY3VycmVudFJvb20gPSByb29tLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmV0dXJuIHJlc3VsdHMgdGV4dCBhbmQgd2hldGhlciBvciBub3QgdGhlIHBsYXllciBzdWNjZXNzZnVsbHkgZW50ZXJlZCB0aGUgcm9vbVxyXG4gICAgcmV0dXJuIFtyb29tUmVzdWx0WzBdLCByb29tUmVzdWx0WzFdXTtcclxuICB9XHJcblxyXG4gIC8vIHRoZSBsb2dpYyBmb3IgZ2V0SXRlbSBhbmQgZHJvcEl0ZW0gaXMgaW4gaW52ZW50b3J5LmpzXHJcbiAgZ2V0SXRlbShpdGVtKSB7XHJcbiAgICB0aGlzLmludmVudG9yeS5hZGRJdGVtKGl0ZW0pO1xyXG4gICAgcmV0dXJuIHRoaXMuaW52ZW50b3J5O1xyXG4gIH1cclxuXHJcbiAgZHJvcEl0ZW0oaXRlbSkge1xyXG4gICAgdGhpcy5pbnZlbnRvcnkuZHJvcEl0ZW0oaXRlbSk7XHJcbiAgICByZXR1cm4gdGhpcy5pbnZlbnRvcnk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb21wdCB7XHJcbiAgLy8gY29uc3RydWN0b3JcclxuICBjb25zdHJ1Y3RvcihuYW1lID0gJycsIGtleXdvcmRzID0gW10sIHJlc3VsdHMgPSB7fSwgcmVxdWlyZW1lbnRzID0gW10pIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAvLyBLZXl3b3JkcyB0aGF0IGNhbiB0cmlnZ2VyIHRoZSBwcm9tcHQgKG1ha2UgYWxsIGxvd2VyLWNhc2UgYnkgZGVmYXVsdClcclxuICAgIHRoaXMua2V5d29yZHMgPSBrZXl3b3Jkcy5tYXAoZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHYudG9Mb3dlckNhc2UoKTt9KTtcclxuICAgIC8vIFJlc3VsdHMgdGhhdCBvY2N1ciB3aGVuIHRoaXMgcHJvbXB0IGlzIHN1Y2Nlc3NmdWxseSB0cmlnZ2VyZWQ7XHJcbiAgICAvLyB0aGUgcmVzdWx0IGtleXMgY29tcHJpc2Ugb2Yg4oCcc3VjY2Vzc1RleHTigJ0gKHJlcXVpcmVkKSwgXCJmYWlsVGV4dFwiIChvcHRpb25hbCksXHJcbiAgICAvLyDigJxpdGVtc1JlcXVpcmVk4oCdIChvcHRpb25hbCksIGFuZCDigJxyb29tVG9FbnRlcuKAnSAob3B0aW9uYWwpXHJcbiAgICB0aGlzLnJlc3VsdHMgPSByZXN1bHRzO1xyXG4gICAgLy8gQW55IHByZXJlcXVpc2l0ZSBpdGVtcyBuZWVkZWQgdG8gZG8gdGhlIHByb21wdD9cclxuICAgIHRoaXMucmVxdWlyZW1lbnRzID0gcmVxdWlyZW1lbnRzO1xyXG4gIH1cclxuXHJcbiAgLy8gQ2hlY2sgaWYgaW5wdXQgbWVzc2FnZSBtYXRjaGVzIGFueSBwcm9tcHQga2V5d29yZHMgYW5kIHJldHVybiByZXN1bHRzXHJcbiAgbWF0Y2hLZXl3b3JkcyhtZXNzYWdlLCBpdGVtcyA9IFtdKSB7XHJcbiAgICBsZXQgZm91bmRLZXl3b3JkID0gZmFsc2U7XHJcbiAgICBsZXQgbWlzc2luZ1JlcXVpcmVtZW50cyA9IFtdO1xyXG5cclxuICAgIC8vIElmIHdlIGhhdmUgYW55IGl0ZW0gcmVxdWlyZW1lbnRzXHJcbiAgICBpZiAodGhpcy5yZXF1aXJlbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAvLyBDaGVjayBhbGwgdGhlIHJlcXVpcmVtZW50cyBhZ2FpbnN0IHRoZSBpdGVtcyBwYXNzZWRcclxuICAgICAgdGhpcy5yZXF1aXJlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAocmVxdWlyZW1lbnQpIHtcclxuICAgICAgICBsZXQgZm91bmRSZXF1aXJlbWVudCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICBpZiAoaXRlbSA9PT0gcmVxdWlyZW1lbnQpIHtcclxuICAgICAgICAgICAgZm91bmRSZXF1aXJlbWVudCA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gSWYgYSByZXF1aXJlbWVudCBpc24ndCBmb3VuZCBhZGQgdGhhdCBhIGxpc3RcclxuICAgICAgICBpZiAoIWZvdW5kUmVxdWlyZW1lbnQpIHtcclxuICAgICAgICAgIG1pc3NpbmdSZXF1aXJlbWVudHMucHVzaChyZXF1aXJlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vIE9uY2Ugd2UgY2hlY2sgdG8gc2VlIGlmIHRoZSBwbGF5ZXIncyBtaXNzaW5nIGFueSBpdGVtcyxcclxuICAgIC8vIHBhcnNlIHRoZSBpbnB1dCBmb3IgbWF0Y2hpbmcga2V5d29yZHMgdG8gdGhlIHByb21wdFxyXG4gICAgdGhpcy5rZXl3b3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChrZXl3b3JkKSB7XHJcbiAgICAgIGlmIChtZXNzYWdlLmluY2x1ZGVzKGtleXdvcmQudG9Mb3dlckNhc2UoKSkpIHtcclxuICAgICAgICBmb3VuZEtleXdvcmQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIElmIGFueSBrZXl3b3JkcyBoYXZlIGJlZW4gbWF0Y2hlZCBmcm9tIHRoZSB1c2VyIGlucHV0XHJcbiAgICBpZiAoZm91bmRLZXl3b3JkKSB7XHJcbiAgICAgIC8vIElmIHRoZXJlIGFyZSBhbnkgbWlzc2luZyBpdGVtIHJlcXVpcmVtZW50c1xyXG4gICAgICBpZiAobWlzc2luZ1JlcXVpcmVtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgLy8gUHJvbXB0IGZhaWxzOyByZXR1cm4gbWlzc2luZyBpdGVtcyBhbmQgZmFpbFRleHRcclxuICAgICAgICByZXR1cm4geydmYWlsJzoge1xyXG4gICAgICAgICAgJ21pc3NpbmcnOiBtaXNzaW5nUmVxdWlyZW1lbnRzLFxyXG4gICAgICAgICAgJ2ZhaWxUZXh0JzogdGhpcy5yZXN1bHRzLmZhaWxUZXh0fVxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgLy8gUHJvbXB0IHN1Y2NlZWRzOyByZXR1cm4gcmVzdWx0cyBvZiB0aGUgcHJvbXB0XHJcbiAgICAgIHJldHVybiB7J3N1Y2Nlc3MnOiB0aGlzLnJlc3VsdHN9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBQcm9tcHQgZnJvbSAnLi9wcm9tcHQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm9vbSB7XHJcbiAgLy8gY29uc3RydWN0b3JcclxuICAvLyBhY2NlcHRzIGEgc3RyaW5nIHJvb20gbmFtZSwgc3RyaW5nIG9mIHRleHQsIGFuIGFycmF5IG9mIHJlcXMgdG8gZW50ZXIgdGhlIHJvb20sIGFuZCBhIGxpc3Qgb2YgYWNjZXB0YWJsZSBwcm9tcHRzXHJcbiAgY29uc3RydWN0b3IobmFtZSA9ICcnLCBnZXRUZXh0ID0gJycsIHJlcXVpcmVtZW50cyA9IFtdLCBwcm9tcHRzID0ge30pIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmdldFRleHQgPSBnZXRUZXh0O1xyXG4gICAgdGhpcy5yZXF1aXJlbWVudHMgPSByZXF1aXJlbWVudHM7XHJcbiAgICB0aGlzLnByb21wdHMgPSBwcm9tcHRzO1xyXG4gIH1cclxuXHJcbiAgLy8gYWRkIGEgbmV3IHByb21wdC9pbnRlcmFjdGlvbiB0byBhIHJvb21cclxuICBhZGRQcm9tcHQobmFtZSwga2V5d29yZHMsIHJlc3VsdHMsIHJlcXVpcmVtZW50cykge1xyXG4gICAgLy8gY3JlYXRlIGEgbmV3IHByb21wdCBhbmQgYXNzaWduIGl0IHRvIHRoZSBjb25zdCBwcm9tcHRcclxuICAgIGNvbnN0IHByb21wdCA9IG5ldyBQcm9tcHQobmFtZSwga2V5d29yZHMsIHJlc3VsdHMsIHJlcXVpcmVtZW50cyk7XHJcblxyXG4gICAgLy8gcHVzaCB0aGUgcHJvbXB0IG9udG8gdGhlIHJvb20ncyBsaXN0IG9mIHByb21wdHNcclxuICAgIHRoaXMucHJvbXB0cy5wdXNoKHByb21wdCk7XHJcblxyXG4gICAgLy8gcmV0dXJuIHRoZSBuZXcgbGlzdCBvZiByb29tIHByb21wdHNcclxuICAgIHJldHVybiB0aGlzLnByb21wdHM7XHJcbiAgfVxyXG5cclxuICAvLyBlbnRlciBhIHJvb21cclxuICBlbnRlcihpdGVtcyA9IFtdKSB7XHJcbiAgICBsZXQgcmVzdWx0VGV4dCA9ICcnO1xyXG4gICAgbGV0IG1ldEFsbFJlcXVpcmVtZW50cyA9IHRydWU7IC8vIHNldCB0byB0cnVlIHVudGlsIHdlIGZpbmQgdGhhdCBpdCdzIG5vdFxyXG5cclxuICAgIC8vIFRoZSByb29tIGlzIG5vdCBhY2Nlc3NpYmxlIGJ5IGRlZmF1bHQgaWYgd2UgaGF2ZSBtb3JlIHRoYW4gb25lIHJlcXVpcmVtZW50IChpdGVtKVxyXG4gICAgaWYgKHRoaXMucmVxdWlyZW1lbnRzID4gMCkge1xyXG4gICAgICAvLyBpZiB5b3UgZG9uJ3QgaGF2ZSBlbm91Z2ggaXRlbXMsIGRvbid0IGFsbG93IGVudHJ5IHJpZ2h0IG9mZiB0aGUgYmF0XHJcbiAgICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBtZXRBbGxSZXF1aXJlbWVudHMgPSBmYWxzZTtcclxuICAgICAgICAvLyBBZGQgbWlzc2luZyByZXF1aXJlbWVudCBtZXNzYWdlc1xyXG4gICAgICAgIHRoaXMucmVxdWlyZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKHJlcXVpcmVtZW50KSB7XHJcbiAgICAgICAgICByZXN1bHRUZXh0ICs9IGAke3JlcXVpcmVtZW50LmZhaWxUZXh0fS4gYDtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBjaGVjayB0aGUgcmVxdWlyZW1lbnRzIHRvIHNlZSBpZiB5b3UndmUgZm91bmQgdGhlbSBhbGxcclxuICAgICAgICB0aGlzLnJlcXVpcmVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXF1aXJlbWVudCkge1xyXG4gICAgICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgLy8gY2hlY2sgYWxsIHVzZXIgaXRlbXM7IGlmIGl0J3MgYSByZXF1aXJlbWVudCwgc2V0IGZvdW5kIHRvIHRydWUgZm9yIHRoYXQgaXRlbVxyXG4gICAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtID09PSByZXF1aXJlbWVudCkge1xyXG4gICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgLy8gaWYgZm91bmQgaXMgZmFsc2UsIHlvdSdyZSBtaXNzaW5nIGF0IGxlYXN0IG9uZSByZXF1aXJlbWVudCAtIHNheSBzb1xyXG4gICAgICAgICAgaWYgKGZvdW5kID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBtZXRBbGxSZXF1aXJlbWVudHMgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmVzdWx0VGV4dCArPSByZXF1aXJlbWVudC5mYWlsVGV4dDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gaWYgYWxsIGl0ZW1zIHdlcmUgZm91bmQsIGVudGVyIHRoZSByb29tIGFuZCBzaG93IHRoZSByb29tIHRleHRcclxuICAgICAgICBpZiAobWV0QWxsUmVxdWlyZW1lbnRzID09PSB0cnVlKSB7XHJcbiAgICAgICAgICByZXN1bHRUZXh0ID0gdGhpcy5nZXRUZXh0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gaWYgdGhlcmUgYXJlbid0IGFueSBpdGVtcyByZXF1aXJlZCB0byBlbnRlciB0aGUgcm9vbSwganVzdCBzaG93IHRoZSByb29tIHRleHRcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc3VsdFRleHQgPSB0aGlzLmdldFRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmV0dXJuIHJlc3VsdCB0ZXh0LCB3aGF0ZXZlciBpdCB3b3VuZCB1cCBiZWluZ1xyXG4gICAgcmV0dXJuIFtyZXN1bHRUZXh0LCBtZXRBbGxSZXF1aXJlbWVudHNdO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9