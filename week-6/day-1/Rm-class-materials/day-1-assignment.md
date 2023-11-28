# JavaScript 2--Assignment 1

## Introduction

We will be learning about loops!

A loop is a way to do something to many things.

We have been setting style like this:

    let elm;
    elm = document.querySelector("#header-1");
    elm.style.color = "red";

But what if we want to set the style for all the headers at the same time?


    <h1> Chocolate </h1>
    <h1> Cotton Candy </h1>
    <h1> Snickers </h1>
    <h1> Kit-Kat </h1>
    <h1> Charms </h1>

We could set an id on each one, and then do them one at a time...

...or we could use a loop.

    let elms;
    elms = document.querySelectorAll("h1");
    for(elm of elms) {
        elm.style.color = "red";
    }

## Deatiled instructions

Your job is to make 10 `h1` tags, 10 `p` tags and 10 `span` tags. Then set the style on them with a loop.

Before you start, make a fork of this repository. To turn it in, make a Pull Request to this original repository. Turn in the link to the PR.

1. In `index.html`, make 10 `h1` tags.
2. In `script.js`, make a loop that changes the color and backgroundColor of each of the `h1` tags.
3. Do this for your `p` and `span` tags.
4. In `index.html` add a class called "jump" to 10 elements (any elements).
5. In `script.js`, make a loop that changes the `position` and `top` properties of style. Change them to "relative" and "-10px".

### Bonus

* Make a button that will do this `onclick` instead of doing this when the pages loads.
* Try to animate the "jump" with a CSS transition.
* Try to make it so that you can make any element "jump" by clicking on it.
