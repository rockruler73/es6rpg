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
        var displayText, rooms, i, _i;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('Initialized game from: ' + this.datapath);
                _context.next = 3;
                return this.loadData(this.datapath);

              case 3:
                rooms = _context.sent;

                for (i = 0; i < rooms.length; i++) {
                  this.addRoom(rooms[i].name, rooms[i].getText, rooms[i].prompts, rooms[i].requirements);
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

              case 8:
                if (!(_i < this.rooms.length)) {
                  _context.next = 15;
                  break;
                }

                if (!(this.rooms[_i].name === this.startRoom)) {
                  _context.next = 12;
                  break;
                }

                displayText = this.rooms[_i].getText;
                return _context.abrupt("break", 15);

              case 12:
                _i++;
                _context.next = 8;
                break;

              case 15:
                if (displayText === undefined) {
                  displayText = 'No starting room text found';
                }

                this.Display.show(displayText);

              case 17:
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
      var roomObj = new _room.default(name, getText, prompts, requirements);
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

      console.log(message, this.Player);
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
                console.log(data);

                for (i = 0; i < data.rooms.length; i++) {
                  rooms.push(data.rooms[i]);
                }

                return _context2.abrupt("return", rooms);

              case 10:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3RleHQtcnBnLWVuZ2luZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGV4dC1ycGctZW5naW5lLy4vc3JjL2lucHV0LmpzIiwid2VicGFjazovL3RleHQtcnBnLWVuZ2luZS8uL3NyYy9pbnZlbnRvcnkuanMiLCJ3ZWJwYWNrOi8vdGV4dC1ycGctZW5naW5lLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvcHJvbXB0LmpzIiwid2VicGFjazovL3RleHQtcnBnLWVuZ2luZS8uL3NyYy9yb29tLmpzIl0sIm5hbWVzIjpbIkRpc3BsYXkiLCJodG1sIiwiZWxlbWVudElkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsImlubmVySHRtbCIsIkdhbWUiLCJkYXRhcGF0aCIsInJvb21zIiwiaXRlbXMiLCJzdGFydFJvb20iLCJlbmRSb29tIiwiSW5wdXQiLCJQbGF5ZXIiLCJjb25zb2xlIiwibG9nIiwibG9hZERhdGEiLCJpIiwibGVuZ3RoIiwiYWRkUm9vbSIsIm5hbWUiLCJnZXRUZXh0IiwicHJvbXB0cyIsInJlcXVpcmVtZW50cyIsImN1cnJlbnRSb29tIiwiZGlzcGxheVRleHQiLCJ1bmRlZmluZWQiLCJzaG93Iiwicm9vbU9iaiIsInB1c2giLCJyb29tTmFtZSIsIm5ld1Jvb21zIiwiZmlsdGVyIiwicm9vbSIsImZpbmQiLCJ4IiwibWVzc2FnZSIsInJlc2V0R2FtZSIsIl90aGlzIiwiY3VyclJvb20iLCJnZXRSb29tIiwiZm91bmRQcm9tcHQiLCJmb3JFYWNoIiwicHJvbXB0IiwibWF0Y2hpbmdQcm9tcHRSZXN1bHRzIiwibWF0Y2hLZXl3b3JkcyIsImludmVudG9yeSIsInN1Y2Nlc3MiLCJzdWNjZXNzVGV4dCIsIml0ZW1zR2l2ZW4iLCJhZGRJdGVtcyIsInJvb21Ub0VudGVyIiwiZW50ZXJSb29tUmVzdWx0U3VjY2VzcyIsImVudGVyUm9vbVJlc3VsdFRleHQiLCJlbnRlclJvb20iLCJhcHBlbmQiLCJ3aW4iLCJmYWlsIiwiZmFpbFRleHQiLCJtaXNzaW5nIiwidG9TdHJpbmciLCJzZW5kIiwiZGVjaWRlUGF0aCIsInZhbHVlIiwiZGlzYWJsZSIsImVuYWJsZSIsImRpc2FibGVJbnB1dCIsImZpbGVwYXRoIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiZ2FtZSIsImRpc2FibGVkIiwidG9Mb3dlckNhc2UiLCJJbnZlbnRvcnkiLCJjb25jYXQiLCJpdGVtTmFtZSIsIm5ld0ludmVudG9yeSIsIml0ZW0iLCJyb29tUmVzdWx0IiwiZW50ZXIiLCJhZGRJdGVtIiwiZHJvcEl0ZW0iLCJQcm9tcHQiLCJrZXl3b3JkcyIsInJlc3VsdHMiLCJtYXAiLCJ2IiwiZm91bmRLZXl3b3JkIiwibWlzc2luZ1JlcXVpcmVtZW50cyIsInJlcXVpcmVtZW50IiwiZm91bmRSZXF1aXJlbWVudCIsImtleXdvcmQiLCJpbmNsdWRlcyIsIlJvb20iLCJyZXN1bHRUZXh0IiwibWV0QWxsUmVxdWlyZW1lbnRzIiwiZm91bmQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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LEVBQXFCO0FBQ25CRCxnQ0FBa0IsR0FBRyxLQUFyQjtBQUNBRCx3QkFBVSxJQUFJTCxXQUFXLENBQUNqQyxRQUExQjtBQUNEO0FBQ0YsV0FmRCxFQUZLLENBbUJMOztBQUNBLGNBQUl1QyxrQkFBa0IsS0FBSyxJQUEzQixFQUFpQztBQUMvQkQsc0JBQVUsR0FBRyxLQUFLM0UsT0FBbEI7QUFDRDtBQUNGLFNBL0J3QixDQWlDekI7O0FBQ0QsT0FsQ0QsTUFrQ087QUFDTDJFLGtCQUFVLEdBQUcsS0FBSzNFLE9BQWxCO0FBQ0QsT0F6Q2UsQ0EyQ2hCOzs7QUFDQSxhQUFPLENBQUMyRSxVQUFELEVBQWFDLGtCQUFiLENBQVA7QUFDRCIsImZpbGUiOiJ0ZXh0LXJwZy1lbmdpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcInRleHQtcnBnLWVuZ2luZVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ0ZXh0LXJwZy1lbmdpbmVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1widGV4dC1ycGctZW5naW5lXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLypcclxuZGlzcGxheS5qc1xyXG5TaG93cy9hcHBlbmRzIHRleHQgdG8gdGhlIHNpdGVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3BsYXkge1xyXG4gIC8vIGNvbnN0cnVjdG9yXHJcbiAgY29uc3RydWN0b3IoaHRtbCA9ICcnLCBlbGVtZW50SWQgPSAnZGlzcGxheScpIHtcclxuICAgIHRoaXMuaHRtbCA9IGh0bWw7XHJcbiAgICB0aGlzLmVsZW1lbnRJZCA9IGVsZW1lbnRJZDtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgc2hvd3MgZ2l2ZW4gSFRNTFxyXG4gIGlmIG5vIEhUTUwgaXMgZ2l2ZW4sIGRpc3BsYXkgdGhlIEhUTUwgdGhhdCdzIGluIHRoaXMgb2JqZWN0J3MgaHRtbCBwcm9wZXJ0eSBhbHJlYWR5XHJcbiAgb3RoZXJ3aXNlLCBzZXQgYm90aCB0aGUgZWxlbWVudCdzIGlubmVyIEhUTUwgYW5kIHRoZSBvYmplY3QncyBwcm9wZXJ0eSB0byB0aGUgZ2l2ZW4gaHRtbFxyXG4gICovXHJcbiAgc2hvdyhodG1sID0gbnVsbCkge1xyXG4gICAgaWYgKGh0bWwgPT09IG51bGwpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpLmlubmVySFRNTCA9IHRoaXMuaHRtbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgICB0aGlzLmh0bWwgPSBodG1sO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gYXBwZW5kIEhUTUwgdG8gZGlzcGxheSBzY3JlZW5cclxuICBhcHBlbmQoaHRtbCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpLmlubmVySHRtbCArPSBodG1sO1xyXG4gIH1cclxufVxyXG4iLCIvKlxyXG5nYW1lLmpzXHJcbmltcG9ydHMgYW5kIG1hbmFnZXMgdGhlIHBpZWNlcyB3ZSBidWlsZCB0byBtYWtlIG9uZSBjb2hlc2l2ZSBnYW1lISBZYXkhXHJcbiAqL1xyXG4vLyBpbXBvcnRzIC0gdGhlc2UgaW5zdGFudGlhdGUgdGhlIGltcG9ydHMgYW5kIHN0b3JlIHRoZW0gYXMgcHJvcGVydGllcyBzbyB3ZSBjYW4gcmVmZXJlbmNlIHRoZWlyIHByb3BlcnRpZXMgaW4gZ2FtZS5qc1xyXG5pbXBvcnQgRGlzcGxheSBmcm9tICcuL2Rpc3BsYXknO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9pbnB1dCc7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xyXG5pbXBvcnQgUm9vbSBmcm9tICcuL3Jvb20nO1xyXG5pbXBvcnQgSW52ZW50b3J5IGZyb20gJy4vaW52ZW50b3J5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xyXG4gIC8vIGNvbnN0cnVjdG9yXHJcbiAgY29uc3RydWN0b3IoZGF0YXBhdGggPSAnJywgcm9vbXMgPSBbXSwgaXRlbXMgPSBbXSwgc3RhcnRSb29tID0gJycsIGVuZFJvb20gPSAnJykge1xyXG4gICAgdGhpcy5EaXNwbGF5ID0gbmV3IERpc3BsYXkoKTtcclxuICAgIHRoaXMuSW5wdXQgPSBuZXcgSW5wdXQoKTtcclxuICAgIHRoaXMuZGF0YXBhdGggPSBkYXRhcGF0aDtcclxuICAgIC8vIGRhdGFwYXRoIGlzIGZvciBhbiBhZGRlZCBjaGFsbGVuZ2UsIEkgY2FuIGxvYWQgaW4gYSBKU09OIGZpbGUgd2l0aCBhIGdhbWUgYnVpbHQgaW50byBpdCA6KSBjaGVjayBpbml0IGZvciBtb3JlXHJcbiAgICB0aGlzLnJvb21zID0gcm9vbXM7IC8vIGFsbCByb29tcyBpbiBnYW1lXHJcbiAgICB0aGlzLnN0YXJ0Um9vbSA9IHN0YXJ0Um9vbTsgLy8gcm9vbSB0aGUgcGxheWVyIHdpbGwgc3RhcnQgaW5cclxuICAgIHRoaXMuZW5kUm9vbSA9IGVuZFJvb207IC8vIHdoaWNoIHJvb20gaXMgdGhlIGdhbWUtZW5kIHJvb21cclxuICAgIHRoaXMuUGxheWVyID0gbmV3IFBsYXllcihzdGFydFJvb20gPSB0aGlzLnN0YXJ0Um9vbSk7XHJcbiAgfVxyXG5cclxuICAvLyBJbml0aWFsaXplcyB0aGUgZ2FtZVxyXG4gIGFzeW5jIGluaXQoKSB7XHJcbiAgICBsZXQgZGlzcGxheVRleHQ7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ0luaXRpYWxpemVkIGdhbWUgZnJvbTogJyArIHRoaXMuZGF0YXBhdGgpO1xyXG4gICAgbGV0IHJvb21zID0gYXdhaXQgdGhpcy5sb2FkRGF0YSh0aGlzLmRhdGFwYXRoKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvb21zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRoaXMuYWRkUm9vbShyb29tc1tpXS5uYW1lLCByb29tc1tpXS5nZXRUZXh0LCByb29tc1tpXS5wcm9tcHRzLCByb29tc1tpXS5yZXF1aXJlbWVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGlmIGdhbWUgd2Fzbid0IGluaXRhbGl6ZWQgd2l0aCBzdGFydFJvb20sIHNldCBpdCB0byB0aGUgZmlyc3Qgcm9vbVxyXG4gICAgaWYgKHRoaXMuc3RhcnRSb29tID09PSAnJyAmJiB0aGlzLnJvb21zLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5zdGFydFJvb20gPSB0aGlzLnJvb21zWzBdLm5hbWU7XHJcbiAgICAgIHRoaXMuUGxheWVyLnN0YXJ0Um9vbSA9IHRoaXMuc3RhcnRSb29tO1xyXG4gICAgICB0aGlzLlBsYXllci5jdXJyZW50Um9vbSA9IHRoaXMuUGxheWVyLnN0YXJ0Um9vbTtcclxuICAgIH1cclxuICAgIC8vIGlmIGdhbWUgd2Fzbid0IGluaXRhbGl6ZWQgd2l0aCBlbmRSb29tLCBzZXQgaXQgdG8gdGhlIGxhc3Qgcm9vbVxyXG4gICAgaWYgKHRoaXMuZW5kUm9vbSA9PT0gJycgJiYgdGhpcy5yb29tcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuZW5kUm9vbSA9IHRoaXMucm9vbXNbdGhpcy5yb29tcy5sZW5ndGggLSAxXS5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGRpc3BsYXkgdGhlIHN0YXJ0Um9vbSB0ZXh0XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm9vbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHRoaXMucm9vbXNbaV0ubmFtZSA9PT0gdGhpcy5zdGFydFJvb20pIHtcclxuICAgICAgICBkaXNwbGF5VGV4dCA9IHRoaXMucm9vbXNbaV0uZ2V0VGV4dDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChkaXNwbGF5VGV4dCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGRpc3BsYXlUZXh0ID0gJ05vIHN0YXJ0aW5nIHJvb20gdGV4dCBmb3VuZCc7XHJcbiAgICB9XHJcbiAgICB0aGlzLkRpc3BsYXkuc2hvdyhkaXNwbGF5VGV4dCk7XHJcbiAgfVxyXG5cclxuICAvLyBtYW5hZ2Ugcm9vbXNcclxuXHJcbiAgLy8gY3JlYXRlIGEgbmV3IFJvb20gb2JqZWN0IGFuZCBwdXNoIGl0IG9udG8gdGhlIGN1cnJlbnQgcm9vbXMgbGlzdFxyXG4gIGFkZFJvb20obmFtZSwgZ2V0VGV4dCwgcHJvbXB0cyA9IFtdLCByZXF1aXJlbWVudHMgPSBbXSkge1xyXG4gICAgbGV0IHJvb21PYmogPSBuZXcgUm9vbShuYW1lLCBnZXRUZXh0LCBwcm9tcHRzLCByZXF1aXJlbWVudHMpO1xyXG5cclxuICAgIHRoaXMucm9vbXMucHVzaChyb29tT2JqKTtcclxuICAgIHJldHVybiByb29tT2JqO1xyXG4gIH1cclxuXHJcbiAgLy8gZmlsdGVyIG91dCBhIHJvb20gYW5kIGdldCByaWQgb2YgaXQgaWYgd2UgZG9uJ3Qgd2FudCBpdCBhbnltb3JlXHJcbiAgZHJvcFJvb20ocm9vbU5hbWUpIHtcclxuICAgIGxldCBuZXdSb29tcyA9IHRoaXMucm9vbXMuZmlsdGVyKGZ1bmN0aW9uIChyb29tKSB7XHJcbiAgICAgIHJldHVybiByb29tLm5hbWUgIT09IHJvb21OYW1lO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5yb29tcyA9IG5ld1Jvb21zO1xyXG4gICAgcmV0dXJuIHRoaXMucm9vbXM7XHJcbiAgfVxyXG5cclxuICAvLyByZXR1cm5zIHJvb20gb2JqZWN0IGdpdmVuIG5hbWVcclxuICBnZXRSb29tKHJvb21OYW1lKSB7XHJcbiAgICAvLyB4ID0+IGlzIGEgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCB3aWxsIHJldHVybiB0aGUgcm9vbSB3aG9zZSBuYW1lIGlzIHRoZSBzYW1lIGFzIHJvb21OYW1lXHJcbiAgICBjb25zdCByb29tID0gdGhpcy5yb29tcy5maW5kKHggPT4geC5uYW1lID09PSByb29tTmFtZSk7XHJcblxyXG4gICAgcmV0dXJuIHJvb207XHJcbiAgfVxyXG5cclxuICAvLyBHYW1lIEFJXHJcbiAgZGVjaWRlUGF0aChtZXNzYWdlKSB7XHJcbiAgICBpZiAobWVzc2FnZSA9PT0gJ3Jlc3RhcnQnKSB7XHJcbiAgICAgIHRoaXMucmVzZXRHYW1lKCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XHJcbiAgICBjb25zdCBjdXJyUm9vbSA9IF90aGlzLmdldFJvb20oX3RoaXMuUGxheWVyLmN1cnJlbnRSb29tKTtcclxuXHJcbiAgICAvLyBEbyB3ZSBoYXZlIGFjdGlvbnMgdGhhdCB3ZSBjYW4gZG8gaW4gdGhlIHJvb20/XHJcbiAgICBpZiAodHlwZW9mIGN1cnJSb29tLnByb21wdHMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAvLyBDaGVjayBldmVyeSBwcm9tcHQgYWN0aW9uIHRvIHNlZSBpZiBpdCBtYXRjaGVzIG91ciBpbnB1dCBrZXl3b3Jkc1xyXG4gICAgICAvLyBGb3Igbm93IGp1c3QgZ2V0IHRoZSBmaXJzdCBtYXRjaGluZyBwcm9tcHQgYW5kIGRvIHRoYXRcclxuICAgICAgbGV0IGZvdW5kUHJvbXB0ID0gZmFsc2U7XHJcblxyXG4gICAgICBjdXJyUm9vbS5wcm9tcHRzLmZvckVhY2goZnVuY3Rpb24gKHByb21wdCkge1xyXG4gICAgICAgIGlmIChmb3VuZFByb21wdCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgIGNvbnN0IG1hdGNoaW5nUHJvbXB0UmVzdWx0cyA9IHByb21wdC5tYXRjaEtleXdvcmRzKG1lc3NhZ2UsIF90aGlzLlBsYXllci5pbnZlbnRvcnkuaXRlbXMpO1xyXG5cclxuICAgICAgICAgIC8vIElmIHdlIGdldCBhIG1hdGNoaW5nIHJlc3VsdCBiYWNrXHJcbiAgICAgICAgICBpZiAobWF0Y2hpbmdQcm9tcHRSZXN1bHRzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIC8vIFRoaXMgcHJvbXB0IGhhcyBrZXl3b3JkcyB0aGF0IG1hdGNoIHRoZSB1c2VyJ3MgaW5wdXRcclxuICAgICAgICAgICAgZm91bmRQcm9tcHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBJZiBwbGF5ZXIgc3VjY2VlZGVkIGluIHByb21wdCBhY3Rpb25cclxuICAgICAgICAgICAgaWYgKCdzdWNjZXNzJyBpbiBtYXRjaGluZ1Byb21wdFJlc3VsdHMpIHtcclxuICAgICAgICAgICAgICBfdGhpcy5EaXNwbGF5LnNob3coYDxwPiR7bWF0Y2hpbmdQcm9tcHRSZXN1bHRzLnN1Y2Nlc3Muc3VjY2Vzc1RleHR9PC9wPmApO1xyXG4gICAgICAgICAgICAgIC8vIEdldCBpdGVtcyBmcm9tIHByb21wdCBpZiBhbnkgYXJlIHJldHVybmVkIGFuZCBhZGQgdGhlbSB0byBpbnZlbnRvcnlcclxuICAgICAgICAgICAgICBpZiAobWF0Y2hpbmdQcm9tcHRSZXN1bHRzLnN1Y2Nlc3MuaXRlbXNHaXZlbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5QbGF5ZXIuaW52ZW50b3J5LmFkZEl0ZW1zKG1hdGNoaW5nUHJvbXB0UmVzdWx0cy5zdWNjZXNzLml0ZW1zR2l2ZW4pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvLyBJZiB0aGUgcHJvbXB0IHN1Y2Nlc3MgcmVzdWx0IGluY2x1ZGVzIGVudGVyaW5nIGEgbmV3IHJvb20uLlxyXG4gICAgICAgICAgICAgIGlmIChtYXRjaGluZ1Byb21wdFJlc3VsdHMuc3VjY2Vzcy5yb29tVG9FbnRlciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZW50ZXJSb29tUmVzdWx0U3VjY2VzcztcclxuICAgICAgICAgICAgICAgIGxldCBlbnRlclJvb21SZXN1bHRUZXh0O1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiBwbGF5ZXIgY2FuIHN1Y2Nlc3NmdWxseSBlbnRlciB0aGUgcm9vbSAoZ2l2ZW4gdGhlIGludmVudG9yeSAvIHJvb20gcmVxdWlyZW1lbnRzKVxyXG4gICAgICAgICAgICAgICAgW2VudGVyUm9vbVJlc3VsdFRleHQsIGVudGVyUm9vbVJlc3VsdFN1Y2Nlc3NdID1cclxuICAgICAgICAgICAgICAgICAgX3RoaXMuUGxheWVyLmVudGVyUm9vbShfdGhpcy5nZXRSb29tKG1hdGNoaW5nUHJvbXB0UmVzdWx0cy5zdWNjZXNzLnJvb21Ub0VudGVyKSk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5EaXNwbGF5LmFwcGVuZChgPHA+JHtlbnRlclJvb21SZXN1bHRUZXh0fTwvcD5gKTtcclxuICAgICAgICAgICAgICAgIGlmIChlbnRlclJvb21SZXN1bHRTdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiBwbGF5ZXIgZW50ZXJlZCB3aW5uaW5nIHJvb21cclxuICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoaW5nUHJvbXB0UmVzdWx0cy5zdWNjZXNzLnJvb21Ub0VudGVyID09PSBfdGhpcy5lbmRSb29tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMud2luKCk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIFBsYXllciBjb3VsZCBub3QgZW50ZXIgcm9vbSAobWlzc2luZyByZXF1aXJlZCBpdGVtcyBpbiBpbnZlbnRvcnkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFBsYXllciBmYWlsZWQgdG8gZG8gcHJvbXB0IChtaXNzaW5nIGl0ZW0gcmVxdWlyZW1lbnQpXHJcbiAgICAgICAgICAgIGlmICgnZmFpbCcgaW4gbWF0Y2hpbmdQcm9tcHRSZXN1bHRzKSB7XHJcbiAgICAgICAgICAgICAgX3RoaXMuRGlzcGxheS5zaG93KGAke21hdGNoaW5nUHJvbXB0UmVzdWx0cy5mYWlsLmZhaWxUZXh0fWApO1xyXG4gICAgICAgICAgICAgIF90aGlzLkRpc3BsYXkuYXBwZW5kKGA8cD5NaXNzaW5nIHJlcXVpcmVkIGl0ZW1zOiAke21hdGNoaW5nUHJvbXB0UmVzdWx0cy5mYWlsLm1pc3NpbmcudG9TdHJpbmcoKX0uXHJcbiAgICAgICAgICAgICAgPC9wPjxwPiR7X3RoaXMuZ2V0Um9vbShfdGhpcy5QbGF5ZXIuY3VycmVudFJvb20pLmdldFRleHR9PC9wPmApO1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZm91bmRQcm9tcHQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAvLyBQbGF5ZXIgZGlkbid0IHNheSBhbnkga2V5d29yZHMgdGhhdCB0cmlnZ2VyZWQgYW55IG9mIHRoZSBjdXJyZW50IHJvb20gcHJvbXB0c1xyXG4gICAgICAgICAgX3RoaXMuRGlzcGxheS5zaG93KGA8cD5ObyBhY3Rpb25zIGNvdWxkIGJlIGRvbmUgZnJvbTogXCIke21lc3NhZ2V9XCIuIFRyeSBzb21ldGhpbmcgZWxzZSwgb3IgYmUgbW9yZSBcclxuICAgICAgICAgIHNwZWNpZmljIGFib3V0IHdoYXQgeW91J3JlIGRvaW5nLjwvcD48cD4ke190aGlzLmdldFJvb20oX3RoaXMuUGxheWVyLmN1cnJlbnRSb29tKS5nZXRUZXh0fTwvcD5gKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gTm8gcHJvbXB0cyBleGlzdCBmb3IgdGhlIGN1cnJlbnQgcm9vbVxyXG4gICAgICBfdGhpcy5EaXNwbGF5LnNob3coYDxwPlRoZXJlIGRvZXNuJ3Qgc2VlbSB0byBiZSBhbnkgYWN0aW9ucyBhdCBhbGwgdGhhdCB5b3UgY2FuIGRvIGluIHRoaXMgcm9vbS48L3A+XHJcbiAgICAgICR7X3RoaXMuZ2V0Um9vbShfdGhpcy5QbGF5ZXIuY3VycmVudFJvb20pLmdldFRleHR9YCk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlLCB0aGlzLlBsYXllcik7XHJcbiAgfVxyXG5cclxuICAvLyBHcmFiIHRoZSBtZXNzYWdlIGZyb20gdGhlIHVzZXIgYW5kIHJ1biBJbnB1dC5zZW5kIG9uIGl0XHJcbiAgdXNlclNlbmQobWVzc2FnZSkge1xyXG4gICAgLy8gT3VyIElucHV0IGNsYXNzIHdpbGwgaGFuZGxlIGNsZWFuaW5nIC8gbm9ybWFsaXppbmcgc3RyaW5nc1xyXG4gICAgdGhpcy5JbnB1dC5zZW5kKG1lc3NhZ2UpO1xyXG4gICAgdGhpcy5kZWNpZGVQYXRoKHRoaXMuSW5wdXQudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLy8ganVzdCBtYWtlcyBpdCBlYXNpZXIvbW9yZSByZWFkYWJsZSB0byBkaXNhYmxlIGlucHV0XHJcbiAgZGlzYWJsZUlucHV0KCkge1xyXG4gICAgdGhpcy5JbnB1dC5kaXNhYmxlKCk7XHJcbiAgfVxyXG5cclxuICAvLyBqdXN0IG1ha2VzIGl0IGVhc2llci9tb3JlIHJlYWRhYmxlIHRvIGVuYWJsZSBpbnB1dFxyXG4gIGVuYWJsZUlucHV0KCkge1xyXG4gICAgdGhpcy5JbnB1dC5lbmFibGUoKTtcclxuICB9XHJcblxyXG4gIC8vIHBsYXllciB3aW5zXHJcbiAgd2luKCkge1xyXG4gICAgLy8gc2hvdyB3aW4gdGV4dFxyXG4gICAgdGhpcy5EaXNwbGF5LmFwcGVuZCgnPHA+WU9VIFdJTiE8L3A+Jyk7XHJcblxyXG4gICAgLy8gZGlzYWJsZSBtb3JlIGlucHV0IGFmdGVyIHdpbm5pbmdcclxuICAgIHRoaXMuZGlzYWJsZUlucHV0KCk7XHJcbiAgfVxyXG5cclxuICAvLyBQbGF5ZXIgcmVzZXRzIGdhbWVcclxuICByZXNldEdhbWUoKSB7XHJcbiAgICAvLyByZXNldHMgcGxheWVyIHdpdGggYmxhbmsgaW52ZW50b3J5IGFuZCBiYWNrIGluIHN0YXJ0aW5nIHJvb21cclxuICAgIHRoaXMuUGxheWVyLmludmVudG9yeSA9IG5ldyBJbnZlbnRvcnkoKTtcclxuICAgIHRoaXMuUGxheWVyLmN1cnJlbnRSb29tID0gdGhpcy5zdGFydFJvb207XHJcbiAgICBjb25zdCByb29tID0gdGhpcy5nZXRSb29tKHRoaXMuc3RhcnRSb29tKTtcclxuXHJcbiAgICB0aGlzLkRpc3BsYXkuc2hvdyhyb29tLmdldFRleHQpO1xyXG4gICAgdGhpcy5JbnB1dC5lbmFibGUoKTtcclxuICB9XHJcblxyXG4gIC8vIGxvYWQgZnJvbSBqc29uIGZpbGVcclxuICBhc3luYyBsb2FkRGF0YShmaWxlcGF0aCkge1xyXG4gICAgbGV0IHJvb21zID0gW107XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChmaWxlcGF0aCk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5yb29tcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICByb29tcy5wdXNoKGRhdGEucm9vbXNbaV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJvb21zO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xyXG5cclxuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnYW1lO1xyXG4iLCIvKlxyXG5pbnB1dC5qc1xyXG5TaG93cyB0ZXh0LCBhbGxvd3MgZm9yIGlucHV0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCB7XHJcbiAgLy8gY29uc3RydWN0b3JcclxuICBjb25zdHJ1Y3RvcihkaXNhYmxlZCA9IGZhbHNlLCB2YWx1ZSA9ICcnLCBlbGVtZW50SWQgPSAnaW5wdXQnKSB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLmVsZW1lbnRJZCA9IGVsZW1lbnRJZDtcclxuICB9XHJcblxyXG4gIC8vIGVuYWJsZXMgaW5wdXQgYW5kIGRvZXMgdGhlIHNhbWUgaW4gdGhlIEhUTUxcclxuICBlbmFibGUoKSB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQnKS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLy8gZGlzYWJsZXMgaW5wdXQgYW5kIGRvZXMgdGhlIHNhbWUgaW4gdGhlIEhUTUxcclxuICBkaXNhYmxlKCkge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQnKS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICAvLyBzZW5kcyBjbGllbnQgaW5wdXQgdG8gYmUgZXZhbHVhdGVkXHJcbiAgc2VuZCh2YWx1ZSkge1xyXG4gICAgLy8gbm9ybWFsaXplIGlucHV0IHZhbHVlc1xyXG4gICAgdmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbnZlbnRvcnkge1xyXG4gIC8vIGNvbnN0cnVjdG9yXHJcbiAgY29uc3RydWN0b3IoaXRlbXMgPSBbXSkge1xyXG4gICAgdGhpcy5pdGVtcyA9IGl0ZW1zO1xyXG4gIH1cclxuXHJcbiAgLy8gY2FuIGFkZCBzaW5nbGUgb3IgbXVsdGlwbGUgaXRlbXM7IHBhcmFtZXRlciBwYXNzZWQgaW4gc2hvdWxkIGJlIGFuIGFycmF5XHJcbiAgYWRkSXRlbXMoaXRlbXMpIHtcclxuICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1zLmNvbmNhdChpdGVtcyk7XHJcbiAgICByZXR1cm4gdGhpcy5pdGVtcztcclxuICB9XHJcblxyXG4gIC8vIGRyb3AgYW4gaXRlbSBieSBmaWx0ZXJpbmcgb3V0IHRoZSBpdGVtIG5hbWUgdGhhdCB3ZSB3YW50IHRvIGRyb3AgYW5kIHJldHVybmluZyB0aGUgaW52ZW50b3J5IHdpdGhvdXQgaXRcclxuICBkcm9wSXRlbShpdGVtTmFtZSkge1xyXG4gICAgbGV0IG5ld0ludmVudG9yeSA9IHRoaXMuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgIHJldHVybiBpdGVtLm5hbWUgIT09IGl0ZW1OYW1lO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5pdGVtcyA9IG5ld0ludmVudG9yeTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5pdGVtcztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IEludmVudG9yeSBmcm9tICcuL2ludmVudG9yeSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xyXG4gIC8vIGNvbnN0cnVjdG9yXHJcbiAgY29uc3RydWN0b3IobmFtZSA9ICcnLCBpbnZlbnRvcnkgPSBuZXcgSW52ZW50b3J5KCksIGN1cnJlbnRSb29tID0gJycsIHN0YXJ0Um9vbSkge1xyXG4gICAgLy8gaWYgbmFtZSBpcyBnaXZlbiwgc2V0IGl0OyBpZiBub3QsIHNldCBuYW1lIHRvICdwbGF5ZXInXHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgaWYgKHRoaXMubmFtZSA9PT0gJycpIHtcclxuICAgICAgdGhpcy5uYW1lID0gJ3BsYXllcic7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pbnZlbnRvcnkgPSBpbnZlbnRvcnk7XHJcblxyXG4gICAgLy8gaWYgY3VycmVudFJvb20gaXMgYmxhbmssIHNldCBpdCB0byBzdGFydFJvb21cclxuICAgIGlmICh0aGlzLmN1cnJlbnRSb29tID09PSAnJykge1xyXG4gICAgICB0aGlzLmN1cnJlbnRSb29tID0gdGhpcy5zdGFydFJvb207XHJcbiAgICB9XHJcbiAgICB0aGlzLnN0YXJ0Um9vbSA9IHN0YXJ0Um9vbTtcclxuICB9XHJcblxyXG4gIC8vIGVudGVyIHJvb21cclxuICBlbnRlclJvb20ocm9vbSkge1xyXG4gICAgLy8gYXNzaWducyB0aGUgdmFsdWUgb2Ygcm9vbS5lbnRlciAocGFzcywgZmFpbCwgZXRjLikgdG8gcm9vbVJlc3VsdCAtIHRoYXQgbG9naWMgaXMgaW4gUm9vbVxyXG4gICAgY29uc3Qgcm9vbVJlc3VsdCA9IHJvb20uZW50ZXIodGhpcy5pbnZlbnRvcnkuaXRlbXMpO1xyXG5cclxuICAgIC8vIHJvb21SZXN1bHRbMV0gaXMgdGhlIG1ldEFsbFJlcXVpcmVtZW50cyBib29sIGluIHJvb20uanM7IGlmIGl0J3MgZmFsc2UsIHdlbGwsIHllYWgsIGl0J3MgZmFsc2VcclxuICAgIGlmIChyb29tUmVzdWx0WzFdID09PSBmYWxzZSkge1xyXG4gICAgICAvLyBwbGF5ZXIgZGlkbid0IGhhdmUgdGhlIHJlcXVpcmVkIGl0ZW1zIHRvIGVudGVyIHRoZSByb29tXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBlbnRlcmVkIHJvb21cclxuICAgICAgdGhpcy5jdXJyZW50Um9vbSA9IHJvb20ubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZXR1cm4gcmVzdWx0cyB0ZXh0IGFuZCB3aGV0aGVyIG9yIG5vdCB0aGUgcGxheWVyIHN1Y2Nlc3NmdWxseSBlbnRlcmVkIHRoZSByb29tXHJcbiAgICByZXR1cm4gW3Jvb21SZXN1bHRbMF0sIHJvb21SZXN1bHRbMV1dO1xyXG4gIH1cclxuXHJcbiAgLy8gdGhlIGxvZ2ljIGZvciBnZXRJdGVtIGFuZCBkcm9wSXRlbSBpcyBpbiBpbnZlbnRvcnkuanNcclxuICBnZXRJdGVtKGl0ZW0pIHtcclxuICAgIHRoaXMuaW52ZW50b3J5LmFkZEl0ZW0oaXRlbSk7XHJcbiAgICByZXR1cm4gdGhpcy5pbnZlbnRvcnk7XHJcbiAgfVxyXG5cclxuICBkcm9wSXRlbShpdGVtKSB7XHJcbiAgICB0aGlzLmludmVudG9yeS5kcm9wSXRlbShpdGVtKTtcclxuICAgIHJldHVybiB0aGlzLmludmVudG9yeTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvbXB0IHtcclxuICAvLyBjb25zdHJ1Y3RvclxyXG4gIGNvbnN0cnVjdG9yKG5hbWUgPSAnJywga2V5d29yZHMgPSBbXSwgcmVzdWx0cyA9IHt9LCByZXF1aXJlbWVudHMgPSBbXSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIC8vIEtleXdvcmRzIHRoYXQgY2FuIHRyaWdnZXIgdGhlIHByb21wdCAobWFrZSBhbGwgbG93ZXItY2FzZSBieSBkZWZhdWx0KVxyXG4gICAgdGhpcy5rZXl3b3JkcyA9IGtleXdvcmRzLm1hcChmdW5jdGlvbiAodikgeyByZXR1cm4gdi50b0xvd2VyQ2FzZSgpO30pO1xyXG4gICAgLy8gUmVzdWx0cyB0aGF0IG9jY3VyIHdoZW4gdGhpcyBwcm9tcHQgaXMgc3VjY2Vzc2Z1bGx5IHRyaWdnZXJlZDtcclxuICAgIC8vIHRoZSByZXN1bHQga2V5cyBjb21wcmlzZSBvZiDigJxzdWNjZXNzVGV4dOKAnSAocmVxdWlyZWQpLCBcImZhaWxUZXh0XCIgKG9wdGlvbmFsKSxcclxuICAgIC8vIOKAnGl0ZW1zUmVxdWlyZWTigJ0gKG9wdGlvbmFsKSwgYW5kIOKAnHJvb21Ub0VudGVy4oCdIChvcHRpb25hbClcclxuICAgIHRoaXMucmVzdWx0cyA9IHJlc3VsdHM7XHJcbiAgICAvLyBBbnkgcHJlcmVxdWlzaXRlIGl0ZW1zIG5lZWRlZCB0byBkbyB0aGUgcHJvbXB0P1xyXG4gICAgdGhpcy5yZXF1aXJlbWVudHMgPSByZXF1aXJlbWVudHM7XHJcbiAgfVxyXG5cclxuICAvLyBDaGVjayBpZiBpbnB1dCBtZXNzYWdlIG1hdGNoZXMgYW55IHByb21wdCBrZXl3b3JkcyBhbmQgcmV0dXJuIHJlc3VsdHNcclxuICBtYXRjaEtleXdvcmRzKG1lc3NhZ2UsIGl0ZW1zID0gW10pIHtcclxuICAgIGxldCBmb3VuZEtleXdvcmQgPSBmYWxzZTtcclxuICAgIGxldCBtaXNzaW5nUmVxdWlyZW1lbnRzID0gW107XHJcblxyXG4gICAgLy8gSWYgd2UgaGF2ZSBhbnkgaXRlbSByZXF1aXJlbWVudHNcclxuICAgIGlmICh0aGlzLnJlcXVpcmVtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIC8vIENoZWNrIGFsbCB0aGUgcmVxdWlyZW1lbnRzIGFnYWluc3QgdGhlIGl0ZW1zIHBhc3NlZFxyXG4gICAgICB0aGlzLnJlcXVpcmVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXF1aXJlbWVudCkge1xyXG4gICAgICAgIGxldCBmb3VuZFJlcXVpcmVtZW50ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgIGlmIChpdGVtID09PSByZXF1aXJlbWVudCkge1xyXG4gICAgICAgICAgICBmb3VuZFJlcXVpcmVtZW50ID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBJZiBhIHJlcXVpcmVtZW50IGlzbid0IGZvdW5kIGFkZCB0aGF0IGEgbGlzdFxyXG4gICAgICAgIGlmICghZm91bmRSZXF1aXJlbWVudCkge1xyXG4gICAgICAgICAgbWlzc2luZ1JlcXVpcmVtZW50cy5wdXNoKHJlcXVpcmVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gT25jZSB3ZSBjaGVjayB0byBzZWUgaWYgdGhlIHBsYXllcidzIG1pc3NpbmcgYW55IGl0ZW1zLFxyXG4gICAgLy8gcGFyc2UgdGhlIGlucHV0IGZvciBtYXRjaGluZyBrZXl3b3JkcyB0byB0aGUgcHJvbXB0XHJcbiAgICB0aGlzLmtleXdvcmRzLmZvckVhY2goZnVuY3Rpb24gKGtleXdvcmQpIHtcclxuICAgICAgaWYgKG1lc3NhZ2UuaW5jbHVkZXMoa2V5d29yZC50b0xvd2VyQ2FzZSgpKSkge1xyXG4gICAgICAgIGZvdW5kS2V5d29yZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gSWYgYW55IGtleXdvcmRzIGhhdmUgYmVlbiBtYXRjaGVkIGZyb20gdGhlIHVzZXIgaW5wdXRcclxuICAgIGlmIChmb3VuZEtleXdvcmQpIHtcclxuICAgICAgLy8gSWYgdGhlcmUgYXJlIGFueSBtaXNzaW5nIGl0ZW0gcmVxdWlyZW1lbnRzXHJcbiAgICAgIGlmIChtaXNzaW5nUmVxdWlyZW1lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAvLyBQcm9tcHQgZmFpbHM7IHJldHVybiBtaXNzaW5nIGl0ZW1zIGFuZCBmYWlsVGV4dFxyXG4gICAgICAgIHJldHVybiB7J2ZhaWwnOiB7XHJcbiAgICAgICAgICAnbWlzc2luZyc6IG1pc3NpbmdSZXF1aXJlbWVudHMsXHJcbiAgICAgICAgICAnZmFpbFRleHQnOiB0aGlzLnJlc3VsdHMuZmFpbFRleHR9XHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICAvLyBQcm9tcHQgc3VjY2VlZHM7IHJldHVybiByZXN1bHRzIG9mIHRoZSBwcm9tcHRcclxuICAgICAgcmV0dXJuIHsnc3VjY2Vzcyc6IHRoaXMucmVzdWx0c307XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFByb21wdCBmcm9tICcuL3Byb21wdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb29tIHtcclxuICAvLyBjb25zdHJ1Y3RvclxyXG4gIC8vIGFjY2VwdHMgYSBzdHJpbmcgcm9vbSBuYW1lLCBzdHJpbmcgb2YgdGV4dCwgYW4gYXJyYXkgb2YgcmVxcyB0byBlbnRlciB0aGUgcm9vbSwgYW5kIGEgbGlzdCBvZiBhY2NlcHRhYmxlIHByb21wdHNcclxuICBjb25zdHJ1Y3RvcihuYW1lID0gJycsIGdldFRleHQgPSAnJywgcmVxdWlyZW1lbnRzID0gW10sIHByb21wdHMgPSB7fSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuZ2V0VGV4dCA9IGdldFRleHQ7XHJcbiAgICB0aGlzLnJlcXVpcmVtZW50cyA9IHJlcXVpcmVtZW50cztcclxuICAgIHRoaXMucHJvbXB0cyA9IHByb21wdHM7XHJcbiAgfVxyXG5cclxuICAvLyBhZGQgYSBuZXcgcHJvbXB0L2ludGVyYWN0aW9uIHRvIGEgcm9vbVxyXG4gIGFkZFByb21wdChuYW1lLCBrZXl3b3JkcywgcmVzdWx0cywgcmVxdWlyZW1lbnRzKSB7XHJcbiAgICAvLyBjcmVhdGUgYSBuZXcgcHJvbXB0IGFuZCBhc3NpZ24gaXQgdG8gdGhlIGNvbnN0IHByb21wdFxyXG4gICAgY29uc3QgcHJvbXB0ID0gbmV3IFByb21wdChuYW1lLCBrZXl3b3JkcywgcmVzdWx0cywgcmVxdWlyZW1lbnRzKTtcclxuXHJcbiAgICAvLyBwdXNoIHRoZSBwcm9tcHQgb250byB0aGUgcm9vbSdzIGxpc3Qgb2YgcHJvbXB0c1xyXG4gICAgdGhpcy5wcm9tcHRzLnB1c2gocHJvbXB0KTtcclxuXHJcbiAgICAvLyByZXR1cm4gdGhlIG5ldyBsaXN0IG9mIHJvb20gcHJvbXB0c1xyXG4gICAgcmV0dXJuIHRoaXMucHJvbXB0cztcclxuICB9XHJcblxyXG4gIC8vIGVudGVyIGEgcm9vbVxyXG4gIGVudGVyKGl0ZW1zID0gW10pIHtcclxuICAgIGxldCByZXN1bHRUZXh0ID0gJyc7XHJcbiAgICBsZXQgbWV0QWxsUmVxdWlyZW1lbnRzID0gdHJ1ZTsgLy8gc2V0IHRvIHRydWUgdW50aWwgd2UgZmluZCB0aGF0IGl0J3Mgbm90XHJcblxyXG4gICAgLy8gVGhlIHJvb20gaXMgbm90IGFjY2Vzc2libGUgYnkgZGVmYXVsdCBpZiB3ZSBoYXZlIG1vcmUgdGhhbiBvbmUgcmVxdWlyZW1lbnQgKGl0ZW0pXHJcbiAgICBpZiAodGhpcy5yZXF1aXJlbWVudHMgPiAwKSB7XHJcbiAgICAgIC8vIGlmIHlvdSBkb24ndCBoYXZlIGVub3VnaCBpdGVtcywgZG9uJ3QgYWxsb3cgZW50cnkgcmlnaHQgb2ZmIHRoZSBiYXRcclxuICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIG1ldEFsbFJlcXVpcmVtZW50cyA9IGZhbHNlO1xyXG4gICAgICAgIC8vIEFkZCBtaXNzaW5nIHJlcXVpcmVtZW50IG1lc3NhZ2VzXHJcbiAgICAgICAgdGhpcy5yZXF1aXJlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAocmVxdWlyZW1lbnQpIHtcclxuICAgICAgICAgIHJlc3VsdFRleHQgKz0gYCR7cmVxdWlyZW1lbnQuZmFpbFRleHR9LiBgO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGNoZWNrIHRoZSByZXF1aXJlbWVudHMgdG8gc2VlIGlmIHlvdSd2ZSBmb3VuZCB0aGVtIGFsbFxyXG4gICAgICAgIHRoaXMucmVxdWlyZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKHJlcXVpcmVtZW50KSB7XHJcbiAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAvLyBjaGVjayBhbGwgdXNlciBpdGVtczsgaWYgaXQncyBhIHJlcXVpcmVtZW50LCBzZXQgZm91bmQgdG8gdHJ1ZSBmb3IgdGhhdCBpdGVtXHJcbiAgICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0gPT09IHJlcXVpcmVtZW50KSB7XHJcbiAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAvLyBpZiBmb3VuZCBpcyBmYWxzZSwgeW91J3JlIG1pc3NpbmcgYXQgbGVhc3Qgb25lIHJlcXVpcmVtZW50IC0gc2F5IHNvXHJcbiAgICAgICAgICBpZiAoZm91bmQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIG1ldEFsbFJlcXVpcmVtZW50cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXN1bHRUZXh0ICs9IHJlcXVpcmVtZW50LmZhaWxUZXh0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBpZiBhbGwgaXRlbXMgd2VyZSBmb3VuZCwgZW50ZXIgdGhlIHJvb20gYW5kIHNob3cgdGhlIHJvb20gdGV4dFxyXG4gICAgICAgIGlmIChtZXRBbGxSZXF1aXJlbWVudHMgPT09IHRydWUpIHtcclxuICAgICAgICAgIHJlc3VsdFRleHQgPSB0aGlzLmdldFRleHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBpZiB0aGVyZSBhcmVuJ3QgYW55IGl0ZW1zIHJlcXVpcmVkIHRvIGVudGVyIHRoZSByb29tLCBqdXN0IHNob3cgdGhlIHJvb20gdGV4dFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzdWx0VGV4dCA9IHRoaXMuZ2V0VGV4dDtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZXR1cm4gcmVzdWx0IHRleHQsIHdoYXRldmVyIGl0IHdvdW5kIHVwIGJlaW5nXHJcbiAgICByZXR1cm4gW3Jlc3VsdFRleHQsIG1ldEFsbFJlcXVpcmVtZW50c107XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=