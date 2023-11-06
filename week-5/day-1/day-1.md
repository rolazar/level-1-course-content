# Week 5: Day 1 – Introduction to Git and Basic Concepts

## Overview

Today marks the beginning of our journey into Git, a cornerstone tool in modern software development. We'll understand what Git is, why it's crucial for developers, and start with the basics of installation and usage.

## Detailed Schedule

### 6:30 PM - 7:30 PM: Lecture - Understanding Git and Installation

#### Understanding Git and Its Importance (20 minutes)

**Introduction to Source Control**:

- Explain source control basics.
- Note: Source control = managing changes to code, essential for collaboration.
- Emphasize its importance in tracking changes and maintaining a history.

**Defining Git**:

- Introduce Git as a distributed version control system.
- Note: Compare with centralized systems (e.g., SVN).
- Key features: branch management, speed, non-linear development.
- Note: Each developer has a complete code history.

**The Prevalence of Git**:

- Discuss Git's widespread adoption.
- Note: Integration with development environments, platforms.
- Mention Git's ecosystem: GitHub, GitLab, Bitbucket.
- Note: Not just for code, but also for project management features.

**Solving Software Development Challenges with Git**:

- Address how Git solves common development issues.
- Note: Include collaboration, version tracking, merge conflicts.
- Give examples: handling complex scenarios like reverting changes.
- Note: Emphasize the utility of Git in real-world scenarios.

**Practical Demonstration**:

- Create a simple HTML project for demonstration.
- Steps: Initialize Git repo, make commits, create and switch branches.
- Note: Show practical use of branches, tracking changes.
- Demonstrate merging branches and resolving merge conflicts.
- Note: Highlight the process of integrating different work streams.

**Conclusion and Q&A**:

- Summarize the session.
- Note: Reiterate the importance of Git in modern development.
- Open the floor for questions.
- Note: Encourage interaction, clarify concepts, demo additional features.

---

#### Installing Git (20 minutes)

**Installing Git on Windows**:

