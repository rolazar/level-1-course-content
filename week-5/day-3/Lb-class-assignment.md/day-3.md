
# Week 5: Day 3 – Collaborative Workflows in Git: Branching, Merging, and Conflicts

## Overview

This session will delve into Git's branching, merging, and conflict resolution, with a focus on practical exercises using VS Code.

## Detailed Schedule

### 6:30 PM - 7:30 PM: Lecture - Branches and Merging in Git

#### Setting Up for the Demo (5 minutes)

- Explain the setup process for a Git demo using VS Code.

```bash
# Create a new directory for the demonstration and navigate into it
mkdir branching-demo
cd branching-demo

# Initialize a new Git repository
git init
```

- Open VS Code manually and use "Open Folder" to access the 'branching-demo' folder.

#### Understanding Branches in Git (15 minutes)

- Discuss branches in Git, emphasizing their role in isolating development work without affecting other parts of the project.

```bash
# Create a main file in VS Code and add initial content
# Save the file as 'main.txt' in the 'branching-demo' folder

# Add and commit the file to the main branch using the terminal in VS Code
git add main.txt
git commit -m "Initial commit on main branch"
```

#### Creating and Navigating Branches (20 minutes)

- Show how to create and switch to new branches within a project.

```bash
# Create a new branch named 'feature-branch' and switch to it
git switch -c feature-branch

# In VS Code, add a new file 'feature.txt' and add some content
# Save the file in the 'branching-demo' folder

# Add and commit the new file to the feature branch
git add feature.txt
git commit -m "Add feature file"
```

#### The Merge Operation (20 minutes)

- Explain merging branches and its importance in integrating features into the main project.

```bash
# Switch back to the main branch
git switch main

# Merge the feature branch into the main branch
git merge feature-branch

# Use VS Code to review the merged content
# Show the current state of the repository using the terminal in VS Code
git log --oneline
```

### 7:30 PM - 8:30 PM: Hands-On Exercise - Branching and Merging

#### Exercise Setup (10 minutes)

- Guide students to create a new directory and initialize a Git repository for the exercise.

#### Practicing Branching (20 minutes)

- Walk students through creating a feature branch and making changes using VS Code.

```bash
# Instruct students to create a new branch named 'student-feature'
git switch -c student-feature

# Create a new file in VS Code named 'student-feature.txt' and add content
# Save the file in their project folder

# Stage and commit the new file
git add student-feature.txt
git commit -m "Add student feature"
```

#### Practicing Merging (30 minutes)

- Teach students how to merge their feature branch into the main branch and resolve any conflicts using VS Code.

```bash
# Instruct students to switch back to the main branch
git switch main

# Make a conflicting change in the 'main.txt' file using VS Code
# Save the updated file

# Commit the change in the main branch
git add main.txt
git commit -m "Update main.txt in main branch"

# Attempt to merge the feature branch into the main
git merge student-feature
# Guide students through conflict resolution using VS Code if necessary
```

#### Reflection and Discussion (30 minutes)

- Encourage students to share their experiences and discuss challenges encountered during the exercise.

### 8:30 PM - 9:30 PM: Breakout Rooms - Collaborative Conflict Resolution

- Arrange breakout rooms where students practice resolving merge conflicts, using VS Code, in a collaborative setting.

## Conclusion

- Summarize key takeaways about branching, merging, and conflict resolution in Git.
- Emphasize the practical application of these skills in collaborative coding projects.
- Preview the upcoming session on advanced Git topics and GitHub Pages deployment.
