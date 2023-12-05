# Chromebook Setup

This guide follows the blog post here: https://code.visualstudio.com/blogs/2020/12/03/chromebook-get-started

## Activating Development Mode

1. Go to Settings -> Advanced -> Linux -> Setup Linux.
2. Specify how much space you will devote to linux. Don't use all your space for linux. Between 2 GB and 10 GB should be enough
3. When finished, terminal should open. You can also get to terminal through the Terminal App, then clicking on "Penguin" after it opens.

## Opening the Terminal

To open the terminal...

1. Go to Apps -> Linux apps -> Terminal
2. This will open the "Settings" of the Terminal app. Under where it says "Linux", there should be a line that says "Penguin". Clicking on "Penguin" will open the terminal.

![screen shot of opening terminal](img/chromebook-open-terminal.png)

## Installing VSCode

First install Gnome Keyring

    sudo apt-get update
    sudo apt-get install -y gnome-keyring

In your terminal, find out if you have 23 or 64 bit arm chip.

    dpkg --print-architecture


Then download the .deb installer for arm 32 or arm 64. It is less than 100MG. Double click on the download install it. *If you've allocated all your available space to the linux partition, you might not have space for the download. So be sure you didn't use up all the space during the Linux installation stage.

It should install.

## Post install

You should get a GitHub account and log in to GitHub with VSCode in order to be able to clone and sync your repositories. To login click on the accounts icon near the bottom left of the screen.

![VSCode accounts screenshot](img/VSCode-accounts.png)


