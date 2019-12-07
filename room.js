import Prompt from './prompt';

export default class Room {
  // constructor
  // accepts a string room name, string of text, an array of reqs to enter the room, and a list of acceptable prompts
  constructor(name = '', getText = '', requirements = [], prompts = {}) {
    this.name = name;
    this.getText = getText;
    this.requirements = requirements;
    this.prompts = prompts;
  }

  // add a new prompt/interaction to a room
  addPrompt(name, keywords, results, requirements) {
    // create a new prompt and assign it to the const prompt
    const prompt = new Prompt(name, keywords, results, requirements);

    // push the prompt onto the room's list of prompts
    this.prompts.push(prompt);

    // return the new list of room prompts
    return this.prompts;
  }

  // enter a room
  enter(items = []) {
    let resultText = '';
    let metAllRequirements = true; // set to true until we find that it's not

    // The room is not accessible by default if we have more than one requirement (item)
    if (this.requirements > 0) {
      // if you don't have enough items, don't allow entry right off the bat
      if (items.length === 0) {
        metAllRequirements = false;
        // Add missing requirement messages
        this.requirements.forEach(function (requirement) {
          resultText += `${requirement.failText}. `;
        });
      } else {
        // check the requirements to see if you've found them all
        this.requirements.forEach(function (requirement) {
          let found = false;

          // check all user items; if it's a requirement, set found to true for that item
          this.items.forEach(function (item) {
            if (item === requirement) {
              found = true;
            }
          });

          // if found is false, you're missing at least one requirement - say so
          if (found === false) {
            metAllRequirements = false;
            resultText += requirement.failText;
          }
        });

        // if all items were found, enter the room and show the room text
        if (metAllRequirements === true) {
          resultText = this.getText;
        }
      }

      // if there aren't any items required to enter the room, just show the room text
    } else {
      resultText = this.getText;
    }

    // return result text, whatever it wound up being
    return [resultText, metAllRequirements];
  }
}
