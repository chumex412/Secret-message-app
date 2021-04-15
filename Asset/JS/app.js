// Instantiate Message
const message = new Message(
 document.querySelector('form'),
 document.querySelector('#messageInput'),
 document.querySelector('#encryptedInput') 
)

message.handleEvent();

message.generatURL();