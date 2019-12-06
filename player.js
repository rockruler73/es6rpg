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
}