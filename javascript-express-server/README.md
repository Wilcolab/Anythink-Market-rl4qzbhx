# JavaScript Express Server

This project is a simple Express server that listens on port 8001. It is set up to use `nodemon` for automatic code reloading during development.

## Project Structure

```
javascript-express-server
├── .gitignore
├── Dockerfile
├── README.md
├── package.json
├── src
│   └── server.js
└── yarn.lock
```

## Getting Started

To get started with this project, follow these steps:

### Prerequisites

Make sure you have `Node.js` and `Yarn` installed on your machine.

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd javascript-express-server
   ```

2. Install the dependencies:
   ```
   yarn install
   ```

### Running the Server

To start the server with automatic reloading, use the following command:

```
yarn start
```

The server will be running on `http://localhost:8001`.

### Building the Docker Image

To build the Docker image for the Express server, run:

```
docker build -t javascript-express-server .
```

### Running the Docker Container

After building the image, you can run the container with:

```
docker run -p 8001:8001 javascript-express-server
```

The server will be accessible at `http://localhost:8001` from your host machine.

## License

This project is licensed under the MIT License.