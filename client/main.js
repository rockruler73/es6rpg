//require the game library in the client
// we use "require" here, but browsers don't, so we have to use browserify to bundle up the code and dependencies
//which will allow require() to work in the browser the same way it does in Node :D
const game = require('./text-rpg-engine');

// Add a room (by default will be beginning room since it was first added)
const startRoom = game.addRoom('Beginning', 'This is the beginning room');
// Add a second room (by default will be winning room since it was added last)
const endRoom = game.addRoom('SecondRoom', 'You did it! You won!');
// Add required item to room
endRoom.requirements.push('accessKey');

// Add room prompts
startRoom.addPrompt(
    'look',
    ['look room', 'look at room', 'search room', 'examine room', 'look in'],
    {
        'successText': 'You see a room with a door to the right and a statue in the middle.'
    }
);

startRoom.addPrompt(
    // name of prompt (required)
    'Go right',
    // keywords that will activate prompt (required)
    ['go right', 'move right', 'open right', 'enter right', 'door right', 'right door'],
    // results of prompt
    {
        // successful prompt result text (required)
        'successText': 'You enter in the access code "14052" and successfully open the door.',
        // failed prompt result text (optional)
        'failText': 'The door is locked with an access code!',
        // room to enter as result of prompt (optional)
        'roomToEnter': 'SecondRoom',
        // items added to inventory after successful prompt result (optional)
        'itemsGiven': 'trophy'
    },
    // required items to successfully do prompt (optional)
    ['accessKey']
);

game.init();

// Send user input to our game (on pressing 'Enter' in the form)
document.getElementById('input').addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        game.userSend(document.getElementById('input').value);
        document.getElementById('input').value = '';
    }
});