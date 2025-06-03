# AI For Online Classes

[TLDR: Brief demo of NotebookLM](https://drive.google.com/file/d/1Cq-QUTKYodLPTTGmJE-uTThPcF3eEw2E/view?t=1m54s)

## AI

Artificial Intelligence is the future and can't be avoided. Just do a web search an AI pops up. 
Ask it a programming question like, "With JavaScript, how to write a for-loop that counts to 5?" and it gives the answer.
For more complex coding questions, AI chooses the most correct answer, which may or may not have been taught in class.

## Online Classes

Online classes are a great way to save time and money in terms of education, but because of the lack of in-person contact, it is difficult to stop student from using AI to cheat.
One way to discourage cheating is to limit the HTML elements, CSS properties, and JavaScript keywords that can be used in assignments.
AI sometimes has difficulty adhering to those limits, and students are forced to understand the code just enough to modify and contsrain code to the limits.

## NotebookLM

[NotebookLM](https://notebooklm.google.com/) is an AI that gets its answers from the notes that it's given. 
If NoebookLM is asked a question, as long as the answer is in the notes, it'll provide the answer and a thorough explanation of it.
When given class transcripts, class notes, and class sample code, NotebookLM answers questions the way the instructor would answer.

## Set up NotebookLM for class usage

The free version of NotebookLM can accept 50 sources (or documents) with a maximum of 500,000 words per source. 
All students with a free Gmail account have access to the free version of NotebookLM.
Instructors with a workspace account (example: `codex.academy`) have access to the Pro version of NotebookLM.

1. Compile all class notes into a text file. (example: `level-1-notes.md`)
2. Compile all class sample code into a text file. (example: `level-1-code.md`)
3. Compile all class transcripts into a text file. (example: `level-1-transcripts.md`)
4. There will be NotebookLM errors if transcripts exceed the 500,000 words limit.
5. Create a new compilation when limits are exceeded. (example: `level-1-transcripts2.md`)
6. Include thorough timestamps and dates to give NotebookLM more accuracy.
7. Upload the files to a GitHub repository.
8. Select a file in the repository.
9. Click on the `RAW` button at the top right to view file contents on its own web page.
10. Copy the link in the browser address bar.
11. In the `Sources` section of NotebookLM, click on the `Add` button.
12. Scroll down to the `Link` section and click the `Website` button.
13. Paste the URL from the GitHub file.
14. Go to step #8 to add more sources to NotebookLM.

## Updating NoebookLM sources

NotebookLM doesn't reload (or update) the links it's given in the Sources section.
When files in the GitHub repository are updated, NotebookLM must be manually updated.

1. In NotebookLM, mouse over the source that needs updating.
2. Click the 3 dots and select `Remove source`.
3. Follow the instructions in *Setup NotebookLM for class usage* starting from step #8.
