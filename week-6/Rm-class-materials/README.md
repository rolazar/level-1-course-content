# JavaScript 2 Notes

This is a set of notes that I've been thinking as I prepare the the JavaScript 2 lessons.

## List of topics

* Loops
  * for...of
  * Changing all tags with document.querySelectorAll
  * Bonus...iterating n from 0..100
* Objects, variables, values and references
  * Examples: Game of telephone vs. school newsletter.
  * Examples: Excel spreadsheet and macros.
* Conditional blocks: if else
* statement vs. expression... tertiary operator.
* Callbacks (Review)
* Touch on other statements such as switch, try/catch, for, for..in

## Loops

Loops are actually a simple idea.

In jQuery it is just...

    $("p").css({color: "red"});

In Python we use `for`` without an index.

I will teach the for...of style loops first, since most of the time we do not need and index and its syntax is easier.

Demo:

    headers = document.querySelectorAll("h1");
    for(header of headers) {
      h.style.color = "red";
    }

Practicing with this will make it pretty easy to get a handle on. And there is a lot of bang for your buck.

(Later in the class or course we will add a `const` or `let` to the `header` variable and show why it is better. Maybe we can even introduce a bug, and fix it with a `const`! Once the have the concept of a loop, we can also introduce the other loops JS has to offer.)

Homework: Given an html page with 10 p tags, 10 h1 tags, 20 span tags, and other tags, select them out and style them all!

## Objects, variables, values and references

Students should be familiar with objects, variables and values. They will have trouble with the concept of a reference. If students are ready, we can introduce pass by reference now, if not, we can just stick to practicing passing values around to other variables.

(Actually, a lot of programming is just renaming variables in different contexts. In React, we'll see this again in "prop drilling". Passing arguments is another example of "playing telephone". Variable scope adds another wrinkle to this.)

We can use an analogy of a game of telephone. Once the "message" leaves your hands, it is no longer your responsibility. That is pass by value.

Pass by reference is more like a school bulletin where everyone has a reference to the same "document". If I pass you a bulletin, you will have the same copy that I have. The responsibility for the content is in the hands of the publisher of the document.

In our demo, we can illustrate this with a series of variables and statements that assign one to the next...

    x = 1;
    y = x;
    z = y;

    or

    aliceSays = "Arron loves Betty";
    bobSays = aliceSays;
    carolSays= bobSays;
    derekSays = carolSays;
    console.log(derekSays);

We could contrast this with...

    schoolBulletin = {
      news: "Cougars win!"
    }

    alicesPaper = schoolBulletin;
    bobsPaper = schoolBulletin;
    carolsPaper = schoolBulletin;
    dereksPaper = schoolBulletin;
    console.log(dereksPaper.news);

    // Showing the contrast...
    console.log(derekSays);
    aliceSays = "Andy Love Betty";
    console.log(derekSays);
    // vs
    console.log(dereksPaper.news);
    schoolBulletin.news = "Bulldogs win!";
    console.log(dereksPaper.news);

The analogy isn't perfect, but it gets to how to manage responsibility for data and what choices you make when you pass by value vs. reference.

### Homework

The point of this exercise is to practice assigning and re-assigning values in different contexts. A secondary point is to look at pass by reference data types.

You could of course do this more efficiently using the same variable again and again. But we want to show students that it doesn't matter what the variable is called.

Play the telephone game with different variables.

Like: the aliceSays, bobSays example.

Play it adding something to a number to increment it, and other simple variations.

Like: add your name to the guestbook.

  guestbook: {
    "alice": "Hi!",
    "bob": "I had a wonderful time!"
  }

  carolsBook = guestBook;
  carolsBook.carol = "Hope to come again!"

Example: changing a name....

    scooby = {
      name: "Scoobs",
      age: 2
    }
    shaggysDog = scooby;
    fredsDog = scooby;
    fredsDog.name = "Scooby";
    shaggysDog; // "Scooby" or "Scoobs"?

Example with an array:
 
    dogs = ["Scooby"];
    thelmasDogs = dogs;
    fredsDogs = dogs;
    
    thelmasDogs[1] = "Scrappy Doo";
    console.log(fredsDogs[1])

### Notes on variables

Students are still having trouble comprehending the concept of a variable and will need some time to practice with the example code. There were some "ah-ha" moments when students discovered that there was a difference depending on the order of code.

There is value in this activity even if students don't completely grasp the idea of value vs. reference. They will get practice with assigning and re-assigning variables.

The bonuses also give a change to practice with callback functions and html.

Some other topics we talked about during Q&A were variable scoping and let vs. var.
