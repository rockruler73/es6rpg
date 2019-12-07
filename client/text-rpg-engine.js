(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("text-rpg-engine.js", [], factory);
	else if(typeof exports === 'object')
		exports["text-rpg-engine.js"] = factory();
	else
		root["text-rpg-engine.js"] = factory();
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
    value: function init() {
      var displayText;
      console.log('Initialized game from: ' + this.datapath);
      this.loadData(this.datapath); // TODO: make games load from json data
      // if game wasn't initalized with startRoom, set it to the first room

      if (this.startRoom === '' && this.rooms.length > 0) {
        this.startRoom = this.rooms[0].name;
        this.Player.startRoom = this.startRoom;
        this.Player.currentRoom = this.Player.startRoom;
      } // if game wasn't initalized with endRoom, set it to the first room


      if (this.endRoom === '' && this.rooms.length > 0) {
        this.endRoom = this.rooms[this.rooms.length - 1].name;
      } // display the startRoom text


      for (var i = 0; i < this.rooms.length; i++) {
        if (this.rooms[i].name === this.startRoom) {
          displayText = this.rooms[i].getText;
          break;
        }
      }

      if (displayText === undefined) {
        displayText = 'No starting room text found';
      }

      this.Display.show(displayText);
    } // manage rooms
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
    value: function loadData(filepath) {
      fetch(filepath).then(function (res) {
        return res.json();
      }).then(function (data) {
        console.log(data);
      });
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUuanMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3RleHQtcnBnLWVuZ2luZS5qcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUuanMvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUuanMvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUuanMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGV4dC1ycGctZW5naW5lLmpzLy4vc3JjL2lucHV0LmpzIiwid2VicGFjazovL3RleHQtcnBnLWVuZ2luZS5qcy8uL3NyYy9pbnZlbnRvcnkuanMiLCJ3ZWJwYWNrOi8vdGV4dC1ycGctZW5naW5lLmpzLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly90ZXh0LXJwZy1lbmdpbmUuanMvLi9zcmMvcHJvbXB0LmpzIiwid2VicGFjazovL3RleHQtcnBnLWVuZ2luZS5qcy8uL3NyYy9yb29tLmpzIl0sIm5hbWVzIjpbIkRpc3BsYXkiLCJodG1sIiwiZWxlbWVudElkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsImlubmVySHRtbCIsIkdhbWUiLCJkYXRhcGF0aCIsInJvb21zIiwiaXRlbXMiLCJzdGFydFJvb20iLCJlbmRSb29tIiwiSW5wdXQiLCJQbGF5ZXIiLCJkaXNwbGF5VGV4dCIsImNvbnNvbGUiLCJsb2ciLCJsb2FkRGF0YSIsImxlbmd0aCIsIm5hbWUiLCJjdXJyZW50Um9vbSIsImkiLCJnZXRUZXh0IiwidW5kZWZpbmVkIiwic2hvdyIsInByb21wdHMiLCJyZXF1aXJlbWVudHMiLCJyb29tT2JqIiwicHVzaCIsInJvb21OYW1lIiwibmV3Um9vbXMiLCJmaWx0ZXIiLCJyb29tIiwiZmluZCIsIngiLCJtZXNzYWdlIiwicmVzZXRHYW1lIiwiX3RoaXMiLCJjdXJyUm9vbSIsImdldFJvb20iLCJmb3VuZFByb21wdCIsImZvckVhY2giLCJwcm9tcHQiLCJtYXRjaGluZ1Byb21wdFJlc3VsdHMiLCJtYXRjaEtleXdvcmRzIiwiaW52ZW50b3J5Iiwic3VjY2VzcyIsInN1Y2Nlc3NUZXh0IiwiaXRlbXNHaXZlbiIsImFkZEl0ZW1zIiwicm9vbVRvRW50ZXIiLCJlbnRlclJvb21SZXN1bHRTdWNjZXNzIiwiZW50ZXJSb29tUmVzdWx0VGV4dCIsImVudGVyUm9vbSIsImFwcGVuZCIsIndpbiIsImZhaWwiLCJmYWlsVGV4dCIsIm1pc3NpbmciLCJ0b1N0cmluZyIsInNlbmQiLCJkZWNpZGVQYXRoIiwidmFsdWUiLCJkaXNhYmxlIiwiZW5hYmxlIiwiZGlzYWJsZUlucHV0IiwiZmlsZXBhdGgiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImdhbWUiLCJkaXNhYmxlZCIsInRvTG93ZXJDYXNlIiwiSW52ZW50b3J5IiwiY29uY2F0IiwiaXRlbU5hbWUiLCJuZXdJbnZlbnRvcnkiLCJpdGVtIiwicm9vbVJlc3VsdCIsImVudGVyIiwiYWRkSXRlbSIsImRyb3BJdGVtIiwiUHJvbXB0Iiwia2V5d29yZHMiLCJyZXN1bHRzIiwibWFwIiwidiIsImZvdW5kS2V5d29yZCIsIm1pc3NpbmdSZXF1aXJlbWVudHMiLCJyZXF1aXJlbWVudCIsImZvdW5kUmVxdWlyZW1lbnQiLCJrZXl3b3JkIiwiaW5jbHVkZXMiLCJSb29tIiwicmVzdWx0VGV4dCIsIm1ldEFsbFJlcXVpcmVtZW50cyIsImZvdW5kIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVB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aXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcInRleHQtcnBnLWVuZ2luZS5qc1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ0ZXh0LXJwZy1lbmdpbmUuanNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1widGV4dC1ycGctZW5naW5lLmpzXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLypcclxuZGlzcGxheS5qc1xyXG5TaG93cy9hcHBlbmRzIHRleHQgdG8gdGhlIHNpdGVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3BsYXkge1xyXG4gIC8vIGNvbnN0cnVjdG9yXHJcbiAgY29uc3RydWN0b3IoaHRtbCA9ICcnLCBlbGVtZW50SWQgPSAnZGlzcGxheScpIHtcclxuICAgIHRoaXMuaHRtbCA9IGh0bWw7XHJcbiAgICB0aGlzLmVsZW1lbnRJZCA9IGVsZW1lbnRJZDtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgc2hvd3MgZ2l2ZW4gSFRNTFxyXG4gIGlmIG5vIEhUTUwgaXMgZ2l2ZW4sIGRpc3BsYXkgdGhlIEhUTUwgdGhhdCdzIGluIHRoaXMgb2JqZWN0J3MgaHRtbCBwcm9wZXJ0eSBhbHJlYWR5XHJcbiAgb3RoZXJ3aXNlLCBzZXQgYm90aCB0aGUgZWxlbWVudCdzIGlubmVyIEhUTUwgYW5kIHRoZSBvYmplY3QncyBwcm9wZXJ0eSB0byB0aGUgZ2l2ZW4gaHRtbFxyXG4gICovXHJcbiAgc2hvdyhodG1sID0gbnVsbCkge1xyXG4gICAgaWYgKGh0bWwgPT09IG51bGwpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpLmlubmVySFRNTCA9IHRoaXMuaHRtbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZWxlbWVudElkKS5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgICB0aGlzLmh0bWwgPSBodG1sO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gYXBwZW5kIEhUTUwgdG8gZGlzcGxheSBzY3JlZW5cclxuICBhcHBlbmQoaHRtbCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50SWQpLmlubmVySHRtbCArPSBodG1sO1xyXG4gIH1cclxufVxyXG4iLCIvKlxyXG5nYW1lLmpzXHJcbmltcG9ydHMgYW5kIG1hbmFnZXMgdGhlIHBpZWNlcyB3ZSBidWlsZCB0byBtYWtlIG9uZSBjb2hlc2l2ZSBnYW1lISBZYXkhXHJcbiAqL1xyXG4vLyBpbXBvcnRzIC0gdGhlc2UgaW5zdGFudGlhdGUgdGhlIGltcG9ydHMgYW5kIHN0b3JlIHRoZW0gYXMgcHJvcGVydGllcyBzbyB3ZSBjYW4gcmVmZXJlbmNlIHRoZWlyIHByb3BlcnRpZXMgaW4gZ2FtZS5qc1xyXG5pbXBvcnQgRGlzcGxheSBmcm9tICcuL2Rpc3BsYXknO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9pbnB1dCc7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xyXG5pbXBvcnQgUm9vbSBmcm9tICcuL3Jvb20nO1xyXG5pbXBvcnQgSW52ZW50b3J5IGZyb20gJy4vaW52ZW50b3J5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xyXG4gIC8vIGNvbnN0cnVjdG9yXHJcbiAgY29uc3RydWN0b3IoZGF0YXBhdGggPSAnJywgcm9vbXMgPSBbXSwgaXRlbXMgPSBbXSwgc3RhcnRSb29tID0gJycsIGVuZFJvb20gPSAnJykge1xyXG4gICAgdGhpcy5EaXNwbGF5ID0gbmV3IERpc3BsYXkoKTtcclxuICAgIHRoaXMuSW5wdXQgPSBuZXcgSW5wdXQoKTtcclxuICAgIHRoaXMuZGF0YXBhdGggPSBkYXRhcGF0aDtcclxuICAgIC8vIGRhdGFwYXRoIGlzIGZvciBhbiBhZGRlZCBjaGFsbGVuZ2UsIEkgY2FuIGxvYWQgaW4gYSBKU09OIGZpbGUgd2l0aCBhIGdhbWUgYnVpbHQgaW50byBpdCA6KSBjaGVjayBpbml0IGZvciBtb3JlXHJcbiAgICB0aGlzLnJvb21zID0gcm9vbXM7IC8vIGFsbCByb29tcyBpbiBnYW1lXHJcbiAgICB0aGlzLnN0YXJ0Um9vbSA9IHN0YXJ0Um9vbTsgLy8gcm9vbSB0aGUgcGxheWVyIHdpbGwgc3RhcnQgaW5cclxuICAgIHRoaXMuZW5kUm9vbSA9IGVuZFJvb207IC8vIHdoaWNoIHJvb20gaXMgdGhlIGdhbWUtZW5kIHJvb21cclxuICAgIHRoaXMuUGxheWVyID0gbmV3IFBsYXllcihzdGFydFJvb20gPSB0aGlzLnN0YXJ0Um9vbSk7XHJcbiAgfVxyXG5cclxuICAvLyBJbml0aWFsaXplcyB0aGUgZ2FtZVxyXG4gIGluaXQoKSB7XHJcbiAgICBsZXQgZGlzcGxheVRleHQ7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ0luaXRpYWxpemVkIGdhbWUgZnJvbTogJyArIHRoaXMuZGF0YXBhdGgpO1xyXG4gICAgdGhpcy5sb2FkRGF0YSh0aGlzLmRhdGFwYXRoKTsgLy8gVE9ETzogbWFrZSBnYW1lcyBsb2FkIGZyb20ganNvbiBkYXRhXHJcbiAgICAvLyBpZiBnYW1lIHdhc24ndCBpbml0YWxpemVkIHdpdGggc3RhcnRSb29tLCBzZXQgaXQgdG8gdGhlIGZpcnN0IHJvb21cclxuICAgIGlmICh0aGlzLnN0YXJ0Um9vbSA9PT0gJycgJiYgdGhpcy5yb29tcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuc3RhcnRSb29tID0gdGhpcy5yb29tc1swXS5uYW1lO1xyXG4gICAgICB0aGlzLlBsYXllci5zdGFydFJvb20gPSB0aGlzLnN0YXJ0Um9vbTtcclxuICAgICAgdGhpcy5QbGF5ZXIuY3VycmVudFJvb20gPSB0aGlzLlBsYXllci5zdGFydFJvb207XHJcbiAgICB9XHJcbiAgICAvLyBpZiBnYW1lIHdhc24ndCBpbml0YWxpemVkIHdpdGggZW5kUm9vbSwgc2V0IGl0IHRvIHRoZSBmaXJzdCByb29tXHJcbiAgICBpZiAodGhpcy5lbmRSb29tID09PSAnJyAmJiB0aGlzLnJvb21zLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5lbmRSb29tID0gdGhpcy5yb29tc1t0aGlzLnJvb21zLmxlbmd0aCAtIDFdLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZGlzcGxheSB0aGUgc3RhcnRSb29tIHRleHRcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb29tcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodGhpcy5yb29tc1tpXS5uYW1lID09PSB0aGlzLnN0YXJ0Um9vbSkge1xyXG4gICAgICAgIGRpc3BsYXlUZXh0ID0gdGhpcy5yb29tc1tpXS5nZXRUZXh0O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRpc3BsYXlUZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgZGlzcGxheVRleHQgPSAnTm8gc3RhcnRpbmcgcm9vbSB0ZXh0IGZvdW5kJztcclxuICAgIH1cclxuICAgIHRoaXMuRGlzcGxheS5zaG93KGRpc3BsYXlUZXh0KTtcclxuICB9XHJcblxyXG4gIC8vIG1hbmFnZSByb29tc1xyXG5cclxuICAvLyBjcmVhdGUgYSBuZXcgUm9vbSBvYmplY3QgYW5kIHB1c2ggaXQgb250byB0aGUgY3VycmVudCByb29tcyBsaXN0XHJcbiAgYWRkUm9vbShuYW1lLCBnZXRUZXh0LCBwcm9tcHRzID0gW10sIHJlcXVpcmVtZW50cyA9IFtdKSB7XHJcbiAgICBsZXQgcm9vbU9iaiA9IG5ldyBSb29tKG5hbWUsIGdldFRleHQsIHByb21wdHMsIHJlcXVpcmVtZW50cyk7XHJcblxyXG4gICAgdGhpcy5yb29tcy5wdXNoKHJvb21PYmopO1xyXG4gICAgcmV0dXJuIHJvb21PYmo7XHJcbiAgfVxyXG5cclxuICAvLyBmaWx0ZXIgb3V0IGEgcm9vbSBhbmQgZ2V0IHJpZCBvZiBpdCBpZiB3ZSBkb24ndCB3YW50IGl0IGFueW1vcmVcclxuICBkcm9wUm9vbShyb29tTmFtZSkge1xyXG4gICAgbGV0IG5ld1Jvb21zID0gdGhpcy5yb29tcy5maWx0ZXIoZnVuY3Rpb24gKHJvb20pIHtcclxuICAgICAgcmV0dXJuIHJvb20ubmFtZSAhPT0gcm9vbU5hbWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnJvb21zID0gbmV3Um9vbXM7XHJcbiAgICByZXR1cm4gdGhpcy5yb29tcztcclxuICB9XHJcblxyXG4gIC8vIHJldHVybnMgcm9vbSBvYmplY3QgZ2l2ZW4gbmFtZVxyXG4gIGdldFJvb20ocm9vbU5hbWUpIHtcclxuICAgIC8vIHggPT4gaXMgYSBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IHdpbGwgcmV0dXJuIHRoZSByb29tIHdob3NlIG5hbWUgaXMgdGhlIHNhbWUgYXMgcm9vbU5hbWVcclxuICAgIGNvbnN0IHJvb20gPSB0aGlzLnJvb21zLmZpbmQoeCA9PiB4Lm5hbWUgPT09IHJvb21OYW1lKTtcclxuXHJcbiAgICByZXR1cm4gcm9vbTtcclxuICB9XHJcblxyXG4gIC8vIEdhbWUgQUlcclxuICBkZWNpZGVQYXRoKG1lc3NhZ2UpIHtcclxuICAgIGlmIChtZXNzYWdlID09PSAncmVzdGFydCcpIHtcclxuICAgICAgdGhpcy5yZXNldEdhbWUoKTtcclxuICAgIH1cclxuICAgIGNvbnN0IF90aGlzID0gdGhpcztcclxuICAgIGNvbnN0IGN1cnJSb29tID0gX3RoaXMuZ2V0Um9vbShfdGhpcy5QbGF5ZXIuY3VycmVudFJvb20pO1xyXG5cclxuICAgIC8vIERvIHdlIGhhdmUgYWN0aW9ucyB0aGF0IHdlIGNhbiBkbyBpbiB0aGUgcm9vbT9cclxuICAgIGlmICh0eXBlb2YgY3VyclJvb20ucHJvbXB0cyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIC8vIENoZWNrIGV2ZXJ5IHByb21wdCBhY3Rpb24gdG8gc2VlIGlmIGl0IG1hdGNoZXMgb3VyIGlucHV0IGtleXdvcmRzXHJcbiAgICAgIC8vIEZvciBub3cganVzdCBnZXQgdGhlIGZpcnN0IG1hdGNoaW5nIHByb21wdCBhbmQgZG8gdGhhdFxyXG4gICAgICBsZXQgZm91bmRQcm9tcHQgPSBmYWxzZTtcclxuXHJcbiAgICAgIGN1cnJSb29tLnByb21wdHMuZm9yRWFjaChmdW5jdGlvbiAocHJvbXB0KSB7XHJcbiAgICAgICAgaWYgKGZvdW5kUHJvbXB0ID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgY29uc3QgbWF0Y2hpbmdQcm9tcHRSZXN1bHRzID0gcHJvbXB0Lm1hdGNoS2V5d29yZHMobWVzc2FnZSwgX3RoaXMuUGxheWVyLmludmVudG9yeS5pdGVtcyk7XHJcblxyXG4gICAgICAgICAgLy8gSWYgd2UgZ2V0IGEgbWF0Y2hpbmcgcmVzdWx0IGJhY2tcclxuICAgICAgICAgIGlmIChtYXRjaGluZ1Byb21wdFJlc3VsdHMgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgLy8gVGhpcyBwcm9tcHQgaGFzIGtleXdvcmRzIHRoYXQgbWF0Y2ggdGhlIHVzZXIncyBpbnB1dFxyXG4gICAgICAgICAgICBmb3VuZFByb21wdCA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIElmIHBsYXllciBzdWNjZWVkZWQgaW4gcHJvbXB0IGFjdGlvblxyXG4gICAgICAgICAgICBpZiAoJ3N1Y2Nlc3MnIGluIG1hdGNoaW5nUHJvbXB0UmVzdWx0cykge1xyXG4gICAgICAgICAgICAgIF90aGlzLkRpc3BsYXkuc2hvdyhgPHA+JHttYXRjaGluZ1Byb21wdFJlc3VsdHMuc3VjY2Vzcy5zdWNjZXNzVGV4dH08L3A+YCk7XHJcbiAgICAgICAgICAgICAgLy8gR2V0IGl0ZW1zIGZyb20gcHJvbXB0IGlmIGFueSBhcmUgcmV0dXJuZWQgYW5kIGFkZCB0aGVtIHRvIGludmVudG9yeVxyXG4gICAgICAgICAgICAgIGlmIChtYXRjaGluZ1Byb21wdFJlc3VsdHMuc3VjY2Vzcy5pdGVtc0dpdmVuICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLlBsYXllci5pbnZlbnRvcnkuYWRkSXRlbXMobWF0Y2hpbmdQcm9tcHRSZXN1bHRzLnN1Y2Nlc3MuaXRlbXNHaXZlbik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8vIElmIHRoZSBwcm9tcHQgc3VjY2VzcyByZXN1bHQgaW5jbHVkZXMgZW50ZXJpbmcgYSBuZXcgcm9vbS4uXHJcbiAgICAgICAgICAgICAgaWYgKG1hdGNoaW5nUHJvbXB0UmVzdWx0cy5zdWNjZXNzLnJvb21Ub0VudGVyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBlbnRlclJvb21SZXN1bHRTdWNjZXNzO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVudGVyUm9vbVJlc3VsdFRleHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHBsYXllciBjYW4gc3VjY2Vzc2Z1bGx5IGVudGVyIHRoZSByb29tIChnaXZlbiB0aGUgaW52ZW50b3J5IC8gcm9vbSByZXF1aXJlbWVudHMpXHJcbiAgICAgICAgICAgICAgICBbZW50ZXJSb29tUmVzdWx0VGV4dCwgZW50ZXJSb29tUmVzdWx0U3VjY2Vzc10gPVxyXG4gICAgICAgICAgICAgICAgICBfdGhpcy5QbGF5ZXIuZW50ZXJSb29tKF90aGlzLmdldFJvb20obWF0Y2hpbmdQcm9tcHRSZXN1bHRzLnN1Y2Nlc3Mucm9vbVRvRW50ZXIpKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLkRpc3BsYXkuYXBwZW5kKGA8cD4ke2VudGVyUm9vbVJlc3VsdFRleHR9PC9wPmApO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVudGVyUm9vbVJlc3VsdFN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHBsYXllciBlbnRlcmVkIHdpbm5pbmcgcm9vbVxyXG4gICAgICAgICAgICAgICAgICBpZiAobWF0Y2hpbmdQcm9tcHRSZXN1bHRzLnN1Y2Nlc3Mucm9vbVRvRW50ZXIgPT09IF90aGlzLmVuZFJvb20pIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy53aW4oKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgLy8gUGxheWVyIGNvdWxkIG5vdCBlbnRlciByb29tIChtaXNzaW5nIHJlcXVpcmVkIGl0ZW1zIGluIGludmVudG9yeSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gUGxheWVyIGZhaWxlZCB0byBkbyBwcm9tcHQgKG1pc3NpbmcgaXRlbSByZXF1aXJlbWVudClcclxuICAgICAgICAgICAgaWYgKCdmYWlsJyBpbiBtYXRjaGluZ1Byb21wdFJlc3VsdHMpIHtcclxuICAgICAgICAgICAgICBfdGhpcy5EaXNwbGF5LnNob3coYCR7bWF0Y2hpbmdQcm9tcHRSZXN1bHRzLmZhaWwuZmFpbFRleHR9YCk7XHJcbiAgICAgICAgICAgICAgX3RoaXMuRGlzcGxheS5hcHBlbmQoYDxwPk1pc3NpbmcgcmVxdWlyZWQgaXRlbXM6ICR7bWF0Y2hpbmdQcm9tcHRSZXN1bHRzLmZhaWwubWlzc2luZy50b1N0cmluZygpfS5cclxuICAgICAgICAgICAgICA8L3A+PHA+JHtfdGhpcy5nZXRSb29tKF90aGlzLlBsYXllci5jdXJyZW50Um9vbSkuZ2V0VGV4dH08L3A+YCk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmb3VuZFByb21wdCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgIC8vIFBsYXllciBkaWRuJ3Qgc2F5IGFueSBrZXl3b3JkcyB0aGF0IHRyaWdnZXJlZCBhbnkgb2YgdGhlIGN1cnJlbnQgcm9vbSBwcm9tcHRzXHJcbiAgICAgICAgICBfdGhpcy5EaXNwbGF5LnNob3coYDxwPk5vIGFjdGlvbnMgY291bGQgYmUgZG9uZSBmcm9tOiBcIiR7bWVzc2FnZX1cIi4gVHJ5IHNvbWV0aGluZyBlbHNlLCBvciBiZSBtb3JlIFxyXG4gICAgICAgICAgc3BlY2lmaWMgYWJvdXQgd2hhdCB5b3UncmUgZG9pbmcuPC9wPjxwPiR7X3RoaXMuZ2V0Um9vbShfdGhpcy5QbGF5ZXIuY3VycmVudFJvb20pLmdldFRleHR9PC9wPmApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBObyBwcm9tcHRzIGV4aXN0IGZvciB0aGUgY3VycmVudCByb29tXHJcbiAgICAgIF90aGlzLkRpc3BsYXkuc2hvdyhgPHA+VGhlcmUgZG9lc24ndCBzZWVtIHRvIGJlIGFueSBhY3Rpb25zIGF0IGFsbCB0aGF0IHlvdSBjYW4gZG8gaW4gdGhpcyByb29tLjwvcD5cclxuICAgICAgJHtfdGhpcy5nZXRSb29tKF90aGlzLlBsYXllci5jdXJyZW50Um9vbSkuZ2V0VGV4dH1gKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UsIHRoaXMuUGxheWVyKTtcclxuICB9XHJcblxyXG4gIC8vIEdyYWIgdGhlIG1lc3NhZ2UgZnJvbSB0aGUgdXNlciBhbmQgcnVuIElucHV0LnNlbmQgb24gaXRcclxuICB1c2VyU2VuZChtZXNzYWdlKSB7XHJcbiAgICAvLyBPdXIgSW5wdXQgY2xhc3Mgd2lsbCBoYW5kbGUgY2xlYW5pbmcgLyBub3JtYWxpemluZyBzdHJpbmdzXHJcbiAgICB0aGlzLklucHV0LnNlbmQobWVzc2FnZSk7XHJcbiAgICB0aGlzLmRlY2lkZVBhdGgodGhpcy5JbnB1dC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvLyBqdXN0IG1ha2VzIGl0IGVhc2llci9tb3JlIHJlYWRhYmxlIHRvIGRpc2FibGUgaW5wdXRcclxuICBkaXNhYmxlSW5wdXQoKSB7XHJcbiAgICB0aGlzLklucHV0LmRpc2FibGUoKTtcclxuICB9XHJcblxyXG4gIC8vIGp1c3QgbWFrZXMgaXQgZWFzaWVyL21vcmUgcmVhZGFibGUgdG8gZW5hYmxlIGlucHV0XHJcbiAgZW5hYmxlSW5wdXQoKSB7XHJcbiAgICB0aGlzLklucHV0LmVuYWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gcGxheWVyIHdpbnNcclxuICB3aW4oKSB7XHJcbiAgICAvLyBzaG93IHdpbiB0ZXh0XHJcbiAgICB0aGlzLkRpc3BsYXkuYXBwZW5kKCc8cD5ZT1UgV0lOITwvcD4nKTtcclxuXHJcbiAgICAvLyBkaXNhYmxlIG1vcmUgaW5wdXQgYWZ0ZXIgd2lubmluZ1xyXG4gICAgdGhpcy5kaXNhYmxlSW5wdXQoKTtcclxuICB9XHJcblxyXG4gIC8vIFBsYXllciByZXNldHMgZ2FtZVxyXG4gIHJlc2V0R2FtZSgpIHtcclxuICAgIC8vIHJlc2V0cyBwbGF5ZXIgd2l0aCBibGFuayBpbnZlbnRvcnkgYW5kIGJhY2sgaW4gc3RhcnRpbmcgcm9vbVxyXG4gICAgdGhpcy5QbGF5ZXIuaW52ZW50b3J5ID0gbmV3IEludmVudG9yeSgpO1xyXG4gICAgdGhpcy5QbGF5ZXIuY3VycmVudFJvb20gPSB0aGlzLnN0YXJ0Um9vbTtcclxuICAgIGNvbnN0IHJvb20gPSB0aGlzLmdldFJvb20odGhpcy5zdGFydFJvb20pO1xyXG5cclxuICAgIHRoaXMuRGlzcGxheS5zaG93KHJvb20uZ2V0VGV4dCk7XHJcbiAgICB0aGlzLklucHV0LmVuYWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gbG9hZCBmcm9tIGpzb24gZmlsZVxyXG4gIGxvYWREYXRhKGZpbGVwYXRoKSB7XHJcbiAgICBmZXRjaChmaWxlcGF0aClcclxuICAgICAgLnRoZW4oXHJcbiAgICAgICAgcmVzID0+IHJlcy5qc29uKClcclxuICAgICAgKVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcclxuXHJcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2FtZTtcclxuIiwiLypcclxuaW5wdXQuanNcclxuU2hvd3MgdGV4dCwgYWxsb3dzIGZvciBpbnB1dFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQge1xyXG4gIC8vIGNvbnN0cnVjdG9yXHJcbiAgY29uc3RydWN0b3IoZGlzYWJsZWQgPSBmYWxzZSwgdmFsdWUgPSAnJywgZWxlbWVudElkID0gJ2lucHV0Jykge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGRpc2FibGVkO1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5lbGVtZW50SWQgPSBlbGVtZW50SWQ7XHJcbiAgfVxyXG5cclxuICAvLyBlbmFibGVzIGlucHV0IGFuZCBkb2VzIHRoZSBzYW1lIGluIHRoZSBIVE1MXHJcbiAgZW5hYmxlKCkge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0JykuZGlzYWJsZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8vIGRpc2FibGVzIGlucHV0IGFuZCBkb2VzIHRoZSBzYW1lIGluIHRoZSBIVE1MXHJcbiAgZGlzYWJsZSgpIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0JykuZGlzYWJsZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLy8gc2VuZHMgY2xpZW50IGlucHV0IHRvIGJlIGV2YWx1YXRlZFxyXG4gIHNlbmQodmFsdWUpIHtcclxuICAgIC8vIG5vcm1hbGl6ZSBpbnB1dCB2YWx1ZXNcclxuICAgIHZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW52ZW50b3J5IHtcclxuICAvLyBjb25zdHJ1Y3RvclxyXG4gIGNvbnN0cnVjdG9yKGl0ZW1zID0gW10pIHtcclxuICAgIHRoaXMuaXRlbXMgPSBpdGVtcztcclxuICB9XHJcblxyXG4gIC8vIGNhbiBhZGQgc2luZ2xlIG9yIG11bHRpcGxlIGl0ZW1zOyBwYXJhbWV0ZXIgcGFzc2VkIGluIHNob3VsZCBiZSBhbiBhcnJheVxyXG4gIGFkZEl0ZW1zKGl0ZW1zKSB7XHJcbiAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtcy5jb25jYXQoaXRlbXMpO1xyXG4gICAgcmV0dXJuIHRoaXMuaXRlbXM7XHJcbiAgfVxyXG5cclxuICAvLyBkcm9wIGFuIGl0ZW0gYnkgZmlsdGVyaW5nIG91dCB0aGUgaXRlbSBuYW1lIHRoYXQgd2Ugd2FudCB0byBkcm9wIGFuZCByZXR1cm5pbmcgdGhlIGludmVudG9yeSB3aXRob3V0IGl0XHJcbiAgZHJvcEl0ZW0oaXRlbU5hbWUpIHtcclxuICAgIGxldCBuZXdJbnZlbnRvcnkgPSB0aGlzLml0ZW1zLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICByZXR1cm4gaXRlbS5uYW1lICE9PSBpdGVtTmFtZTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuaXRlbXMgPSBuZXdJbnZlbnRvcnk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaXRlbXM7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBJbnZlbnRvcnkgZnJvbSAnLi9pbnZlbnRvcnknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcclxuICAvLyBjb25zdHJ1Y3RvclxyXG4gIGNvbnN0cnVjdG9yKG5hbWUgPSAnJywgaW52ZW50b3J5ID0gbmV3IEludmVudG9yeSgpLCBjdXJyZW50Um9vbSA9ICcnLCBzdGFydFJvb20pIHtcclxuICAgIC8vIGlmIG5hbWUgaXMgZ2l2ZW4sIHNldCBpdDsgaWYgbm90LCBzZXQgbmFtZSB0byAncGxheWVyJ1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIGlmICh0aGlzLm5hbWUgPT09ICcnKSB7XHJcbiAgICAgIHRoaXMubmFtZSA9ICdwbGF5ZXInO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW52ZW50b3J5ID0gaW52ZW50b3J5O1xyXG5cclxuICAgIC8vIGlmIGN1cnJlbnRSb29tIGlzIGJsYW5rLCBzZXQgaXQgdG8gc3RhcnRSb29tXHJcbiAgICBpZiAodGhpcy5jdXJyZW50Um9vbSA9PT0gJycpIHtcclxuICAgICAgdGhpcy5jdXJyZW50Um9vbSA9IHRoaXMuc3RhcnRSb29tO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdGFydFJvb20gPSBzdGFydFJvb207XHJcbiAgfVxyXG5cclxuICAvLyBlbnRlciByb29tXHJcbiAgZW50ZXJSb29tKHJvb20pIHtcclxuICAgIC8vIGFzc2lnbnMgdGhlIHZhbHVlIG9mIHJvb20uZW50ZXIgKHBhc3MsIGZhaWwsIGV0Yy4pIHRvIHJvb21SZXN1bHQgLSB0aGF0IGxvZ2ljIGlzIGluIFJvb21cclxuICAgIGNvbnN0IHJvb21SZXN1bHQgPSByb29tLmVudGVyKHRoaXMuaW52ZW50b3J5Lml0ZW1zKTtcclxuXHJcbiAgICAvLyByb29tUmVzdWx0WzFdIGlzIHRoZSBtZXRBbGxSZXF1aXJlbWVudHMgYm9vbCBpbiByb29tLmpzOyBpZiBpdCdzIGZhbHNlLCB3ZWxsLCB5ZWFoLCBpdCdzIGZhbHNlXHJcbiAgICBpZiAocm9vbVJlc3VsdFsxXSA9PT0gZmFsc2UpIHtcclxuICAgICAgLy8gcGxheWVyIGRpZG4ndCBoYXZlIHRoZSByZXF1aXJlZCBpdGVtcyB0byBlbnRlciB0aGUgcm9vbVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gZW50ZXJlZCByb29tXHJcbiAgICAgIHRoaXMuY3VycmVudFJvb20gPSByb29tLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmV0dXJuIHJlc3VsdHMgdGV4dCBhbmQgd2hldGhlciBvciBub3QgdGhlIHBsYXllciBzdWNjZXNzZnVsbHkgZW50ZXJlZCB0aGUgcm9vbVxyXG4gICAgcmV0dXJuIFtyb29tUmVzdWx0WzBdLCByb29tUmVzdWx0WzFdXTtcclxuICB9XHJcblxyXG4gIC8vIHRoZSBsb2dpYyBmb3IgZ2V0SXRlbSBhbmQgZHJvcEl0ZW0gaXMgaW4gaW52ZW50b3J5LmpzXHJcbiAgZ2V0SXRlbShpdGVtKSB7XHJcbiAgICB0aGlzLmludmVudG9yeS5hZGRJdGVtKGl0ZW0pO1xyXG4gICAgcmV0dXJuIHRoaXMuaW52ZW50b3J5O1xyXG4gIH1cclxuXHJcbiAgZHJvcEl0ZW0oaXRlbSkge1xyXG4gICAgdGhpcy5pbnZlbnRvcnkuZHJvcEl0ZW0oaXRlbSk7XHJcbiAgICByZXR1cm4gdGhpcy5pbnZlbnRvcnk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb21wdCB7XHJcbiAgLy8gY29uc3RydWN0b3JcclxuICBjb25zdHJ1Y3RvcihuYW1lID0gJycsIGtleXdvcmRzID0gW10sIHJlc3VsdHMgPSB7fSwgcmVxdWlyZW1lbnRzID0gW10pIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAvLyBLZXl3b3JkcyB0aGF0IGNhbiB0cmlnZ2VyIHRoZSBwcm9tcHQgKG1ha2UgYWxsIGxvd2VyLWNhc2UgYnkgZGVmYXVsdClcclxuICAgIHRoaXMua2V5d29yZHMgPSBrZXl3b3Jkcy5tYXAoZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHYudG9Mb3dlckNhc2UoKTt9KTtcclxuICAgIC8vIFJlc3VsdHMgdGhhdCBvY2N1ciB3aGVuIHRoaXMgcHJvbXB0IGlzIHN1Y2Nlc3NmdWxseSB0cmlnZ2VyZWQ7XHJcbiAgICAvLyB0aGUgcmVzdWx0IGtleXMgY29tcHJpc2Ugb2Yg4oCcc3VjY2Vzc1RleHTigJ0gKHJlcXVpcmVkKSwgXCJmYWlsVGV4dFwiIChvcHRpb25hbCksXHJcbiAgICAvLyDigJxpdGVtc1JlcXVpcmVk4oCdIChvcHRpb25hbCksIGFuZCDigJxyb29tVG9FbnRlcuKAnSAob3B0aW9uYWwpXHJcbiAgICB0aGlzLnJlc3VsdHMgPSByZXN1bHRzO1xyXG4gICAgLy8gQW55IHByZXJlcXVpc2l0ZSBpdGVtcyBuZWVkZWQgdG8gZG8gdGhlIHByb21wdD9cclxuICAgIHRoaXMucmVxdWlyZW1lbnRzID0gcmVxdWlyZW1lbnRzO1xyXG4gIH1cclxuXHJcbiAgLy8gQ2hlY2sgaWYgaW5wdXQgbWVzc2FnZSBtYXRjaGVzIGFueSBwcm9tcHQga2V5d29yZHMgYW5kIHJldHVybiByZXN1bHRzXHJcbiAgbWF0Y2hLZXl3b3JkcyhtZXNzYWdlLCBpdGVtcyA9IFtdKSB7XHJcbiAgICBsZXQgZm91bmRLZXl3b3JkID0gZmFsc2U7XHJcbiAgICBsZXQgbWlzc2luZ1JlcXVpcmVtZW50cyA9IFtdO1xyXG5cclxuICAgIC8vIElmIHdlIGhhdmUgYW55IGl0ZW0gcmVxdWlyZW1lbnRzXHJcbiAgICBpZiAodGhpcy5yZXF1aXJlbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAvLyBDaGVjayBhbGwgdGhlIHJlcXVpcmVtZW50cyBhZ2FpbnN0IHRoZSBpdGVtcyBwYXNzZWRcclxuICAgICAgdGhpcy5yZXF1aXJlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAocmVxdWlyZW1lbnQpIHtcclxuICAgICAgICBsZXQgZm91bmRSZXF1aXJlbWVudCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICBpZiAoaXRlbSA9PT0gcmVxdWlyZW1lbnQpIHtcclxuICAgICAgICAgICAgZm91bmRSZXF1aXJlbWVudCA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gSWYgYSByZXF1aXJlbWVudCBpc24ndCBmb3VuZCBhZGQgdGhhdCBhIGxpc3RcclxuICAgICAgICBpZiAoIWZvdW5kUmVxdWlyZW1lbnQpIHtcclxuICAgICAgICAgIG1pc3NpbmdSZXF1aXJlbWVudHMucHVzaChyZXF1aXJlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vIE9uY2Ugd2UgY2hlY2sgdG8gc2VlIGlmIHRoZSBwbGF5ZXIncyBtaXNzaW5nIGFueSBpdGVtcyxcclxuICAgIC8vIHBhcnNlIHRoZSBpbnB1dCBmb3IgbWF0Y2hpbmcga2V5d29yZHMgdG8gdGhlIHByb21wdFxyXG4gICAgdGhpcy5rZXl3b3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChrZXl3b3JkKSB7XHJcbiAgICAgIGlmIChtZXNzYWdlLmluY2x1ZGVzKGtleXdvcmQudG9Mb3dlckNhc2UoKSkpIHtcclxuICAgICAgICBmb3VuZEtleXdvcmQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIElmIGFueSBrZXl3b3JkcyBoYXZlIGJlZW4gbWF0Y2hlZCBmcm9tIHRoZSB1c2VyIGlucHV0XHJcbiAgICBpZiAoZm91bmRLZXl3b3JkKSB7XHJcbiAgICAgIC8vIElmIHRoZXJlIGFyZSBhbnkgbWlzc2luZyBpdGVtIHJlcXVpcmVtZW50c1xyXG4gICAgICBpZiAobWlzc2luZ1JlcXVpcmVtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgLy8gUHJvbXB0IGZhaWxzOyByZXR1cm4gbWlzc2luZyBpdGVtcyBhbmQgZmFpbFRleHRcclxuICAgICAgICByZXR1cm4geydmYWlsJzoge1xyXG4gICAgICAgICAgJ21pc3NpbmcnOiBtaXNzaW5nUmVxdWlyZW1lbnRzLFxyXG4gICAgICAgICAgJ2ZhaWxUZXh0JzogdGhpcy5yZXN1bHRzLmZhaWxUZXh0fVxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgLy8gUHJvbXB0IHN1Y2NlZWRzOyByZXR1cm4gcmVzdWx0cyBvZiB0aGUgcHJvbXB0XHJcbiAgICAgIHJldHVybiB7J3N1Y2Nlc3MnOiB0aGlzLnJlc3VsdHN9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBQcm9tcHQgZnJvbSAnLi9wcm9tcHQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm9vbSB7XHJcbiAgLy8gY29uc3RydWN0b3JcclxuICAvLyBhY2NlcHRzIGEgc3RyaW5nIHJvb20gbmFtZSwgc3RyaW5nIG9mIHRleHQsIGFuIGFycmF5IG9mIHJlcXMgdG8gZW50ZXIgdGhlIHJvb20sIGFuZCBhIGxpc3Qgb2YgYWNjZXB0YWJsZSBwcm9tcHRzXHJcbiAgY29uc3RydWN0b3IobmFtZSA9ICcnLCBnZXRUZXh0ID0gJycsIHJlcXVpcmVtZW50cyA9IFtdLCBwcm9tcHRzID0ge30pIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmdldFRleHQgPSBnZXRUZXh0O1xyXG4gICAgdGhpcy5yZXF1aXJlbWVudHMgPSByZXF1aXJlbWVudHM7XHJcbiAgICB0aGlzLnByb21wdHMgPSBwcm9tcHRzO1xyXG4gIH1cclxuXHJcbiAgLy8gYWRkIGEgbmV3IHByb21wdC9pbnRlcmFjdGlvbiB0byBhIHJvb21cclxuICBhZGRQcm9tcHQobmFtZSwga2V5d29yZHMsIHJlc3VsdHMsIHJlcXVpcmVtZW50cykge1xyXG4gICAgLy8gY3JlYXRlIGEgbmV3IHByb21wdCBhbmQgYXNzaWduIGl0IHRvIHRoZSBjb25zdCBwcm9tcHRcclxuICAgIGNvbnN0IHByb21wdCA9IG5ldyBQcm9tcHQobmFtZSwga2V5d29yZHMsIHJlc3VsdHMsIHJlcXVpcmVtZW50cyk7XHJcblxyXG4gICAgLy8gcHVzaCB0aGUgcHJvbXB0IG9udG8gdGhlIHJvb20ncyBsaXN0IG9mIHByb21wdHNcclxuICAgIHRoaXMucHJvbXB0cy5wdXNoKHByb21wdCk7XHJcblxyXG4gICAgLy8gcmV0dXJuIHRoZSBuZXcgbGlzdCBvZiByb29tIHByb21wdHNcclxuICAgIHJldHVybiB0aGlzLnByb21wdHM7XHJcbiAgfVxyXG5cclxuICAvLyBlbnRlciBhIHJvb21cclxuICBlbnRlcihpdGVtcyA9IFtdKSB7XHJcbiAgICBsZXQgcmVzdWx0VGV4dCA9ICcnO1xyXG4gICAgbGV0IG1ldEFsbFJlcXVpcmVtZW50cyA9IHRydWU7IC8vIHNldCB0byB0cnVlIHVudGlsIHdlIGZpbmQgdGhhdCBpdCdzIG5vdFxyXG5cclxuICAgIC8vIFRoZSByb29tIGlzIG5vdCBhY2Nlc3NpYmxlIGJ5IGRlZmF1bHQgaWYgd2UgaGF2ZSBtb3JlIHRoYW4gb25lIHJlcXVpcmVtZW50IChpdGVtKVxyXG4gICAgaWYgKHRoaXMucmVxdWlyZW1lbnRzID4gMCkge1xyXG4gICAgICAvLyBpZiB5b3UgZG9uJ3QgaGF2ZSBlbm91Z2ggaXRlbXMsIGRvbid0IGFsbG93IGVudHJ5IHJpZ2h0IG9mZiB0aGUgYmF0XHJcbiAgICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBtZXRBbGxSZXF1aXJlbWVudHMgPSBmYWxzZTtcclxuICAgICAgICAvLyBBZGQgbWlzc2luZyByZXF1aXJlbWVudCBtZXNzYWdlc1xyXG4gICAgICAgIHRoaXMucmVxdWlyZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKHJlcXVpcmVtZW50KSB7XHJcbiAgICAgICAgICByZXN1bHRUZXh0ICs9IGAke3JlcXVpcmVtZW50LmZhaWxUZXh0fS4gYDtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBjaGVjayB0aGUgcmVxdWlyZW1lbnRzIHRvIHNlZSBpZiB5b3UndmUgZm91bmQgdGhlbSBhbGxcclxuICAgICAgICB0aGlzLnJlcXVpcmVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXF1aXJlbWVudCkge1xyXG4gICAgICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgLy8gY2hlY2sgYWxsIHVzZXIgaXRlbXM7IGlmIGl0J3MgYSByZXF1aXJlbWVudCwgc2V0IGZvdW5kIHRvIHRydWUgZm9yIHRoYXQgaXRlbVxyXG4gICAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtID09PSByZXF1aXJlbWVudCkge1xyXG4gICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgLy8gaWYgZm91bmQgaXMgZmFsc2UsIHlvdSdyZSBtaXNzaW5nIGF0IGxlYXN0IG9uZSByZXF1aXJlbWVudCAtIHNheSBzb1xyXG4gICAgICAgICAgaWYgKGZvdW5kID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBtZXRBbGxSZXF1aXJlbWVudHMgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmVzdWx0VGV4dCArPSByZXF1aXJlbWVudC5mYWlsVGV4dDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gaWYgYWxsIGl0ZW1zIHdlcmUgZm91bmQsIGVudGVyIHRoZSByb29tIGFuZCBzaG93IHRoZSByb29tIHRleHRcclxuICAgICAgICBpZiAobWV0QWxsUmVxdWlyZW1lbnRzID09PSB0cnVlKSB7XHJcbiAgICAgICAgICByZXN1bHRUZXh0ID0gdGhpcy5nZXRUZXh0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gaWYgdGhlcmUgYXJlbid0IGFueSBpdGVtcyByZXF1aXJlZCB0byBlbnRlciB0aGUgcm9vbSwganVzdCBzaG93IHRoZSByb29tIHRleHRcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc3VsdFRleHQgPSB0aGlzLmdldFRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmV0dXJuIHJlc3VsdCB0ZXh0LCB3aGF0ZXZlciBpdCB3b3VuZCB1cCBiZWluZ1xyXG4gICAgcmV0dXJuIFtyZXN1bHRUZXh0LCBtZXRBbGxSZXF1aXJlbWVudHNdO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9