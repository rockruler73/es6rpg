/*
input.js
Shows text, allows for input
 */
export default class Input{
    //constructor
    constructor(disabled = false, value = '', elementId = 'input'){
        this.disabled = disabled;
        this.value = value;
        this.elementId = elementId;
    }

    //enables input and does the same in the HTML
    enable(){
        this.disabled = false;
        document.getElementById('input').disabled = false;
    }

    //disables input and does the same in the HTML
    disable(){
        this.disabled = true;
        document.getElementById('input').disabled = true;
    }

    //sends client input to be evaluated
    send(value){
        //normalize input values
        value = value.toLowerCase();
        this.value = value;
    }
}