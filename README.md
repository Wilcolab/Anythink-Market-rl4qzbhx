
# Task List Server Migration: Python → Node.js

This project originally contained a FastAPI server implemented in Python for managing a simple task list. The backend has now been migrated to a Node.js Express server for improved scalability and performance.

## Project Structure

- `python-server/`: Legacy FastAPI server (Python)
- `javascript-express-server/`: New Node.js Express server
- `docker-compose.yml`: Runs both servers for migration/testing

## Running Both Servers

To run both the Python and Node.js servers using Docker Compose:

```shell
docker compose up --build
```

This will start:
- Python FastAPI server on port **8000**
- Node.js Express server on port **8001**

## API Routes (Node.js Express)

- `GET /` — Returns "Hello World"
- `GET /tasks` — Retrieves the task list
- `POST /tasks` — Adds a task to the list (expects `{ "text": "your task" }` in JSON body)

## Migration Details

- All endpoints and logic from the Python FastAPI server have been ported to the Node.js Express server.
- The Python server is still available for reference and comparison.

## Example Usage

Add a new task:
```shell
curl -X POST -H "Content-Type: application/json" -d '{"text": "My new task"}' http://localhost:8001/tasks
```

Get all tasks:
```shell
curl http://localhost:8001/tasks
```

---

For legacy FastAPI (Python) usage, see the original instructions below:

---

# Python Server (Legacy)

This project contains a FastAPI server implemented in Python. It provides two routes for managing a task list.

## Project Structure

- `python-server/src/main.py`: FastAPI server implementation
- `python-server/src/__init__.py`: Marks the `src` directory as a Python package
- `python-server/requirements.txt`: Python dependencies
- `python-server/Dockerfile`: Docker image for FastAPI server
- `docker-compose.yml`: Multi-container orchestration

## Getting Started (Python)

To run the FastAPI server using Docker:

```shell
docker compose up --build
```

The FastAPI server will be available at port `8000`.

## API Routes (Python)

- `POST /tasks`: Adds a task to the task list. The request body should contain the task details.
- `GET /tasks`: Retrieves the task list.
