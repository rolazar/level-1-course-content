# Week 5: Day 5 – Consolidation and Deployment

## Session Outline

Focus: Summarizing the week's content, integrating concepts from local and remote repository management to deploying a project using GitHub Pages.

## Objectives

1. Review and consolidate knowledge of basic terminal commands and Git operations.
2. Demonstrate the creation and linking of local and remote repositories.
3. Apply ACP processes to enhance a project with HTML, CSS, or JavaScript.

## Key Concepts

### 1. Review of Local Repository Creation

- Recap of terminal commands: `mkdir`, `touch`, `ls`, `pwd`.
- Review of Git basics: `git init`, `git status`, `git add`, `git commit`.

```bash
# Create a new directory and initialize a Git repository

mkdir NewProject
cd NewProject
git init

# Create a new file and check its status

touch index.html
git status

# Add and commit the file

git add index.html
git commit -m "Initial commit with index.html"
```

### 2. Creating and Linking Repositories

- Step-by-step process for creating a local repository and a corresponding remote repository on GitHub.
- Demonstrating how to link a local repository to a remote one, and vice versa.

```bash
# Create a new repository on GitHub via the GitHub website

# Link the local repository to the remote repository

git remote add origin [remote repository URL]

# Verify the new remote

git remote -v
```

### 3. Enhancing the Project

- Revisiting the ACP process: Adding HTML, CSS, or JavaScript to the local site.
- Hands-on practice with `git add`, `git commit`, and `git push`.

```bash
# Edit the index.html file in VS Code and add basic HTML structure

# Add and commit the changes

git add index.html
git commit -m "Update index.html with basic HTML structure"

# Push the changes to the remote repository

git push origin main
```

## Hands-On Exercise: Full Project Deployment

- Students start with a local repository, add web content, and connect it to a remote repository on GitHub.
- Implement ACP processes to update the project.

## Breakout Rooms: Collaborative Project Enhancement

- Students work in groups to apply their week's learning on a shared project.
- Focus on repository management, ACP, and deployment.

## Conclusion

- Summarizing key learnings from the entire week.
- Open forum for Q&A, discussing challenges, and sharing project outcomes.
- Encouragement for continued practice and exploration beyond the classroom.

---

**Note for Instructors**: This session is crucial for reinforcing the week's learnings. Ensure that each student is comfortable with the entire workflow from local development to deployment.
