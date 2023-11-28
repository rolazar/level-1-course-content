# Game of telephone

## Introduction

In this assignment, you will get practice with assigning variables with values and references.

There are 10 people in the game of telephone. Each person has a variable in JavaScript, and a `span` in HTML. The variable will be called `nameSays` (for example `aliceSays`, or `bobSays`). If you set the variable of the person then the person's message will be set in the DOM. (The DOM will be updated by the function `setMessages` located in `messages.js`).

Your job is to set each person's variable one-at-a-time in `script.js`. You can set them however you want, but we would like to imitate a game of telephone. So, you should set them like this...

    aliceSays = 'Kathy loves Larry';
    bobSays = aliceSays;
    carolSays = bobSay;
    ... and so on ...

## Detailed instructions

You will only need to edit the file called `script.js`. You won't need to go into `index.html` or `messages.js`, but you can look at them if you want to.

1. Go to `index.html` and run `Live Preview` to see the code run as you work.
2. Go to `script.js`.
3. Set the variables for the ten people. (`aliceSays`, `bobSays`, `carolSays`, and so on...)
4. Make sure it works, and all the people have the same message.


Now move on to the school bulletin.

1. Navigate to `school-bulletin.html` in your browser or preview panel so you can see your work for the next section.
2. Go to `script-2.js` in VSCode.
3. Set the variables for each person (alicesBulletin, bobsBulletin, carolsBulletin, and so on...)
4. Watch how each person's message changes as you set the variables.
5. Change the value of `schoolBulletin.message` to a different message. (experiment with changing it in different places. In the object literal, before the other variables are set, and after the other variables are set. Do you see any difference?)
6. Go back to `script.js`. Change the value of some of the messages. Experiment with changes them in different places. What happens?
7. Report: in the comment of the Homework assignment write your observations about what happens when the variables change. Write 2-3 sentences to describe what you see. (If you are not sure, that is OK. Just write 2-3 sentences to ask a question or express what you are confused about.)

### Bonus for telephone game

* make a button that will change the message just for Alice. (Hint: be sure to call `setMessages()`, too.)
* make a button that will change the message just for Bob.
* make a button that will change all the messages.
* Extra bonus: make a text input that will set the message for Alice.
* Extra bonus: make a text input that will set the message for Jack.

### Bonus for School Bulletin

* Add a text input that can change the message. (This will change all the messages. Why?)
