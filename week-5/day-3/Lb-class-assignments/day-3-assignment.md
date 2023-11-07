# Week 5: Day 3 - Collaborative Workflows in Git: Branching, Merging, and Conflicts

Instructions:

Following the lecture on Git branches and the merging process, it's time to put your knowledge into practice, simulating a realistic workflow in preparation for the next class session.

## Part 1: Branching Mastery

- **Create a Feature Branch**: In your forked and cloned repository, create a new branch named "feature-yourname" where "yourname" is your name or a chosen identifier. Use the command `git switch -c feature-yourname`.

- **Make a Minor Change**: Inside your feature branch, create a new text file (e.g., `branching-merging.txt`) and add any content to it.

- **Prepare for Merge**: Commit your change with a meaningful message using `git commit -m "Your message"`.

## Part 2: Conflict Resolution Challenge

- **Create a Conflict**: Switch back to the main branch using `git switch main` and make a different change in the same file (`branching-merging.txt`).

- **Merge and Resolve Conflict**: Try merging your feature branch into the main branch using `git merge feature-yourname`. You will encounter a merge conflict.

- **Resolve the Conflict**: Manually resolve the conflict in the file by editing to combine changes from both the main and feature branches. Commit the resolved conflict with `git commit`.

## Part 3: Reflect and Share

- **Reflection**: Write a brief reflection in `branching-merging.txt` about your experience with branching and resolving merge conflicts. Discuss any challenges and how you overcame them, emphasizing the role of careful planning and organization in such processes.

## Submission:

- **Push to GitHub**: Push your committed changes, conflict resolution, and reflection to your forked repository. Ensure your changes and the resolved conflict are clearly visible.

- **Submit the Link**: Submit the link to your forked repository in the "Your work" card.

This exercise is a key step in understanding Git's role in collaborative development and conflict resolution.

# Rubric

## Day 3 Collaborative Workflows in Git: Branching, Merging, and Conflicts - /20

### Branching Mastery - /10

- **Fully Achieved - 10 pts**

  - Successfully created a feature branch.
  - Created `branching-merging.txt` with content.
  - Prepared successfully for a merge operation.

- **Partially Achieved - 5 pts**

  - Created a feature branch.
  - Created `branching-merging.txt` with content.
  - Did not prepare successfully for a merge operation.

- **Not Achieved - 0 pts**
  - Did not create a feature branch.
  - Did not create `branching-merging.txt` with content.
  - Did not prepare for a merge operation.

### Conflict Resolution Challenge - /10

- **Fully Achieved - 10 pts**

  - Successfully created a conflict within their own work.
  - Successfully merged the feature branch into the main branch.
  - Successfully resolved the conflict while incorporating changes from both branches.

- **Partially Achieved - 5 pts**

  - Created a conflict within their own work.
  - Merged the feature branch into the main branch.
  - Did not successfully resolve the conflict while incorporating changes from both branches.

- **Not Achieved - 0 pts**
  - Did not create a conflict within their own work.
  - Did not merge the feature branch into the main branch.
  - Did not resolve the conflict while incorporating changes from both branches.
