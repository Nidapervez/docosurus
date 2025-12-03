# Physical AI and Humanoid Robotics Book

This is a Docusaurus project for a book on Physical AI and Humanoid Robotics.

## Running the project

To run the project in a local development environment, follow these steps:

1.  Clone the repository.
2.  Install the dependencies by running the following command in the `book-project` directory:
    ```
    npm install
    ```
3.  Start the development server by running the following command:
    ```
    npm start
    ```

## Deploying the project

To deploy the project to GitHub Pages, follow these steps:

1.  Create a new, public repository on GitHub named `physical-ai-humanoid-robotics-book`.
2.  Add the repository as a remote to your local project by running the following command in the `book-project` directory:
    ```
    git remote add origin https://github.com/Nidapervez/physical-ai-humanoid-robotics-book.git
    ```
3.  Push the local repository to the remote repository by running the following command:
    ```
    git push -u origin master
    ```
4.  Deploy the project to GitHub Pages by running the following command:
    ```
    npm run deploy
    ```

After you have completed these steps, your book will be available at `https://Nidapervez.github.io/physical-ai-humanoid-robotics-book/`.
