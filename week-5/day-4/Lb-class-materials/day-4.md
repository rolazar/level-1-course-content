# Week 5: Day 4 – Deployment with GitHub Pages

## Session Outline

Focus: Introducing students to GitHub Pages for deploying static sites, starting with a `README.md` and progressing to a basic HTML website.

## Objectives

1. Understand the basics of deploying static sites using GitHub Pages.
2. Deploy a `README.md` file as a starting point for GitHub Pages.
3. Transition to deploying a basic HTML website and observe the deployment process.

## Key Concepts

### Objective 1: Understand the Basics of Deploying Static Sites Using GitHub Pages

**What is a Static Site?**

- **Definition**: A static site consists of fixed content and displays the same information to every visitor. It is typically made up of HTML, CSS, and JavaScript files that don't require server-side processing.

- **Characteristics of Static Sites**:

  - **Simplicity**: Easier to create and host due to their simple architecture.
  - **Performance**: Faster loading times as they require less server-side processing.
  - **Security**: Lower risk of web-based attacks as they don't involve dynamic content generation or databases.
  - **Scalability**: Easier to scale as they can be served from multiple locations globally.

- **Use Cases**: Ideal for blogs, portfolios, company websites, and landing pages where content changes are infrequent.

**Deploying with GitHub Pages**

- **Introduction to GitHub Pages**: A free hosting service provided by GitHub that allows you to host static websites directly from your GitHub repository.

- **Key Features**:

  - **Ease of Use**: Simple setup process, especially for users already familiar with Git and GitHub.
  - **Version Control**: Integrates seamlessly with Git, allowing for version tracking and collaborative work.
  - **Custom Domains**: Option to use a custom domain instead of the default `github.io` domain.
  - **Automatic Deployment**: Changes pushed to the designated GitHub repository are automatically deployed.

- **Getting Started**:
  - **Create or Select a Repository**: GitHub Pages can be deployed from any repository.
  - **Enable GitHub Pages**: This can be done in the repository settings by specifying the branch and directory to deploy.

### 1. Introduction to GitHub Pages

- Overview of GitHub Pages as a hosting platform for static websites.
- The process of enabling GitHub Pages in a repository.

```bash
# Enable GitHub Pages for the repository
# Go to repository settings, find the 'Pages' section, and select the branch to deploy (usually 'main')

# The URL for the deployed site is displayed after enabling GitHub Pages
# It will be in the format: https://{username}.github.io/{repository}
```

### 2. Deploying a README.md

- **Step-by-step guide to deploy a `README.md` as a static site**:

  - The `README.md` file is often used as the default page for a GitHub Pages site when no `index.html` is present.
  - It's a great way to introduce the project and provide essential information.

- **Discussion on the significance of `README.md` in GitHub repositories**:

  - A well-crafted `README.md` is crucial for introducing and explaining a project.
  - It often includes the project title, description, installation instructions, usage examples, and contact information for the contributors.

- **Example README.md Content**:
  - Below is a simple `README.md` file structure with an image and basic content.

```markdown
# Project Title

Welcome to my project! This repository contains all the necessary files and instructions for this project.

## About the Project

This section provides an overview of the project, its features, and its purpose.

![Project Image](URL_to_project_image.jpg)

## Getting Started

Instructions for how to clone, setup, and run the project.

## Contributors

List of people who have contributed to this project.

## Contact

Details on how to contact the project maintainers or contributors.
```

- **Adding an Image to README.md**:

  - You can host the image directly in your GitHub repository or use an external link.
  - Use the markdown syntax `![Image Description](image_url)` to embed the image in the README.

- **Customizing the README**:
  - Encourage students to personalize their README files with additional sections like 'Installation', 'Usage', and 'License'.

```bash

# Open VS Code and create a new file named 'index.html'
# Add basic HTML content to the file

# Add and commit the HTML file

git add index.html
git commit -m "Add initial index.html file"

# Push the changes to GitHub

git push origin main
```

```

## Hands-On Exercise: Deploying on GitHub Pages

- Initial exercise: Students deploy their `README.md` using GitHub Pages.
- Advanced exercise: Students clone their repository, add an `index.html`, and deploy it using GitHub Pages.
- Observing the transition from `README.md` to `index.html` in their GitHub Pages site.

## Assignment Preparation

- Instructions for creating a basic `index.html` file.
- Guidance on using Git for adding, committing, and pushing changes to deploy the HTML file.

## Breakout Rooms: Practicing Deployment

- Students work in groups to troubleshoot and successfully deploy their static sites.
- Emphasis on the ACP (Add, Commit, Push) process in deployment.

## Conclusion

- Recap of the steps for deploying static sites using GitHub Pages.
- Discussion on the practical applications of GitHub Pages in sharing and showcasing projects.
- Preview of Day 5: Consolidating the week's learnings and preparing for the final project.

---

**Note for Instructors**: Encourage experimentation with HTML content and reinforce the importance of the ACP process in deployment. Be prepared to assist students with common issues related to GitHub Pages deployment.
```
