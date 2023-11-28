// Please don't modify this file.

function setMessages () {
  console.log("resetting messages in DOM");
  let elm, message;
  // Note: don't declare aliceSays, bobSays, etc.
  // If you re-declare them here, they will not refer to the same value as they do in the other file. (they won't be global.)

  elm = document.querySelector("#alice-says");
  message = aliceSays;
  console.log(`Alice says: ${message}`);
  elm.textContent = message

  elm = document.querySelector("#bob-says");
  message = bobSays;
  console.log(`Bob says: ${message}`);
  elm.textContent = message

  elm = document.querySelector("#carol-says");
  message = carolSays;
  console.log(`Carol says: ${message}`);
  elm.textContent = message

  elm = document.querySelector("#dan-says");
  message = danSays;
  console.log(`Dan says: ${message}`);
  elm.textContent = message

  elm = document.querySelector("#ellie-says");
  message = ellieSays;
  console.log(`Ellie says: ${message}`);
  elm.textContent = message

  elm = document.querySelector("#frank-says");
  message = frankSays;
  console.log(`Frank says: ${message}`);
  elm.textContent = message

  elm = document.querySelector("#greg-says");
  message = gregSays;
  console.log(`Greg says: ${message}`);
  elm.textContent = message

  elm = document.querySelector("#harry-says");
  message = harrySays;
  console.log(`Harry says: ${message}`);
  elm.textContent = message

  elm = document.querySelector("#ivy-says");
  message = ivySays;
  console.log(`Ivy says: ${message}`);
  elm.textContent = message

  elm = document.querySelector("#jack-says");
  message = jackSays;
  console.log(`Jack says: ${message}`);
  elm.textContent = message
}
