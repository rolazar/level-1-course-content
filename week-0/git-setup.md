# Git Setup

## GitHub setup

TODO: General setup...

## Troubleshooting

A few thing that go wrong when installing.

* When using VSCode to clone a repo, you might not be "logged in" to GitHub in VSCode. Student can encounter this and get stuck at this point. Since cloning can be one of the first things you do, it can be jarring to run into this. The flow will be: Open new window -> Clone From GitHub -> Login prompt. They will be taken to a browser window and asked to "install". (This just means to allow VSCode to connect.) Then they must go back to VSCode. They may have to it again.
* When committing for the first time, there will be an error if the name and email have not been set up in git globally. The usual solution is to open the terminal and type in the commands `git config --global user.name "John Doe"` and `git config --global user.name "John Doe"`. Students will often have to be walked through this. An alternative is to use GitHub Desktop and edit this is setting with the GUI. Both ways work, so it will be up to the teach to decide which is more appropriate. If you want to introduce the command line earlier, the first will be a good idea. If you want to put it off and make the install process faster, using GitHub Desktop might be a good choice.
* Students often have trouble keeping track of which directory they are in. This can lead to lots of git problems, like nested repos. They might open the folder in VSCode above the one they are actually working on. Then the terminal will open in the wrong place, and git commands won't work. So working in the terminal is a challenge. One way to make this easier is to depend on VSCode to clone and open repos. Eventually, students will need to be comfortable with the terminal. Getting them used to the terminal early can be a good idea, but they will need help with that at first. Oh My Zsh will also help to show the directory they are in.