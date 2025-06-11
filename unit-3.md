# **Unit 3: Game Lab Programming Syllabus**

---

## **Week 4: Introduction to Game Lab & Basic Drawing**

**Focus:**
Launch the unit with the problem-solving process and begin hands-on programming using Game Lab.

---

### **Daily Breakdown**

#### **Monday: Unit 2 Wrap-up**

## **Monday: Unit 2 Wrap-up**

### **Goals**

The main goals for today are to review core HTML and CSS concepts, help everyone consolidate their learning by creating a personal cheatsheet, and reinforce understanding of how files work both online and locally. There will also be time to finish one-on-one interviews or code reviews to check in on individual progress.

---

### **Topics Covered**

Today’s topics include a fundamental review of HTML and CSS, an introduction to how clients and servers interact with web files, and hands-on practice downloading, editing, and running files locally. The class will also focus on synthesizing learning by building a custom cheatsheet and sharing it with the group.

---

### **Materials**

* [How Clients and Servers Work with HTML (Slides)](https://1drv.ms/p/c/9ee72c2b226257cc/EX6p4w74gvRPuGVmh0QRu1wBjFnMKVI_bWZHPQpl6V9Ahg)
* [Guide: Creating an HTML & CSS Cheatsheet](https://github.com/rmccrear/codex-lv1-may-2025/blob/main/guides/creating-html-and-css-notes.md)
* [Guide: Running HTML & CSS Files Locally](https://github.com/rmccrear/codex-lv1-may-2025/blob/main/guides/local-development.md)
* Moodle forum for sharing completed cheatsheets

---

### **Plan for Monday**

**Hour 1:**

* Short lecture: Clients & Servers (clarify the concept of files)
* Introduce the cheatsheet activity
* Demonstrate how to download, edit, and run HTML/CSS files from [code.org](http://code.org)

**Hours 2–3:**

* Work in groups to:

  * Download project files
  * Create and refine HTML & CSS cheatsheets
* Post completed cheatsheets to the Moodle forum
* TAs continue one-on-one code interviews as needed

#### **Tuesday: Lesson 1 & Lesson 3**

* **Lesson 1: Programming for a Purpose**

  * Investigate user-focused design for animations/games
  * Prototype with paper or digital templates
* **Lesson 3: Drawing in Game Lab**

  * Learn Game Lab IDE
  * Practice drawing commands:

    * `rect(x, y, w, h)`
    * `ellipse(x, y, w, h)`
    * `fill(color)`
  * Emphasize sequencing and debugging

#### **Wednesday: Lesson 4 & Lesson 5**

* **Lesson 4: Shapes and Parameters**

  * Use parameters for width/height
  * Introduce `background(color)`
  * Define: *parameter*
* **Lesson 5: Variables**

  * Store and label data (numbers, text, color)
  * Syntax: `var x = ___`
  * Define: *variable*

#### **Thursday: Lesson 6**

* **Lesson 6: Random Numbers**

  * Use `randomNumber()` for varied program behavior
  * Update and reuse variables

#### **Friday: Lesson 7**

* **Mini-Project: Robot Faces**

  * Combine shapes, variables, randomness
  * Apply the structured problem-solving process

---

## **Week 5: Sprites, Text & Animation Introduction**

**Focus:**
Move from drawing to objects, text, and the building blocks of animation.

---

### **Daily Breakdown**

#### **Monday: Lesson 8 & Lesson 9**

* **Lesson 8: Sprites**

  * What is a sprite? How are sprites created and controlled?
  * Use `drawSprites()`
* **Lesson 9: Sprite Properties**

  * Modify: `sprite.x`, `sprite.y`, `sprite.rotation`, `sprite.scale`
  * Use *dot notation* for properties

#### **Tuesday: Lesson 10**

* **Lesson 10: Text**

  * Add text to the screen
  * Set text size, position using arguments

#### **Wednesday: Lesson 11**

* **Mini-Project: Captioned Scenes**

  * Plan and create a scene using sprites and text
  * Focus on the problem-solving process

#### **Thursday: Lesson 12 & Lesson 13**

* **Lesson 12: The Draw Loop**

  * Introduce `draw()` loop for animation
  * Discuss code inside/outside the loop
* **Lesson 13: Sprite Movement**

  * Animate sprites with the *counter pattern*:
    `sprite.x = sprite.x + 1`

#### **Friday: Lesson 14**

* **Mini-Project: Animation**

  * Plan and code an animated scene
  * Emphasize creative movement and planning

---

## **Week 6: Conditionals & User Input**

**Focus:**
Make programs interactive with conditional logic and user input.

---

### **Daily Breakdown**

#### **Monday: Lesson 15**

* **Conditionals & Booleans**

  * Use `if (condition) { ... }`
  * Operators: `==`, `!=`, `<`, `>`, etc.

#### **Tuesday: Lesson 16**

* **Keyboard Input**

  * Check for key presses: `keyDown(code)`
  * Use input to control sprites

#### **Wednesday: Lesson 17**

* **Mouse Input & If-Else**

  * Respond to mouse: `mouseWentUp()`, `mouseDidMove()`
  * Use `if-else` for different outcomes

#### **Thursday: Lesson 18**

* **Project: Interactive Card**

  * Bring together: drawing, variables, sprites, input, and conditionals
  * Plan and build an interactive greeting card

#### **Friday: Lesson 19**

* **Velocity**

  * Simplify movement with:
    `sprite.velocityX`, `sprite.velocityY`, `sprite.rotationSpeed`

---

## **Week 7: Collisions & Complex Movement**

**Focus:**
Introduce abstractions, collisions, and more complex motion.

---

### **Daily Breakdown**

#### **Monday: Lesson 20**

* **Collision Detection**

  * Use `isTouching()` as an abstraction

#### **Tuesday: Lesson 22**

* **Complex Sprite Movement**

  * Combine velocity and counter pattern
  * Simulate gravity and more advanced motion

#### **Wednesday: Lesson 23**

* **Advanced Collisions**

  * Learn collision blocks:

    * `collide()`
    * `displace()`
    * `bounce()`
    * `bounceOff()`

#### **Thursday: Lesson 21**

* **Mini-Project: Side Scroller**

  * Build a side-scroller game using velocity and collisions
  * Emphasize planning and problem-solving

#### **Friday: Lesson 25**

* **Functions**

  * Define and call functions:
    `function myFunction() { ... }`
  * Build your own abstractions to simplify code

---

## **Week 8: Game Design & Final Project**

**Focus:**
Synthesize all prior skills to plan, design, and build an original game.

---

### **Daily Breakdown**

#### **Monday: Lesson 26**

* **The Game Design Process**

  * Plan variables, sprites, and functions for a new game
  * Analyze a sample game from a design perspective

#### **Tuesday–Friday: Lesson 27 & Lesson 28**

* **Lesson 27: Using the Game Design Process**

  * Independently complete project planning for a game
* **Lesson 28: Project - Design a Game**

  * Plan, build, and iterate on an original game
  * Collaborate and participate in peer review

---

**Note:**
Some days combine two lessons or compress multi-day projects. Adjust pacing based on group needs; large projects may need extra independent work or extension time.
