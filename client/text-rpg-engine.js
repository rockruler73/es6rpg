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
      document.getElementById(this.elementId).innerHTML += html;
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
                    if (matchingPromptResults.success.roomToEnter === _this.endRoom) {// _this.win();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3RleHQtcnBnLWVuZ2luZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGV4dC1ycGctZW5naW5lLy4vc3JjL2lucHV0LmpzIiwid2VicGFjazovL3RleHQtcnBnLWVuZ2luZS8uL3NyYy9pbnZlbnRvcnkuanMiLCJ3ZWJwYWNrOi8vdGV4dC1ycGctZW5naW5lLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUvLi9zcmMvcHJvbXB0LmpzIiwid2VicGFjazovL3RleHQtcnBnLWVuZ2luZS8uL3NyYy9yb29tLmpzIl0sIm5hbWVzIjpbIkRpc3BsYXkiLCJodG1sIiwiZWxlbWVudElkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsIkdhbWUiLCJkYXRhcGF0aCIsInJvb21zIiwiaXRlbXMiLCJzdGFydFJvb20iLCJlbmRSb29tIiwiSW5wdXQiLCJQbGF5ZXIiLCJsb2FkRGF0YSIsImkiLCJsZW5ndGgiLCJhZGRSb29tIiwibmFtZSIsImdldFRleHQiLCJqIiwicHJvbXB0cyIsImtleXdvcmRzIiwicmVzdWx0cyIsInJlcXVpcmVtZW50cyIsImFkZFByb21wdCIsImN1cnJlbnRSb29tIiwiZGlzcGxheVRleHQiLCJ1bmRlZmluZWQiLCJzaG93Iiwicm9vbU9iaiIsInB1c2giLCJyb29tTmFtZSIsIm5ld1Jvb21zIiwiZmlsdGVyIiwicm9vbSIsImZpbmQiLCJ4IiwibWVzc2FnZSIsInJlc2V0R2FtZSIsIl90aGlzIiwiY3VyclJvb20iLCJnZXRSb29tIiwiZm91bmRQcm9tcHQiLCJmb3JFYWNoIiwicHJvbXB0IiwibWF0Y2hpbmdQcm9tcHRSZXN1bHRzIiwibWF0Y2hLZXl3b3JkcyIsImludmVudG9yeSIsInN1Y2Nlc3MiLCJzdWNjZXNzVGV4dCIsIml0ZW1zR2l2ZW4iLCJhZGRJdGVtcyIsInJvb21Ub0VudGVyIiwiZW50ZXJSb29tUmVzdWx0U3VjY2VzcyIsImVudGVyUm9vbVJlc3VsdFRleHQiLCJlbnRlclJvb20iLCJhcHBlbmQiLCJmYWlsIiwiZmFpbFRleHQiLCJtaXNzaW5nIiwidG9TdHJpbmciLCJzZW5kIiwiZGVjaWRlUGF0aCIsInZhbHVlIiwiZGlzYWJsZSIsImVuYWJsZSIsImRpc2FibGVJbnB1dCIsImZpbGVwYXRoIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiZ2FtZSIsImRpc2FibGVkIiwidG9Mb3dlckNhc2UiLCJJbnZlbnRvcnkiLCJjb25jYXQiLCJpdGVtTmFtZSIsIm5ld0ludmVudG9yeSIsIml0ZW0iLCJyb29tUmVzdWx0IiwiZW50ZXIiLCJhZGRJdGVtIiwiZHJvcEl0ZW0iLCJQcm9tcHQiLCJtYXAiLCJ2IiwiZm91bmRLZXl3b3JkIiwibWlzc2luZ1JlcXVpcmVtZW50cyIsInJlcXVpcmVtZW50IiwiZm91bmRSZXF1aXJlbWVudCIsImtleXdvcmQiLCJpbmNsdWRlcyIsIlJvb20iLCJyZXN1bHRUZXh0IiwibWV0QWxsUmVxdWlyZW1lbnRzIiwiZm91bmQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdD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QUFHLElBQVI7QUFDRDtBQUNGLGFBSkQsRUFKK0MsQ0FVL0M7O0FBQ0EsZ0JBQUlBLEtBQUssS0FBSyxLQUFkLEVBQXFCO0FBQ25CRCxnQ0FBa0IsR0FBRyxLQUFyQjtBQUNBRCx3QkFBVSxJQUFJTCxXQUFXLENBQUMvQixRQUExQjtBQUNEO0FBQ0YsV0FmRCxFQUZLLENBbUJMOztBQUNBLGNBQUlxQyxrQkFBa0IsS0FBSyxJQUEzQixFQUFpQztBQUMvQkQsc0JBQVUsR0FBRyxLQUFLNUUsT0FBbEI7QUFDRDtBQUNGLFNBL0J3QixDQWlDekI7O0FBQ0QsT0FsQ0QsTUFrQ087QUFDTDRFLGtCQUFVLEdBQUcsS0FBSzVFLE9BQWxCO0FBQ0QsT0F6Q2UsQ0EyQ2hCOzs7QUFDQSxhQUFPLENBQUM0RSxVQUFELEVBQWFDLGtCQUFiLENBQVA7QUFDRCIsImZpbGUiOiJ0ZXh0LXJwZy1lbmdpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcInRleHQtcnBnLWVuZ2luZVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ0ZXh0LXJwZy1lbmdpbmVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1widGV4dC1ycGctZW5naW5lXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLypcclxuZGlzcGxheS5qc1xyXG5TaG93cy9hcHBlbmRzIHRleHQgdG8gdGhlIHNpdGVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3BsYXkge1xyXG4gIC8vIGNvbnN0cnVjdG9yXHJcbiAgY29uc3RydWN0b3IoaHRtbCA9ICcnLCBlbGVtZW50SWQgPSAnZGlzcGxheScpIHtcclxuICAgIHRoaXMuaHRtbCA9IGh0bWw7XHJcbiAgICB0aGlzLmVsZW1lbnRJZCA9IGVsZW1lbnRJZDtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgc2hvd3MgZ2l2ZW4gSFRNTFxyXG4gIGlmIG5vIEhUTUwgaXMgZ2l2ZW4sIGRpc3BsYXkgdGhlIEhUTUwgdGhhdCdzIGluIHRoaXMgb2JqZWN0J3MgaHRtbCBwcm9wZXJ0eSBhbHJlYWR5XHJcbiAgb3RoZXJ3aXNlLCBzZXQgYm90aCB0aGUgZWxlbWVudCdzIGlubmVyIEhUTUwgYW5kIHRoZSBvYmplY3QncyBwcm9wZXJ0eSB0byB0aGUgZ2l2ZW4gaHRtbFxyXG4gICovXHJcbiAgc2hvdyhodG1sID0gbnVsbCkge1xyXG4gICAgaWYgKGh0bWwgPT09IG51bGwpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpLmlubmVySFRNTCA9IHRoaXMuaHRtbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgICB0aGlzLmh0bWwgPSBodG1sO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gYXBwZW5kIEhUTUwgdG8gZGlzcGxheSBzY3JlZW5cclxuICBhcHBlbmQoaHRtbCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpLmlubmVySFRNTCArPSBodG1sO1xyXG4gIH1cclxufVxyXG4iLCIvKlxyXG5nYW1lLmpzXHJcbmltcG9ydHMgYW5kIG1hbmFnZXMgdGhlIHBpZWNlcyB3ZSBidWlsZCB0byBtYWtlIG9uZSBjb2hlc2l2ZSBnYW1lISBZYXkhXHJcbiAqL1xyXG4vLyBpbXBvcnRzIC0gdGhlc2UgaW5zdGFudGlhdGUgdGhlIGltcG9ydHMgYW5kIHN0b3JlIHRoZW0gYXMgcHJvcGVydGllcyBzbyB3ZSBjYW4gcmVmZXJlbmNlIHRoZWlyIHByb3BlcnRpZXMgaW4gZ2FtZS5qc1xyXG5pbXBvcnQgRGlzcGxheSBmcm9tICcuL2Rpc3BsYXknO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9pbnB1dCc7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xyXG5pbXBvcnQgUm9vbSBmcm9tICcuL3Jvb20nO1xyXG5pbXBvcnQgSW52ZW50b3J5IGZyb20gJy4vaW52ZW50b3J5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xyXG4gIC8vIGNvbnN0cnVjdG9yXHJcbiAgY29uc3RydWN0b3IoZGF0YXBhdGggPSAnJywgcm9vbXMgPSBbXSwgaXRlbXMgPSBbXSwgc3RhcnRSb29tID0gJycsIGVuZFJvb20gPSAnJykge1xyXG4gICAgdGhpcy5EaXNwbGF5ID0gbmV3IERpc3BsYXkoKTtcclxuICAgIHRoaXMuSW5wdXQgPSBuZXcgSW5wdXQoKTtcclxuICAgIHRoaXMuZGF0YXBhdGggPSBkYXRhcGF0aDtcclxuICAgIC8vIGRhdGFwYXRoIGlzIGZvciBhbiBhZGRlZCBjaGFsbGVuZ2UsIEkgY2FuIGxvYWQgaW4gYSBKU09OIGZpbGUgd2l0aCBhIGdhbWUgYnVpbHQgaW50byBpdCA6KSBjaGVjayBpbml0IGZvciBtb3JlXHJcbiAgICB0aGlzLnJvb21zID0gcm9vbXM7IC8vIGFsbCByb29tcyBpbiBnYW1lXHJcbiAgICB0aGlzLnN0YXJ0Um9vbSA9IHN0YXJ0Um9vbTsgLy8gcm9vbSB0aGUgcGxheWVyIHdpbGwgc3RhcnQgaW5cclxuICAgIHRoaXMuZW5kUm9vbSA9IGVuZFJvb207IC8vIHdoaWNoIHJvb20gaXMgdGhlIGdhbWUtZW5kIHJvb21cclxuICAgIHRoaXMuUGxheWVyID0gbmV3IFBsYXllcihzdGFydFJvb20gPSB0aGlzLnN0YXJ0Um9vbSk7XHJcbiAgfVxyXG5cclxuICAvLyBJbml0aWFsaXplcyB0aGUgZ2FtZVxyXG4gIGFzeW5jIGluaXQoKSB7XHJcbiAgICBsZXQgZGlzcGxheVRleHQ7XHJcblxyXG4gICAgbGV0IHJvb21zID0gYXdhaXQgdGhpcy5sb2FkRGF0YSh0aGlzLmRhdGFwYXRoKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvb21zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRoaXMuYWRkUm9vbShyb29tc1tpXS5uYW1lLCByb29tc1tpXS5nZXRUZXh0KTtcclxuXHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcm9vbXNbaV0ucHJvbXB0cy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgIGlmICghcm9vbXNbaV0ucHJvbXB0c1tqXS5uYW1lKSB7XHJcbiAgICAgICAgICByb29tc1tpXS5wcm9tcHRzW2pdLm5hbWUgPSAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFyb29tc1tpXS5wcm9tcHRzW2pdLmtleXdvcmRzKSB7XHJcbiAgICAgICAgICByb29tc1tpXS5wcm9tcHRzW2pdLmtleXdvcmRzID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcm9vbXNbaV0ucHJvbXB0c1tqXS5yZXN1bHRzKSB7XHJcbiAgICAgICAgICByb29tc1tpXS5wcm9tcHRzW2pdLnJlc3VsdHMgPSB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFyb29tc1tpXS5wcm9tcHRzW2pdLnJlcXVpcmVtZW50cykge1xyXG4gICAgICAgICAgcm9vbXNbaV0ucHJvbXB0c1tqXS5yZXF1aXJlbWVudHMgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yb29tc1tpXS5hZGRQcm9tcHQocm9vbXNbaV0ucHJvbXB0c1tqXS5uYW1lLCByb29tc1tpXS5wcm9tcHRzW2pdLmtleXdvcmRzLFxyXG4gICAgICAgICAgcm9vbXNbaV0ucHJvbXB0c1tqXS5yZXN1bHRzLCByb29tc1tpXS5wcm9tcHRzW2pdLnJlcXVpcmVtZW50cyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBpZiBnYW1lIHdhc24ndCBpbml0YWxpemVkIHdpdGggc3RhcnRSb29tLCBzZXQgaXQgdG8gdGhlIGZpcnN0IHJvb21cclxuICAgIGlmICh0aGlzLnN0YXJ0Um9vbSA9PT0gJycgJiYgdGhpcy5yb29tcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuc3RhcnRSb29tID0gdGhpcy5yb29tc1swXS5uYW1lO1xyXG4gICAgICB0aGlzLlBsYXllci5zdGFydFJvb20gPSB0aGlzLnN0YXJ0Um9vbTtcclxuICAgICAgdGhpcy5QbGF5ZXIuY3VycmVudFJvb20gPSB0aGlzLlBsYXllci5zdGFydFJvb207XHJcbiAgICB9XHJcbiAgICAvLyBpZiBnYW1lIHdhc24ndCBpbml0YWxpemVkIHdpdGggZW5kUm9vbSwgc2V0IGl0IHRvIHRoZSBsYXN0IHJvb21cclxuICAgIGlmICh0aGlzLmVuZFJvb20gPT09ICcnICYmIHRoaXMucm9vbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLmVuZFJvb20gPSB0aGlzLnJvb21zW3RoaXMucm9vbXMubGVuZ3RoIC0gMV0ubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBkaXNwbGF5IHRoZSBzdGFydFJvb20gdGV4dFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvb21zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0aGlzLnJvb21zW2ldLm5hbWUgPT09IHRoaXMuc3RhcnRSb29tKSB7XHJcbiAgICAgICAgZGlzcGxheVRleHQgPSB0aGlzLnJvb21zW2ldLmdldFRleHQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGlzcGxheVRleHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBkaXNwbGF5VGV4dCA9ICdObyBzdGFydGluZyByb29tIHRleHQgZm91bmQnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5EaXNwbGF5LnNob3coZGlzcGxheVRleHQpO1xyXG4gIH1cclxuXHJcbiAgLy8gbWFuYWdlIHJvb21zXHJcblxyXG4gIC8vIGNyZWF0ZSBhIG5ldyBSb29tIG9iamVjdCBhbmQgcHVzaCBpdCBvbnRvIHRoZSBjdXJyZW50IHJvb21zIGxpc3RcclxuICBhZGRSb29tKG5hbWUsIGdldFRleHQsIHByb21wdHMgPSBbXSwgcmVxdWlyZW1lbnRzID0gW10pIHtcclxuICAgIGxldCByb29tT2JqID0gbmV3IFJvb20obmFtZSwgZ2V0VGV4dCwgcmVxdWlyZW1lbnRzLCBwcm9tcHRzKTtcclxuXHJcbiAgICB0aGlzLnJvb21zLnB1c2gocm9vbU9iaik7XHJcbiAgICByZXR1cm4gcm9vbU9iajtcclxuICB9XHJcblxyXG4gIC8vIGZpbHRlciBvdXQgYSByb29tIGFuZCBnZXQgcmlkIG9mIGl0IGlmIHdlIGRvbid0IHdhbnQgaXQgYW55bW9yZVxyXG4gIGRyb3BSb29tKHJvb21OYW1lKSB7XHJcbiAgICBsZXQgbmV3Um9vbXMgPSB0aGlzLnJvb21zLmZpbHRlcihmdW5jdGlvbiAocm9vbSkge1xyXG4gICAgICByZXR1cm4gcm9vbS5uYW1lICE9PSByb29tTmFtZTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMucm9vbXMgPSBuZXdSb29tcztcclxuICAgIHJldHVybiB0aGlzLnJvb21zO1xyXG4gIH1cclxuXHJcbiAgLy8gcmV0dXJucyByb29tIG9iamVjdCBnaXZlbiBuYW1lXHJcbiAgZ2V0Um9vbShyb29tTmFtZSkge1xyXG4gICAgLy8geCA9PiBpcyBhIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgd2lsbCByZXR1cm4gdGhlIHJvb20gd2hvc2UgbmFtZSBpcyB0aGUgc2FtZSBhcyByb29tTmFtZVxyXG4gICAgY29uc3Qgcm9vbSA9IHRoaXMucm9vbXMuZmluZCh4ID0+IHgubmFtZSA9PT0gcm9vbU5hbWUpO1xyXG5cclxuICAgIHJldHVybiByb29tO1xyXG4gIH1cclxuXHJcbiAgLy8gR2FtZSBBSVxyXG4gIGRlY2lkZVBhdGgobWVzc2FnZSkge1xyXG4gICAgaWYgKG1lc3NhZ2UgPT09ICdyZXN0YXJ0Jykge1xyXG4gICAgICB0aGlzLnJlc2V0R2FtZSgpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgX3RoaXMgPSB0aGlzO1xyXG4gICAgY29uc3QgY3VyclJvb20gPSBfdGhpcy5nZXRSb29tKF90aGlzLlBsYXllci5jdXJyZW50Um9vbSk7XHJcblxyXG4gICAgLy8gRG8gd2UgaGF2ZSBhY3Rpb25zIHRoYXQgd2UgY2FuIGRvIGluIHRoZSByb29tP1xyXG4gICAgaWYgKHR5cGVvZiBjdXJyUm9vbS5wcm9tcHRzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgLy8gQ2hlY2sgZXZlcnkgcHJvbXB0IGFjdGlvbiB0byBzZWUgaWYgaXQgbWF0Y2hlcyBvdXIgaW5wdXQga2V5d29yZHNcclxuICAgICAgLy8gRm9yIG5vdyBqdXN0IGdldCB0aGUgZmlyc3QgbWF0Y2hpbmcgcHJvbXB0IGFuZCBkbyB0aGF0XHJcbiAgICAgIGxldCBmb3VuZFByb21wdCA9IGZhbHNlO1xyXG5cclxuICAgICAgY3VyclJvb20ucHJvbXB0cy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9tcHQpIHtcclxuICAgICAgICBpZiAoZm91bmRQcm9tcHQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICBjb25zdCBtYXRjaGluZ1Byb21wdFJlc3VsdHMgPSBwcm9tcHQubWF0Y2hLZXl3b3JkcyhtZXNzYWdlLCBfdGhpcy5QbGF5ZXIuaW52ZW50b3J5Lml0ZW1zKTtcclxuXHJcbiAgICAgICAgICAvLyBJZiB3ZSBnZXQgYSBtYXRjaGluZyByZXN1bHQgYmFja1xyXG4gICAgICAgICAgaWYgKG1hdGNoaW5nUHJvbXB0UmVzdWx0cyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAvLyBUaGlzIHByb21wdCBoYXMga2V5d29yZHMgdGhhdCBtYXRjaCB0aGUgdXNlcidzIGlucHV0XHJcbiAgICAgICAgICAgIGZvdW5kUHJvbXB0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gSWYgcGxheWVyIHN1Y2NlZWRlZCBpbiBwcm9tcHQgYWN0aW9uXHJcbiAgICAgICAgICAgIGlmICgnc3VjY2VzcycgaW4gbWF0Y2hpbmdQcm9tcHRSZXN1bHRzKSB7XHJcbiAgICAgICAgICAgICAgX3RoaXMuRGlzcGxheS5zaG93KGA8cD4ke21hdGNoaW5nUHJvbXB0UmVzdWx0cy5zdWNjZXNzLnN1Y2Nlc3NUZXh0fTwvcD5gKTtcclxuICAgICAgICAgICAgICAvLyBHZXQgaXRlbXMgZnJvbSBwcm9tcHQgaWYgYW55IGFyZSByZXR1cm5lZCBhbmQgYWRkIHRoZW0gdG8gaW52ZW50b3J5XHJcbiAgICAgICAgICAgICAgaWYgKG1hdGNoaW5nUHJvbXB0UmVzdWx0cy5zdWNjZXNzLml0ZW1zR2l2ZW4gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuUGxheWVyLmludmVudG9yeS5hZGRJdGVtcyhtYXRjaGluZ1Byb21wdFJlc3VsdHMuc3VjY2Vzcy5pdGVtc0dpdmVuKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLy8gSWYgdGhlIHByb21wdCBzdWNjZXNzIHJlc3VsdCBpbmNsdWRlcyBlbnRlcmluZyBhIG5ldyByb29tLi5cclxuICAgICAgICAgICAgICBpZiAobWF0Y2hpbmdQcm9tcHRSZXN1bHRzLnN1Y2Nlc3Mucm9vbVRvRW50ZXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGVudGVyUm9vbVJlc3VsdFN1Y2Nlc3M7XHJcbiAgICAgICAgICAgICAgICBsZXQgZW50ZXJSb29tUmVzdWx0VGV4dDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayB0byBzZWUgaWYgcGxheWVyIGNhbiBzdWNjZXNzZnVsbHkgZW50ZXIgdGhlIHJvb20gKGdpdmVuIHRoZSBpbnZlbnRvcnkgLyByb29tIHJlcXVpcmVtZW50cylcclxuICAgICAgICAgICAgICAgIFtlbnRlclJvb21SZXN1bHRUZXh0LCBlbnRlclJvb21SZXN1bHRTdWNjZXNzXSA9XHJcbiAgICAgICAgICAgICAgICAgIF90aGlzLlBsYXllci5lbnRlclJvb20oX3RoaXMuZ2V0Um9vbShtYXRjaGluZ1Byb21wdFJlc3VsdHMuc3VjY2Vzcy5yb29tVG9FbnRlcikpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuRGlzcGxheS5hcHBlbmQoYDxwPiR7ZW50ZXJSb29tUmVzdWx0VGV4dH08L3A+YCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW50ZXJSb29tUmVzdWx0U3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAvLyBDaGVjayB0byBzZWUgaWYgcGxheWVyIGVudGVyZWQgd2lubmluZyByb29tXHJcbiAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGluZ1Byb21wdFJlc3VsdHMuc3VjY2Vzcy5yb29tVG9FbnRlciA9PT0gX3RoaXMuZW5kUm9vbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIF90aGlzLndpbigpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAvLyBQbGF5ZXIgY291bGQgbm90IGVudGVyIHJvb20gKG1pc3NpbmcgcmVxdWlyZWQgaXRlbXMgaW4gaW52ZW50b3J5KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBQbGF5ZXIgZmFpbGVkIHRvIGRvIHByb21wdCAobWlzc2luZyBpdGVtIHJlcXVpcmVtZW50KVxyXG4gICAgICAgICAgICBpZiAoJ2ZhaWwnIGluIG1hdGNoaW5nUHJvbXB0UmVzdWx0cykge1xyXG4gICAgICAgICAgICAgIF90aGlzLkRpc3BsYXkuc2hvdyhgJHttYXRjaGluZ1Byb21wdFJlc3VsdHMuZmFpbC5mYWlsVGV4dH1gKTtcclxuICAgICAgICAgICAgICBfdGhpcy5EaXNwbGF5LmFwcGVuZChgPHA+TWlzc2luZyByZXF1aXJlZCBpdGVtczogJHttYXRjaGluZ1Byb21wdFJlc3VsdHMuZmFpbC5taXNzaW5nLnRvU3RyaW5nKCl9LlxyXG4gICAgICAgICAgICAgIDwvcD48cD4ke190aGlzLmdldFJvb20oX3RoaXMuUGxheWVyLmN1cnJlbnRSb29tKS5nZXRUZXh0fTwvcD5gKTtcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZvdW5kUHJvbXB0ID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgLy8gUGxheWVyIGRpZG4ndCBzYXkgYW55IGtleXdvcmRzIHRoYXQgdHJpZ2dlcmVkIGFueSBvZiB0aGUgY3VycmVudCByb29tIHByb21wdHNcclxuICAgICAgICAgIF90aGlzLkRpc3BsYXkuc2hvdyhgPHA+Tm8gYWN0aW9ucyBjb3VsZCBiZSBkb25lIGZyb206IFwiJHttZXNzYWdlfVwiLiBUcnkgc29tZXRoaW5nIGVsc2UsIG9yIGJlIG1vcmUgXHJcbiAgICAgICAgICBzcGVjaWZpYyBhYm91dCB3aGF0IHlvdSdyZSBkb2luZy48L3A+PHA+JHtfdGhpcy5nZXRSb29tKF90aGlzLlBsYXllci5jdXJyZW50Um9vbSkuZ2V0VGV4dH08L3A+YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIE5vIHByb21wdHMgZXhpc3QgZm9yIHRoZSBjdXJyZW50IHJvb21cclxuICAgICAgX3RoaXMuRGlzcGxheS5zaG93KGA8cD5UaGVyZSBkb2Vzbid0IHNlZW0gdG8gYmUgYW55IGFjdGlvbnMgYXQgYWxsIHRoYXQgeW91IGNhbiBkbyBpbiB0aGlzIHJvb20uPC9wPlxyXG4gICAgICAke190aGlzLmdldFJvb20oX3RoaXMuUGxheWVyLmN1cnJlbnRSb29tKS5nZXRUZXh0fWApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gR3JhYiB0aGUgbWVzc2FnZSBmcm9tIHRoZSB1c2VyIGFuZCBydW4gSW5wdXQuc2VuZCBvbiBpdFxyXG4gIHVzZXJTZW5kKG1lc3NhZ2UpIHtcclxuICAgIC8vIE91ciBJbnB1dCBjbGFzcyB3aWxsIGhhbmRsZSBjbGVhbmluZyAvIG5vcm1hbGl6aW5nIHN0cmluZ3NcclxuICAgIHRoaXMuSW5wdXQuc2VuZChtZXNzYWdlKTtcclxuICAgIHRoaXMuZGVjaWRlUGF0aCh0aGlzLklucHV0LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8vIGp1c3QgbWFrZXMgaXQgZWFzaWVyL21vcmUgcmVhZGFibGUgdG8gZGlzYWJsZSBpbnB1dFxyXG4gIGRpc2FibGVJbnB1dCgpIHtcclxuICAgIHRoaXMuSW5wdXQuZGlzYWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgLy8ganVzdCBtYWtlcyBpdCBlYXNpZXIvbW9yZSByZWFkYWJsZSB0byBlbmFibGUgaW5wdXRcclxuICBlbmFibGVJbnB1dCgpIHtcclxuICAgIHRoaXMuSW5wdXQuZW5hYmxlKCk7XHJcbiAgfVxyXG5cclxuICAvLyBwbGF5ZXIgd2luc1xyXG4gIHdpbigpIHtcclxuICAgIC8vIHNob3cgd2luIHRleHRcclxuICAgIHRoaXMuRGlzcGxheS5hcHBlbmQoJzxwPllPVSBXSU4hPC9wPicpO1xyXG5cclxuICAgIC8vIGRpc2FibGUgbW9yZSBpbnB1dCBhZnRlciB3aW5uaW5nXHJcbiAgICB0aGlzLmRpc2FibGVJbnB1dCgpO1xyXG4gIH1cclxuXHJcbiAgLy8gUGxheWVyIHJlc2V0cyBnYW1lXHJcbiAgcmVzZXRHYW1lKCkge1xyXG4gICAgLy8gcmVzZXRzIHBsYXllciB3aXRoIGJsYW5rIGludmVudG9yeSBhbmQgYmFjayBpbiBzdGFydGluZyByb29tXHJcbiAgICB0aGlzLlBsYXllci5pbnZlbnRvcnkgPSBuZXcgSW52ZW50b3J5KCk7XHJcbiAgICB0aGlzLlBsYXllci5jdXJyZW50Um9vbSA9IHRoaXMuc3RhcnRSb29tO1xyXG4gICAgY29uc3Qgcm9vbSA9IHRoaXMuZ2V0Um9vbSh0aGlzLnN0YXJ0Um9vbSk7XHJcblxyXG4gICAgdGhpcy5EaXNwbGF5LnNob3cocm9vbS5nZXRUZXh0KTtcclxuICAgIHRoaXMuSW5wdXQuZW5hYmxlKCk7XHJcbiAgfVxyXG5cclxuICAvLyBsb2FkIGZyb20ganNvbiBmaWxlXHJcbiAgYXN5bmMgbG9hZERhdGEoZmlsZXBhdGgpIHtcclxuICAgIGxldCByb29tcyA9IFtdO1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZmlsZXBhdGgpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEucm9vbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKCFkYXRhLnJvb21zW2ldLnByb21wdHMpIHtcclxuICAgICAgICBkYXRhLnJvb21zW2ldLnByb21wdHMgPSBbXTtcclxuICAgICAgfVxyXG4gICAgICByb29tcy5wdXNoKGRhdGEucm9vbXNbaV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJvb21zO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xyXG5cclxuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnYW1lO1xyXG4iLCIvKlxyXG5pbnB1dC5qc1xyXG5TaG93cyB0ZXh0LCBhbGxvd3MgZm9yIGlucHV0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCB7XHJcbiAgLy8gY29uc3RydWN0b3JcclxuICBjb25zdHJ1Y3RvcihkaXNhYmxlZCA9IGZhbHNlLCB2YWx1ZSA9ICcnLCBlbGVtZW50SWQgPSAnaW5wdXQnKSB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLmVsZW1lbnRJZCA9IGVsZW1lbnRJZDtcclxuICB9XHJcblxyXG4gIC8vIGVuYWJsZXMgaW5wdXQgYW5kIGRvZXMgdGhlIHNhbWUgaW4gdGhlIEhUTUxcclxuICBlbmFibGUoKSB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQnKS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLy8gZGlzYWJsZXMgaW5wdXQgYW5kIGRvZXMgdGhlIHNhbWUgaW4gdGhlIEhUTUxcclxuICBkaXNhYmxlKCkge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQnKS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICAvLyBzZW5kcyBjbGllbnQgaW5wdXQgdG8gYmUgZXZhbHVhdGVkXHJcbiAgc2VuZCh2YWx1ZSkge1xyXG4gICAgLy8gbm9ybWFsaXplIGlucHV0IHZhbHVlc1xyXG4gICAgdmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbnZlbnRvcnkge1xyXG4gIC8vIGNvbnN0cnVjdG9yXHJcbiAgY29uc3RydWN0b3IoaXRlbXMgPSBbXSkge1xyXG4gICAgdGhpcy5pdGVtcyA9IGl0ZW1zO1xyXG4gIH1cclxuXHJcbiAgLy8gY2FuIGFkZCBzaW5nbGUgb3IgbXVsdGlwbGUgaXRlbXM7IHBhcmFtZXRlciBwYXNzZWQgaW4gc2hvdWxkIGJlIGFuIGFycmF5XHJcbiAgYWRkSXRlbXMoaXRlbXMpIHtcclxuICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1zLmNvbmNhdChpdGVtcyk7XHJcbiAgICByZXR1cm4gdGhpcy5pdGVtcztcclxuICB9XHJcblxyXG4gIC8vIGRyb3AgYW4gaXRlbSBieSBmaWx0ZXJpbmcgb3V0IHRoZSBpdGVtIG5hbWUgdGhhdCB3ZSB3YW50IHRvIGRyb3AgYW5kIHJldHVybmluZyB0aGUgaW52ZW50b3J5IHdpdGhvdXQgaXRcclxuICBkcm9wSXRlbShpdGVtTmFtZSkge1xyXG4gICAgbGV0IG5ld0ludmVudG9yeSA9IHRoaXMuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgIHJldHVybiBpdGVtLm5hbWUgIT09IGl0ZW1OYW1lO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5pdGVtcyA9IG5ld0ludmVudG9yeTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5pdGVtcztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IEludmVudG9yeSBmcm9tICcuL2ludmVudG9yeSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xyXG4gIC8vIGNvbnN0cnVjdG9yXHJcbiAgY29uc3RydWN0b3IobmFtZSA9ICcnLCBpbnZlbnRvcnkgPSBuZXcgSW52ZW50b3J5KCksIGN1cnJlbnRSb29tID0gJycsIHN0YXJ0Um9vbSkge1xyXG4gICAgLy8gaWYgbmFtZSBpcyBnaXZlbiwgc2V0IGl0OyBpZiBub3QsIHNldCBuYW1lIHRvICdwbGF5ZXInXHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgaWYgKHRoaXMubmFtZSA9PT0gJycpIHtcclxuICAgICAgdGhpcy5uYW1lID0gJ3BsYXllcic7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pbnZlbnRvcnkgPSBpbnZlbnRvcnk7XHJcblxyXG4gICAgLy8gaWYgY3VycmVudFJvb20gaXMgYmxhbmssIHNldCBpdCB0byBzdGFydFJvb21cclxuICAgIGlmICh0aGlzLmN1cnJlbnRSb29tID09PSAnJykge1xyXG4gICAgICB0aGlzLmN1cnJlbnRSb29tID0gdGhpcy5zdGFydFJvb207XHJcbiAgICB9XHJcbiAgICB0aGlzLnN0YXJ0Um9vbSA9IHN0YXJ0Um9vbTtcclxuICB9XHJcblxyXG4gIC8vIGVudGVyIHJvb21cclxuICBlbnRlclJvb20ocm9vbSkge1xyXG4gICAgLy8gYXNzaWducyB0aGUgdmFsdWUgb2Ygcm9vbS5lbnRlciAocGFzcywgZmFpbCwgZXRjLikgdG8gcm9vbVJlc3VsdCAtIHRoYXQgbG9naWMgaXMgaW4gUm9vbVxyXG4gICAgY29uc3Qgcm9vbVJlc3VsdCA9IHJvb20uZW50ZXIodGhpcy5pbnZlbnRvcnkuaXRlbXMpO1xyXG5cclxuICAgIC8vIHJvb21SZXN1bHRbMV0gaXMgdGhlIG1ldEFsbFJlcXVpcmVtZW50cyBib29sIGluIHJvb20uanM7IGlmIGl0J3MgZmFsc2UsIHdlbGwsIHllYWgsIGl0J3MgZmFsc2VcclxuICAgIGlmIChyb29tUmVzdWx0WzFdID09PSBmYWxzZSkge1xyXG4gICAgICAvLyBwbGF5ZXIgZGlkbid0IGhhdmUgdGhlIHJlcXVpcmVkIGl0ZW1zIHRvIGVudGVyIHRoZSByb29tXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBlbnRlcmVkIHJvb21cclxuICAgICAgdGhpcy5jdXJyZW50Um9vbSA9IHJvb20ubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZXR1cm4gcmVzdWx0cyB0ZXh0IGFuZCB3aGV0aGVyIG9yIG5vdCB0aGUgcGxheWVyIHN1Y2Nlc3NmdWxseSBlbnRlcmVkIHRoZSByb29tXHJcbiAgICByZXR1cm4gW3Jvb21SZXN1bHRbMF0sIHJvb21SZXN1bHRbMV1dO1xyXG4gIH1cclxuXHJcbiAgLy8gdGhlIGxvZ2ljIGZvciBnZXRJdGVtIGFuZCBkcm9wSXRlbSBpcyBpbiBpbnZlbnRvcnkuanNcclxuICBnZXRJdGVtKGl0ZW0pIHtcclxuICAgIHRoaXMuaW52ZW50b3J5LmFkZEl0ZW0oaXRlbSk7XHJcbiAgICByZXR1cm4gdGhpcy5pbnZlbnRvcnk7XHJcbiAgfVxyXG5cclxuICBkcm9wSXRlbShpdGVtKSB7XHJcbiAgICB0aGlzLmludmVudG9yeS5kcm9wSXRlbShpdGVtKTtcclxuICAgIHJldHVybiB0aGlzLmludmVudG9yeTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvbXB0IHtcclxuICAvLyBjb25zdHJ1Y3RvclxyXG4gIGNvbnN0cnVjdG9yKG5hbWUgPSAnJywga2V5d29yZHMgPSBbXSwgcmVzdWx0cyA9IHt9LCByZXF1aXJlbWVudHMgPSBbXSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIC8vIEtleXdvcmRzIHRoYXQgY2FuIHRyaWdnZXIgdGhlIHByb21wdCAobWFrZSBhbGwgbG93ZXItY2FzZSBieSBkZWZhdWx0KVxyXG4gICAgdGhpcy5rZXl3b3JkcyA9IGtleXdvcmRzLm1hcChmdW5jdGlvbiAodikgeyByZXR1cm4gdi50b0xvd2VyQ2FzZSgpO30pO1xyXG4gICAgLy8gUmVzdWx0cyB0aGF0IG9jY3VyIHdoZW4gdGhpcyBwcm9tcHQgaXMgc3VjY2Vzc2Z1bGx5IHRyaWdnZXJlZDtcclxuICAgIC8vIHRoZSByZXN1bHQga2V5cyBjb21wcmlzZSBvZiDigJxzdWNjZXNzVGV4dOKAnSAocmVxdWlyZWQpLCBcImZhaWxUZXh0XCIgKG9wdGlvbmFsKSxcclxuICAgIC8vIOKAnGl0ZW1zUmVxdWlyZWTigJ0gKG9wdGlvbmFsKSwgYW5kIOKAnHJvb21Ub0VudGVy4oCdIChvcHRpb25hbClcclxuICAgIHRoaXMucmVzdWx0cyA9IHJlc3VsdHM7XHJcbiAgICAvLyBBbnkgcHJlcmVxdWlzaXRlIGl0ZW1zIG5lZWRlZCB0byBkbyB0aGUgcHJvbXB0P1xyXG4gICAgdGhpcy5yZXF1aXJlbWVudHMgPSByZXF1aXJlbWVudHM7XHJcbiAgfVxyXG5cclxuICAvLyBDaGVjayBpZiBpbnB1dCBtZXNzYWdlIG1hdGNoZXMgYW55IHByb21wdCBrZXl3b3JkcyBhbmQgcmV0dXJuIHJlc3VsdHNcclxuICBtYXRjaEtleXdvcmRzKG1lc3NhZ2UsIGl0ZW1zID0gW10pIHtcclxuICAgIGxldCBmb3VuZEtleXdvcmQgPSBmYWxzZTtcclxuICAgIGxldCBtaXNzaW5nUmVxdWlyZW1lbnRzID0gW107XHJcblxyXG4gICAgLy8gSWYgd2UgaGF2ZSBhbnkgaXRlbSByZXF1aXJlbWVudHNcclxuICAgIGlmICh0aGlzLnJlcXVpcmVtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIC8vIENoZWNrIGFsbCB0aGUgcmVxdWlyZW1lbnRzIGFnYWluc3QgdGhlIGl0ZW1zIHBhc3NlZFxyXG4gICAgICB0aGlzLnJlcXVpcmVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXF1aXJlbWVudCkge1xyXG4gICAgICAgIGxldCBmb3VuZFJlcXVpcmVtZW50ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgIGlmIChpdGVtID09PSByZXF1aXJlbWVudCkge1xyXG4gICAgICAgICAgICBmb3VuZFJlcXVpcmVtZW50ID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBJZiBhIHJlcXVpcmVtZW50IGlzbid0IGZvdW5kIGFkZCB0aGF0IGEgbGlzdFxyXG4gICAgICAgIGlmICghZm91bmRSZXF1aXJlbWVudCkge1xyXG4gICAgICAgICAgbWlzc2luZ1JlcXVpcmVtZW50cy5wdXNoKHJlcXVpcmVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gT25jZSB3ZSBjaGVjayB0byBzZWUgaWYgdGhlIHBsYXllcidzIG1pc3NpbmcgYW55IGl0ZW1zLFxyXG4gICAgLy8gcGFyc2UgdGhlIGlucHV0IGZvciBtYXRjaGluZyBrZXl3b3JkcyB0byB0aGUgcHJvbXB0XHJcbiAgICB0aGlzLmtleXdvcmRzLmZvckVhY2goZnVuY3Rpb24gKGtleXdvcmQpIHtcclxuICAgICAgaWYgKG1lc3NhZ2UuaW5jbHVkZXMoa2V5d29yZC50b0xvd2VyQ2FzZSgpKSkge1xyXG4gICAgICAgIGZvdW5kS2V5d29yZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gSWYgYW55IGtleXdvcmRzIGhhdmUgYmVlbiBtYXRjaGVkIGZyb20gdGhlIHVzZXIgaW5wdXRcclxuICAgIGlmIChmb3VuZEtleXdvcmQpIHtcclxuICAgICAgLy8gSWYgdGhlcmUgYXJlIGFueSBtaXNzaW5nIGl0ZW0gcmVxdWlyZW1lbnRzXHJcbiAgICAgIGlmIChtaXNzaW5nUmVxdWlyZW1lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAvLyBQcm9tcHQgZmFpbHM7IHJldHVybiBtaXNzaW5nIGl0ZW1zIGFuZCBmYWlsVGV4dFxyXG4gICAgICAgIHJldHVybiB7J2ZhaWwnOiB7XHJcbiAgICAgICAgICAnbWlzc2luZyc6IG1pc3NpbmdSZXF1aXJlbWVudHMsXHJcbiAgICAgICAgICAnZmFpbFRleHQnOiB0aGlzLnJlc3VsdHMuZmFpbFRleHR9XHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICAvLyBQcm9tcHQgc3VjY2VlZHM7IHJldHVybiByZXN1bHRzIG9mIHRoZSBwcm9tcHRcclxuICAgICAgcmV0dXJuIHsnc3VjY2Vzcyc6IHRoaXMucmVzdWx0c307XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFByb21wdCBmcm9tICcuL3Byb21wdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb29tIHtcclxuICAvLyBjb25zdHJ1Y3RvclxyXG4gIC8vIGFjY2VwdHMgYSBzdHJpbmcgcm9vbSBuYW1lLCBzdHJpbmcgb2YgdGV4dCwgYW4gYXJyYXkgb2YgcmVxcyB0byBlbnRlciB0aGUgcm9vbSwgYW5kIGEgbGlzdCBvZiBhY2NlcHRhYmxlIHByb21wdHNcclxuICBjb25zdHJ1Y3RvcihuYW1lID0gJycsIGdldFRleHQgPSAnJywgcmVxdWlyZW1lbnRzID0gW10sIHByb21wdHMgPSB7fSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuZ2V0VGV4dCA9IGdldFRleHQ7XHJcbiAgICB0aGlzLnJlcXVpcmVtZW50cyA9IHJlcXVpcmVtZW50cztcclxuICAgIHRoaXMucHJvbXB0cyA9IHByb21wdHM7XHJcbiAgfVxyXG5cclxuICAvLyBhZGQgYSBuZXcgcHJvbXB0L2ludGVyYWN0aW9uIHRvIGEgcm9vbVxyXG4gIGFkZFByb21wdChuYW1lLCBrZXl3b3JkcywgcmVzdWx0cywgcmVxdWlyZW1lbnRzKSB7XHJcbiAgICAvLyBjcmVhdGUgYSBuZXcgcHJvbXB0IGFuZCBhc3NpZ24gaXQgdG8gdGhlIGNvbnN0IHByb21wdFxyXG4gICAgY29uc3QgcHJvbXB0ID0gbmV3IFByb21wdChuYW1lLCBrZXl3b3JkcywgcmVzdWx0cywgcmVxdWlyZW1lbnRzKTtcclxuXHJcbiAgICAvLyBwdXNoIHRoZSBwcm9tcHQgb250byB0aGUgcm9vbSdzIGxpc3Qgb2YgcHJvbXB0c1xyXG4gICAgdGhpcy5wcm9tcHRzLnB1c2gocHJvbXB0KTtcclxuXHJcbiAgICAvLyByZXR1cm4gdGhlIG5ldyBsaXN0IG9mIHJvb20gcHJvbXB0c1xyXG4gICAgcmV0dXJuIHRoaXMucHJvbXB0cztcclxuICB9XHJcblxyXG4gIC8vIGVudGVyIGEgcm9vbVxyXG4gIGVudGVyKGl0ZW1zID0gW10pIHtcclxuICAgIGxldCByZXN1bHRUZXh0ID0gJyc7XHJcbiAgICBsZXQgbWV0QWxsUmVxdWlyZW1lbnRzID0gdHJ1ZTsgLy8gc2V0IHRvIHRydWUgdW50aWwgd2UgZmluZCB0aGF0IGl0J3Mgbm90XHJcblxyXG4gICAgLy8gVGhlIHJvb20gaXMgbm90IGFjY2Vzc2libGUgYnkgZGVmYXVsdCBpZiB3ZSBoYXZlIG1vcmUgdGhhbiBvbmUgcmVxdWlyZW1lbnQgKGl0ZW0pXHJcbiAgICBpZiAodGhpcy5yZXF1aXJlbWVudHMgPiAwKSB7XHJcbiAgICAgIC8vIGlmIHlvdSBkb24ndCBoYXZlIGVub3VnaCBpdGVtcywgZG9uJ3QgYWxsb3cgZW50cnkgcmlnaHQgb2ZmIHRoZSBiYXRcclxuICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIG1ldEFsbFJlcXVpcmVtZW50cyA9IGZhbHNlO1xyXG4gICAgICAgIC8vIEFkZCBtaXNzaW5nIHJlcXVpcmVtZW50IG1lc3NhZ2VzXHJcbiAgICAgICAgdGhpcy5yZXF1aXJlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAocmVxdWlyZW1lbnQpIHtcclxuICAgICAgICAgIHJlc3VsdFRleHQgKz0gYCR7cmVxdWlyZW1lbnQuZmFpbFRleHR9LiBgO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGNoZWNrIHRoZSByZXF1aXJlbWVudHMgdG8gc2VlIGlmIHlvdSd2ZSBmb3VuZCB0aGVtIGFsbFxyXG4gICAgICAgIHRoaXMucmVxdWlyZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKHJlcXVpcmVtZW50KSB7XHJcbiAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAvLyBjaGVjayBhbGwgdXNlciBpdGVtczsgaWYgaXQncyBhIHJlcXVpcmVtZW50LCBzZXQgZm91bmQgdG8gdHJ1ZSBmb3IgdGhhdCBpdGVtXHJcbiAgICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0gPT09IHJlcXVpcmVtZW50KSB7XHJcbiAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAvLyBpZiBmb3VuZCBpcyBmYWxzZSwgeW91J3JlIG1pc3NpbmcgYXQgbGVhc3Qgb25lIHJlcXVpcmVtZW50IC0gc2F5IHNvXHJcbiAgICAgICAgICBpZiAoZm91bmQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIG1ldEFsbFJlcXVpcmVtZW50cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXN1bHRUZXh0ICs9IHJlcXVpcmVtZW50LmZhaWxUZXh0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBpZiBhbGwgaXRlbXMgd2VyZSBmb3VuZCwgZW50ZXIgdGhlIHJvb20gYW5kIHNob3cgdGhlIHJvb20gdGV4dFxyXG4gICAgICAgIGlmIChtZXRBbGxSZXF1aXJlbWVudHMgPT09IHRydWUpIHtcclxuICAgICAgICAgIHJlc3VsdFRleHQgPSB0aGlzLmdldFRleHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBpZiB0aGVyZSBhcmVuJ3QgYW55IGl0ZW1zIHJlcXVpcmVkIHRvIGVudGVyIHRoZSByb29tLCBqdXN0IHNob3cgdGhlIHJvb20gdGV4dFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzdWx0VGV4dCA9IHRoaXMuZ2V0VGV4dDtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZXR1cm4gcmVzdWx0IHRleHQsIHdoYXRldmVyIGl0IHdvdW5kIHVwIGJlaW5nXHJcbiAgICByZXR1cm4gW3Jlc3VsdFRleHQsIG1ldEFsbFJlcXVpcmVtZW50c107XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=