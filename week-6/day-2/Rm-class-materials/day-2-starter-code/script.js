
// It's a good idea to declare all your variables.
// This will let our JS linter help us find 
// spelling errors among other things.
// Declaring with 'var' will make them global
// variables.

var aliceSays, bobSays, CarolSays, danSays, ellieSays, frankSays, harrySays, ivySays, jackSays;


// this variable is set to a string.
let theMessage = "Kathy loves Larry";

aliceSays = theMessage;
bobSays = aliceSays;
carolSays = bobSays;


// call setNames from 'messages.js'
// to set the messages in the DOM.
setMessages();