- Download the latest Git version from [git-scm.com](https://git-scm.com/download/win).
- Run the downloaded installer and follow the setup wizard to install Git.
- Accept the default options provided, unless specific customizations are needed.
- Verify the installation by opening the Command Prompt and typing `git --version`.

#### Installing Git on Mac:

- First, check if Git is already installed and its version:

  - Open the Terminal application.
  - Type `git --version` and press Enter.
  - If the version number is 2.23 or higher, you're all set.
  - If Git is not installed or the version is lower than 2.23, proceed with the following steps.

- To install or update Git to the latest version:

  - Go to Git's official download page for macOS https://git-scm.com/download/mac.
  - Click on the "Binary installer" link to download the latest version of Git for macOS.
  - Open the downloaded file and follow the installation prompts to install Git.
  - After installation, reopen Terminal and type `git --version` to verify the installation.

- Note: Using the binary installer ensures that you have the latest version of Git, and it's a straightforward installation process recommended for most users.
- Note: If Git is installed with a lower version than 2.23, a couple of commands may not work, but there are older alternatives. (`git switch` would be replaced with `git checkout`)

#### Installing Git on Chromebooks:

- Enable Linux (Beta) on your Chromebook (Settings > Advanced > Developers).

  - Open the Terminal application.
  - Type `git --version` and press Enter.
  - If the version number is 2.23 or higher, you're all set.
  - If Git is not installed or the version is lower than 2.23, proceed with the following steps.

- Open the Linux Terminal and update your package list with `sudo apt update`.
- Install Git using `sudo apt install git`.
- Verify the installation by typing `git --version` in the Linux Terminal.

#### Verifying the Installation and Basic Git Configuration:

- After installation, confirm Git is working with `git --version`.
- Configure your Git user name and email:
  - `git config --global user.name "Your Name"`
  - `git config --global user.email "your@email.com"`
- These configurations are essential for identifying your commits.

---

**Notes for Instructors**:

- Ensure clarity by demonstrating each step live.
- Prepare for questions on alternative installation methods.
- Use visual aids to explain the Git workflow.
- Encourage students to follow along with the installation.
- Offer resources for troubleshooting common issues during installation.

### Lecture - Git Basics and Basic Terminal Commands

#### Basic Terminal Operations (30 minutes)

**1. `mkdir` - Making Directories**

- Command to create a new directory: `mkdir git-demo`
- Discuss organizing files in directories for project management.

**2. `touch` - Creating Files**

- Command to create a new, empty file in `git-demo`: `touch git-demo/README.md`
- Explain `touch` for creating files and updating timestamps.

**3. Multi-File Creation with `touch`**

- Command to create multiple files in `git-demo`: `touch git-demo/index.html git-demo/styles.css git-demo/script.js git-demo/second-page.html git-demo/third-page.html`
- Discuss efficiency in setting up project structures.

**4. `ls` - Listing Directory Contents**

- Command to list files in `git-demo`: `ls git-demo`, and `ls -l git-demo` for details, `ls -a git-demo` for hidden files.
- Explain listing contents to view project files and directory structure.

**5. `pwd` - Print Working Directory**

- Command to display current directory: `pwd`
- Importance of knowing the current directory in the terminal.

**6. `mkdir` - Making Directories with the `-p` Flag**

- Command to create a new directory structure within `git-demo`: `mkdir -p git-demo/assets/css git-demo/assets/js`
- Discuss the significance of a logical and organized directory structure in project management.

**7. `cp` - Copying Files into a Nested Directory**

- Command to copy `styles.css` and `script.js` into their respective nested directories:
  - `cp git-demo/styles.css git-demo/assets/css/`
  - `cp git-demo/script.js git-demo/assets/js/`
- Talk about organizing project assets and the importance of keeping the original file intact.

**8. `cp` - Copying Files from a Nested Directory to Parent**

- Command to copy `index.html` from `git-demo` to `git-demo/assets`: `cp git-demo/index.html git-demo/assets/index_new.html`
- Explain the use of directory paths and maintaining file versions.

**9. `mv` - Moving and Renaming Files within Nested Directories**

- Command to move and rename `second-page.html` within `git-demo`: `mv git-demo/second-page.html git-demo/assets/about.html`
- Emphasize the concept of moving files within a project and the significance of clear naming conventions for files.

**10. `mv` - Renaming Files after Copying**

- Command to rename `third-page.html` in `git-demo` to `contact.html`: `mv git-demo/third-page.html git-demo/contact.html`
- Discuss renaming strategies and the impact on project clarity and version control.

#### Integrating Terminal Commands with Git (10 minutes)

- Initialize a Git repository with: `git init`
- Use `git status` to show untracked files.
- Stage with `git add .` and commit with `git commit -m "Initial commit"`

#### Understanding Local vs. Remote Repositories

- Spend a few minutes explaining the distinction between local and remote repositories.
- Emphasize that all the files created and managed so far are saved locally on the computer.
- Clarify that these files are not yet on GitHub or any other remote repository.

**Analogy of Built-In Version Control in Word Processors**

- Compare the concept of version control to the 'Save' feature in word processors.
  - Just like you save a document to retain its content for later, Git saves snapshots of your entire project.
- Relate Git's version control to using 'Ctrl + Z' for undoing changes in a file.
  - In word processors, 'Ctrl + Z' lets you revert to previous states of your document, albeit with limitations.
  - Git allows you to revert any changes or go back to any previous version of the project, no matter how complex, and it doesn't lose the 'undo' history when you close the file.
- Mention 'Ctrl + Y' for redoing changes in a file.
  - Similarly, Git has the capability to 'redo' changes or move forward in the commit history if you've undone too much.

**Git's Advantages over Traditional 'Save' Features**

- Git tracks changes at a much granular level — it saves the state of the entire directory, including all files and subdirectories.
- Unlike traditional 'Save', Git retains the history permanently, allowing you to revert to any point in the past, even after the file has been saved, closed, and reopened.
- Git also facilitates collaboration, allowing multiple people to work on the same project without overwriting each other's changes.

**Local vs. Remote in the Context of Git**

- Local repository: The version of your project that resides on your personal computer where you can commit, edit, and manage your files privately.
- Remote repository: The version of your project that is hosted on the internet (e.g., on GitHub), which serves as a central point where all collaborators can share, fetch, and push changes.
- The local repository allows you to work offline and take advantage of Git's features, while the remote repository syncs your changes with others and backs up your work.

**Key Takeaways**

- Git is like a supercharged 'Save' for your entire project, with an unlimited 'undo' and 'redo' capability that works across all files and directories.
- Understanding the difference between local and remote repositories is crucial for effective version control and collaboration.

#### Collaborative Assignment Using GitHub

- Direct the class to first-contributions https://github.com/firstcontributions/first-contributions on GitHub.
- Have students follow the steps in the `README.md` of the repository to make their first contribution.

**Instructor Notes:**

1. **Forking the Repository**

   - Explain that forking is a way to create a personal copy of someone else's project.
   - This allows students to freely experiment with changes without affecting the original project.

2. **Cloning the Repository**

   - Discuss the purpose of cloning, which is to create a local copy of the repository on their computer.
   - Emphasize the use of `git clone` and the importance of the URL that points to their forked version.

3. **Switching to a New Branch**

   - Clarify that branches allow multiple development streams within the same repository.
   - Use `git switch -c` to create and switch to a new branch, encouraging best practices like naming branches meaningfully.

4. **Editing the Contributors.md File**

   - Have students add their name to the list to practice making changes to a file in the repository.

5. **Checking Status with `git status`**

   - Explain that `git status` provides information about the current branch, staged changes, and files not tracked by Git.

6. **Staging Changes with `git add`**

   - Describe how `git add` is used to stage changes for a commit, which is like setting aside changes to be permanently stored in the repository history.

7. **Committing Changes with `git commit`**

   - Discuss the importance of commit messages for documenting the history of the project.
   - Encourage descriptive, concise messages that clearly explain what was done and why.

8. **Pushing Changes with `git push`**

   - Explain that `git push` updates the remote repository with changes made locally on the current branch.
   - It's important for students to understand this is how their changes get back to the main repository on GitHub.

9. **Opening a Pull Request**
   - A pull request is a way to propose changes to the original repository.
   - It's the step where contributions are reviewed before being merged into the project.
   - Discuss the collaborative nature of pull requests and how they facilitate discussion around the proposed changes.

**Conclusion and Next Steps**

- Summarize the steps the students have taken to make their first open-source contribution.
- Encourage students to continue exploring other projects and contributing.
- Reinforce that contributing to open source is not just about code; documentation, design, and other forms of contributions are equally valuable.

### 8:30 PM - 9:30 PM: Breakout Rooms - Installation and Cloning Exercise

- Exercise: Students will practice installing Git, cloning a repository, and exploring basic commands under guidance.
- Encouraging peer-to-peer learning and problem-solving.
