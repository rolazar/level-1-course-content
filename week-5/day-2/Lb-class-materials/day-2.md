# Week 5: Day 2 – Deep Dive into Git: Cloning, Committing, and Syncing Changes

## Overview

We will apply what we learned about Git to clone repositories, make commits, and sync changes, with a focus on hands-on practice.

## Detailed Schedule

### 6:30 PM - 7:30 PM: Lecture - Advanced Git Operations

#### Advanced Git Commit Cycle (20 minutes)

- Introduce the `git add` and `git commit` commands to stage and save changes.
- Discuss the importance of writing meaningful commit messages.

```bash

# Navigate to Desktop and create a new directory for the project

cd Desktop
mkdir GitProject
cd GitProject

# Initialize a new Git repository

git init

# Create a new file and open it in VS Code

touch README.md

# Optionally, open VS Code in the current directory and edit the file from there

code README.md

# Add changes to the staging area

git add README.md

# Commit changes with a meaningful message

git commit -m "Initial commit with README"

```

### Instructor Notes for Initializing a Git Repository

Before students begin working with Git, they need to understand what a repository is and how it's initialized. Here are some key points to cover:

- A Git repository is like a project's workspace where all the version history is stored.
- The `git init` command is used to start a new repository. It's the first command you use in a new project.
- Explain that initializing a repository will create a hidden `.git` directory. This is where Git keeps all the metadata for the repository's history.
- Emphasize that `git init` should be run in the root of the project directory. If it's run in the wrong place, it could lead to confusion about where files are being tracked.
- Show students how to check for the `.git` directory with `ls -a`, which lists all files, including hidden ones.
- Mention that once a repository is initialized, they can start adding files to it and track changes with commits.

```bash

# Navigate to the project folder, here assumed to be on the Desktop

cd ~/Desktop/GitProject

# Initialize a new Git repository

git init

# Instructor will demonstrate the creation of the hidden .git directory

ls -a

Explain that we should now see a .git directory, indicating the repository has been successfully initialized

# Add a remote repository and push changes

git remote add origin <remote-repository-URL>
git push -u origin main

# Pull the latest changes from the remote repository

git pull origin main

```

#### Q&A and Troubleshooting (20 minutes)

- Resolve questions about the commit cycle, pushing, and pulling changes with Git.

### 7:30 PM - 8:30 PM: Hands-On Exercise - The Git Commit Cycle

- Conduct a live exercise where students edit, stage, commit, and push changes to a remote repository.
- Show how to handle updates from the remote repository by pulling them into the local repository.

```bash

# Make changes to README.md and save the file in VS Code

# Stage the edited README.md file

git add README.md

# Commit the changes with a descriptive message

git commit -m "Update README with project details"

# Push the commit to the remote repository

git push origin main

# Pull new files created on GitHub

git pull origin main

```

#### Reflecting on the Commit Cycle (10 minutes)

- Invite students to discuss their experience with Git commands and the commit cycle.

#### Preparing for the Assignment Submission (10 minutes)

- Instruct students on capturing and adding a screenshot to their repository.

```bash

# Assume the screenshot is named 'sync_screenshot.png' and is located on the Desktop

# Navigate to the project directory if you're not already there

cd ~/Desktop/GitProject

# Move the screenshot from the Desktop to the current project directory

mv ~/Desktop/sync_screenshot.png .

# Add the screenshot to the repository

git add sync_screenshot.png

# Commit the screenshot with a message

git commit -m "Add screenshot for assignment verification"

# Push the commit to the remote repository

git push origin main

```

### 8:30 PM - 9:30 PM: Breakout Rooms - Collaborative Git Workflow

- Manage breakout rooms where students practice cloning, committing, pushing, and opening pull requests.

## Conclusion

- Recap the practical aspects of using Git for version control and collaboration.
- Encourage students to apply these skills in their projects.
