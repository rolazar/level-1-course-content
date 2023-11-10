# Week 5: Day 3 – Review and Practice of Git Basics

## Overview

The focus of today is to reinforce and practice the basic Git concepts and terminal commands. We will revisit the initial steps, then engage in hands-on activities to solidify these skills.

## Detailed Schedule

### 6:30 PM - 7:30 PM: Lecture - Review of Git Basics

#### Revisiting Git Initialization and Basic Commands (20 minutes)

- A quick overview of initializing a Git repository and basic commands like `git status`, `git add`, and `git commit`.

```bash
# Navigate to a new directory to practice

cd Desktop
mkdir PracticeGit
cd PracticeGit

# Initialize a new Git repository

git init

# Create a new file for practicing basic Git operations

touch practice.txt

# Check the status of the repository

git status

# Add the new file to the staging area

git add practice.txt

# Commit the new file with a meaningful message

git commit -m "Add practice.txt for Git practice"
```

#### Terminal Commands for Git Usage (20 minutes)

- Discuss and demonstrate essential terminal commands used alongside Git.

```bash
# List files in the current directory

ls

# Create another file

touch example.txt

# Use 'git add .' to add all new or modified files to the staging area

git add .

# Commit all the staged changes

git commit -m "Add example.txt and update files"
```

#### Q&A and Troubleshooting (20 minutes)

- Resolve questions about Git and terminal commands.

### 7:30 PM - 8:30 PM: Hands-On Exercise - Git Practice

- Guide students through a series of tasks to practice basic Git and terminal commands.

```bash
# Students will modify the practice.txt file

# Open the file in a text editor (e.g., VS Code)

code practice.txt

# After editing, stage the changes

git add practice.txt

# Commit the changes with a descriptive message

git commit -m "Update practice.txt with new content"

# View the commit history

git log
```

#### Group Activity: Git Repository Management (30 minutes)

- Students work in groups to manage a shared repository.

```bash
# Clone a repository provided by the instructor

git clone <repository-URL>

# Navigate to the cloned directory

cd <cloned-repository-name>

# Each student makes changes, commits, and pushes them to the remote repository

# Example commands for each student:

touch studentname.txt
git add studentname.txt
git commit -m "Add studentname file"
git push origin main
```

### 8:30 PM - 9:30 PM: Breakout Rooms - Collaborative Git Practice

- Manage breakout rooms where students practice collaborating on a shared repository.

## Conclusion

- Recap the day's practice on Git basics.
- Encourage students to continue practicing these skills in their own projects.
