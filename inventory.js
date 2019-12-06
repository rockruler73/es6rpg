export default class Inventory {
    //constructor
    constructor(items = []) {
        this.items = items;
    }

    // can add single or multiple items; parameter passed in should be an array
    addItems(items) {
        this.items = this.items.concat(items);
        return this.items;
    }

    //drop an item by filtering out the item name that we want to drop and returning the inventory without it
    dropItem(itemName) {
        let newInventory = this.items.filter(function (item) {
            return item.name !== itemName;
        });

        this.items = newInventory;

        return this.items;
    }
}