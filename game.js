/*
game.js
imports and manages the pieces we build to make one cohesive game! Yay!
 */
//imports - these instantiate the imports and store them as properties so we can reference their properties in game.js
import Display from './display';
import Input from './input';

export default class Game{
    //constructor
    //datapath is for an added challenge, I can load in a JSON file with a game built into it :)
    constructor(datapath = ''){
        this.Display = new Display();
        this.Input = new Input();
        this.datapath = datapath;
    }

    //Initializes the game
    init(){
        console.log('Initialized game from: ' + this.datapath);
        this.Display.show('<p>Hello World</p>');
    }

    //Grab the message from the user and run Input.send on it
    userSend(message){
        console.log('User sent: ' + message);
        this.Input.send(message);
    }

    //just makes it easier/more readable to disable input
    disableInput(){
        this.Input.disable();
    }

    //just makes it easier/more readable to enable input
    enableInput(){
        this.Input.enable();
    }
}