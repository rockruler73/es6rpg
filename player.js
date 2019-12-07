import Inventory from './inventory';

export default class Player {
  // constructor
  constructor(name = '', inventory = new Inventory(), currentRoom = '', startRoom) {
    // if name is given, set it; if not, set name to 'player'
    this.name = name;
    if (this.name === '') {
      this.name = 'player';
    }

    this.inventory = inventory;

    // if currentRoom is blank, set it to startRoom
    if (this.currentRoom === '') {
      this.currentRoom = this.startRoom;
    }
    this.startRoom = startRoom;
  }

  // enter room
  enterRoom(room) {
    // assigns the value of room.enter (pass, fail, etc.) to roomResult - that logic is in Room
    const roomResult = room.enter(this.inventory.items);

    // roomResult[1] is the metAllRequirements bool in room.js; if it's false, well, yeah, it's false
    if (roomResult[1] === false) {
      // player didn't have the required items to enter the room
    } else {
      // entered room
      this.currentRoom = room.name;
    }

    // return results text and whether or not the player successfully entered the room
    return [roomResult[0], roomResult[1]];
  }

  // the logic for getItem and dropItem is in inventory.js
  getItem(item) {
    this.inventory.addItem(item);
    return this.inventory;
  }

  dropItem(item) {
    this.inventory.dropItem(item);
    return this.inventory;
  }
}
