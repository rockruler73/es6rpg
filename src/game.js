/*
game.js
imports and manages the pieces we build to make one cohesive game! Yay!
 */
// imports - these instantiate the imports and store them as properties so we can reference their properties in game.js
import Display from './display';
import Input from './input';
import Player from './player';
import Room from './room';
import Inventory from './inventory';

export default class Game {
  // constructor
  constructor(datapath = '', rooms = [], items = [], startRoom = '', endRoom = '') {
    this.Display = new Display();
    this.Input = new Input();
    this.datapath = datapath;
    // datapath is for an added challenge, I can load in a JSON file with a game built into it :) check init for more
    this.rooms = rooms; // all rooms in game
    this.startRoom = startRoom; // room the player will start in
    this.endRoom = endRoom; // which room is the game-end room
    this.Player = new Player(startRoom = this.startRoom);
  }

  // Initializes the game
  async init() {
    let displayText;

    let rooms = await this.loadData(this.datapath);

    for (let i = 0; i < rooms.length; i++) {
      this.addRoom(rooms[i].name, rooms[i].getText);

      for (let j = 0; j < rooms[i].prompts.length; j++) {
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
        this.rooms[i].addPrompt(rooms[i].prompts[j].name, rooms[i].prompts[j].keywords,
          rooms[i].prompts[j].results, rooms[i].prompts[j].requirements);
      }
    }

    // if game wasn't initalized with startRoom, set it to the first room
    if (this.startRoom === '' && this.rooms.length > 0) {
      this.startRoom = this.rooms[0].name;
      this.Player.startRoom = this.startRoom;
      this.Player.currentRoom = this.Player.startRoom;
    }
    // if game wasn't initalized with endRoom, set it to the last room
    if (this.endRoom === '' && this.rooms.length > 0) {
      this.endRoom = this.rooms[this.rooms.length - 1].name;
    }

    // display the startRoom text
    for (let i = 0; i < this.rooms.length; i++) {
      if (this.rooms[i].name === this.startRoom) {
        displayText = this.rooms[i].getText;
        break;
      }
    }

    if (displayText === undefined) {
      displayText = 'No starting room text found';
    }
    this.Display.show(displayText);
  }

  // manage rooms

  // create a new Room object and push it onto the current rooms list
  addRoom(name, getText, prompts = [], requirements = []) {
    let roomObj = new Room(name, getText, requirements, prompts);

    this.rooms.push(roomObj);
    return roomObj;
  }

  // filter out a room and get rid of it if we don't want it anymore
  dropRoom(roomName) {
    let newRooms = this.rooms.filter(function (room) {
      return room.name !== roomName;
    });

    this.rooms = newRooms;
    return this.rooms;
  }

  // returns room object given name
  getRoom(roomName) {
    // x => is a callback function that will return the room whose name is the same as roomName
    const room = this.rooms.find(x => x.name === roomName);

    return room;
  }

  // Game AI
  decidePath(message) {
    if (message === 'restart') {
      this.resetGame();
    }
    const _this = this;
    const currRoom = _this.getRoom(_this.Player.currentRoom);

    // Do we have actions that we can do in the room?
    if (typeof currRoom.prompts !== undefined) {
      // Check every prompt action to see if it matches our input keywords
      // For now just get the first matching prompt and do that
      let foundPrompt = false;

      currRoom.prompts.forEach(function (prompt) {
        if (foundPrompt === false) {
          const matchingPromptResults = prompt.matchKeywords(message, _this.Player.inventory.items);

          // If we get a matching result back
          if (matchingPromptResults !== null) {
            // This prompt has keywords that match the user's input
            foundPrompt = true;
            // If player succeeded in prompt action
            if ('success' in matchingPromptResults) {
              _this.Display.show(`<p>${matchingPromptResults.success.successText}</p>`);
              // Get items from prompt if any are returned and add them to inventory
              if (matchingPromptResults.success.itemsGiven !== undefined) {
                _this.Player.inventory.addItems(matchingPromptResults.success.itemsGiven);
              }
              // If the prompt success result includes entering a new room..
              if (matchingPromptResults.success.roomToEnter !== undefined) {
                let enterRoomResultSuccess;
                let enterRoomResultText;

                // Check to see if player can successfully enter the room (given the inventory / room requirements)
                [enterRoomResultText, enterRoomResultSuccess] =
                  _this.Player.enterRoom(_this.getRoom(matchingPromptResults.success.roomToEnter));
                _this.Display.append(`<p>${enterRoomResultText}</p>`);
                if (enterRoomResultSuccess) {
                  // Check to see if player entered winning room
                  if (matchingPromptResults.success.roomToEnter === _this.endRoom) {
                    // _this.win();
                  }
                } else {
                  // Player could not enter room (missing required items in inventory)
                }
              }
            }
            // Player failed to do prompt (missing item requirement)
            if ('fail' in matchingPromptResults) {
              _this.Display.show(`${matchingPromptResults.fail.failText}`);
              _this.Display.append(`<p>Missing required items: ${matchingPromptResults.fail.missing.toString()}.
              </p><p>${_this.getRoom(_this.Player.currentRoom).getText}</p>`);
              return;
            }
          }
        }
        if (foundPrompt === false) {
          // Player didn't say any keywords that triggered any of the current room prompts
          _this.Display.show(`<p>No actions could be done from: "${message}". Try something else, or be more 
          specific about what you're doing.</p><p>${_this.getRoom(_this.Player.currentRoom).getText}</p>`);
        }
      });
    } else {
      // No prompts exist for the current room
      _this.Display.show(`<p>There doesn't seem to be any actions at all that you can do in this room.</p>
      ${_this.getRoom(_this.Player.currentRoom).getText}`);
    }
  }

  // Grab the message from the user and run Input.send on it
  userSend(message) {
    // Our Input class will handle cleaning / normalizing strings
    this.Input.send(message);
    this.decidePath(this.Input.value);
  }

  // just makes it easier/more readable to disable input
  disableInput() {
    this.Input.disable();
  }

  // just makes it easier/more readable to enable input
  enableInput() {
    this.Input.enable();
  }

  // player wins
  win() {
    // show win text
    this.Display.append('<p>YOU WIN!</p>');

    // disable more input after winning
    this.disableInput();
  }

  // Player resets game
  resetGame() {
    // resets player with blank inventory and back in starting room
    this.Player.inventory = new Inventory();
    this.Player.currentRoom = this.startRoom;
    const room = this.getRoom(this.startRoom);

    this.Display.show(room.getText);
    this.Input.enable();
  }

  // load from json file
  async loadData(filepath) {
    let rooms = [];

    const response = await fetch(filepath);
    const data = await response.json();

    for (let i = 0; i < data.rooms.length; i++) {
      if (!data.rooms[i].prompts) {
        data.rooms[i].prompts = [];
      }
      rooms.push(data.rooms[i]);
    }
    return rooms;
  }
}
