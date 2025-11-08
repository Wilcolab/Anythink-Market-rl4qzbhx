const express = require('express');

const app = express();
const PORT = 8001;
app.use(express.json());

// In-memory tasks array
const tasks = [
    "Write a diary entry from the future",
    "Create a time machine from a cardboard box",
    "Plan a trip to the dinosaurs",
    "Draw a futuristic city",
    "List items to bring on a time-travel adventure"
];

// GET / - Hello World
app.get('/', (req, res) => {
    res.send('Hello World');
});

// POST /tasks - Add a task
app.post('/tasks', (req, res) => {
    const { text } = req.body;
    if (!text || typeof text !== 'string') {
        return res.status(400).json({ message: 'Task text is required' });
    }
    tasks.push(text);
    res.json({ message: 'Task added successfully' });
});

// GET /tasks - Get all tasks
app.get('/tasks', (req, res) => {
    res.json({ tasks });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});