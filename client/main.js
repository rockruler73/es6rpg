//require the game library in the client
// we use "require" here, but browsers don't, so we have to use browserify to bundle up the code and dependencies
//which will allow require() to work in the browser the same way it does in Node :D
const game = require('./text-rpg-engine');

game.init();

// Send user input to our game (on pressing 'Enter' in the form)
document.getElementById('input').addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        game.userSend(document.getElementById('input').value);
        document.getElementById('input').value = '';
    }
});