# ToDo App Backend

This repository contains the backend code for a ToDo application built using Node.js.

## Setup

Follow the steps below to set up and run the backend server:

1. **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Configure the environment variables:**
    - Create a `.env` file in the root of the project.
    - Add the following variables and replace the placeholders with actual details:
        ```env
        PORT=5000  # Specify the desired port number
        DATABASE_URL=<your-database-url>  # Replace with your database connection string
        ```

4. **Start the server:**
    ```bash
    npm start
    ```

The server will be running at `http://localhost:<PORT>`.

## API Endpoints

- **GET /api/tasks**: Retrieve all tasks.
- **GET /api/tasks/:id**: Retrieve a specific task by ID.
- **POST /api/tasks**: Create a new task.
    - Request Body:
        ```json
        {
          "title": "Task Title",
          "description": "Task Description"
        }
        ```
- **PUT /api/tasks/:id**: Update a task by ID.
    - Request Body:
        ```json
        {
          "title": "Updated Task Title",
          "description": "Updated Task Description"
        }
        ```
- **DELETE /api/tasks/:id**: Delete a task by ID.

## Environment Variables

- **PORT**: The port number on which the server will run.
- **DATABASE_URL**: The connection string for the database.

## Database

This application uses a [MongoDB](https://www.mongodb.com/) database to store tasks. Make sure to provide the correct `DATABASE_URL` in the environment variables.

Feel free to customize and extend this code for your specific ToDo application needs. If you have any questions or issues, please open an [issue](<repository-url>/issues) in this repository.
