# Le Hiboux Test Technique

Welcome to the Le Hiboux Test Technique project! This README will guide you through the process of setting up and using the project.

## Table of Contents

- [Env Files](#env-files)
- [How to Launch](#how-to-launch)
- [How to Use the Project](#how-to-use-the-project)
- [Contributors](#contributors)
- [License](#license)

## Env Files

Before launching the project, you need to create three env files:

1. **rabbitmq.env**: Configure RabbitMQ with the following variables:
    ```
    RABBITMQ_DEFAULT_USER=admin
    RABBITMQ_DEFAULT_PASS=admin
    ```

2. **env**: Set general environment variables:
    ```
    PORT=3000
    ```

3. **server/.env**: Configure the server with database and RabbitMQ details:
    ```
    DB_HOST=db
    DB_PORT=5432
    DB_USERNAME=postgres
    DB_PASSWORD=postgres
    DB_DATABASE=postgres

    RABBITMQ_USER=admin
    RABBITMQ_PASSWORD=admin
    RABBITMQ_HOST=localhost:5672
    RABBITMQ_QUEUE_NAME=card-queue
    ```

Feel free to adjust the values of these variables as needed.

## How to Launch

This project is containerized using Docker, ensuring easy setup and consistency across different environments. Follow these steps to get started:

1. Ensure Docker and Docker Compose are installed on your system.
2. Clone this repository to your local machine.
3. Navigate to the project directory in your terminal.
4. Run the following command to start the application:
    ```
    docker-compose up
    ```

If you make any modifications to the code and wish to restart the application, it's recommended to delete the `pgdata` folder in the `server` directory before running `docker-compose up` again.

## How to Use the Project

The project serves as a simple API for performing CRUD operations on a todo list's cards. Once the application is running, you can interact with it using HTTP requests. Here's a brief overview of the available endpoints:

- **Create**: Use an HTTP POST request to add a new card to the todo list.
- **Read**: Use an HTTP GET request to retrieve information about the cards in the todo list.
- **Update**: Use an HTTP PUT or PATCH request to modify the details of a specific card.
- **Delete**: Use an HTTP DELETE request to remove a card from the todo list.

Feel free to explore and interact with the API according to your needs. You have a postman file in the server folder named Todo list.postman_collection.

## Contributors

This project is maintained by lapprenti18. If you encounter any issues or have suggestions for improvement, please feel free to open an issue or pull request on the GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it according to the terms of the license.