# JavaScript 2 Notes

## List of topics

* Loops
  * for...of
  * Changing all tags with document.querySelectorAll
  * Bonus...iterating n from 0..100
* Objects, variables, values and references
  * Game of telephone vs. school newsletter.
  * Excel spreadsheet and macros.
* Conditional blocks: if else
* statement vs. expression... tertiary operator.
* Callbacks (Review)
* Touch on other statements such as switch, try/catch, for, for..in


## Loops

Loops are actually a simple idea, but can become complicated. 

In jQuery it is just...

    $("p").css({color: "red"});

In Python we use `for`` without an index.

I choose to teach the for...of style loops first, since most of the time we do not need and index and its syntax is easier.

Demo:

    headers = document.querySelectorAll("h1");
    for(header of headers) {
      h.style.color = "red";
    }

Practicing with this will make it pretty easy to get a handle on.

(Later in the class or course we will add a `let` to the `header` variable and show why it is better. Maybe we can even introduce a bug, and fix it with a `let`!)

Homework: Given an html page with 100 p tags, 100 h1 tags, 200 span tags, and other tags, select them out and style them all!

## Objects, variables, values and references

Students should be familiar with Objects, variables and values. They will have trouble with the concept of a reference. 

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
