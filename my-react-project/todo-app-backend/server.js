import express from 'express'
import connectToDatabase from './db.js'
import cors from 'cors'

const app = express()
const port = 3000
let db;

app.use(express.json())
app.use(cors({
    origin: "http://localhost:3001"
}));

app.listen(port, async () => {
    db = await connectToDatabase('todo-project-db')
    console.log(`todo app backend server started at port ${port}`)
})

// ✅ Test API
app.get('/test', (req, res) => {
    res.send('API is up!!')
})

// ✅ Create Todo
app.post('/create-todo', async (req, res) => {
    try {
        let body = req.body;
        await db.collection('todo').insertOne(body);
        res.status(201).json({ msg: "todo inserted successfully" })
    } catch (error) {
        res.status(500).json({ msg: "internal server occur" })
    }
})

// ✅ Read All Todos
app.get('/read-todos', async (req, res) => {
    try {
        let todoList = await db.collection('todo').find().toArray();
        res.status(200).json(todoList)
    } catch (error) {
        res.status(500).json({ msg: "internal server occur" })
    }
})

// ✅ Read Single Todo
app.get('/read-todo', async (req, res) => {
    try {
        let queryTodoId = req.query.todoId;
        let todo = await db.collection('todo').findOne({ 'todoId': queryTodoId })
        res.status(200).json(todo)
    } catch (error) {
        res.status(500).json({
            msg: "internal server occur",
            error: error.message
        })
    }
})

// ✅ Update Todo (PATCH)
app.patch('/update-todo', async (req, res) => {
    try {
        let queryTodoId = req.query.todoId;
        let updatedData = req.body;

        let result = await db.collection('todo').updateOne(
            { 'todoId': queryTodoId },
            { $set: updatedData }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({ msg: "todo not found" });
        }

        res.status(200).json({ msg: "todo updated successfully" })
    } catch (error) {
        res.status(500).json({ msg: "internal server occur" })
    }
})

// ✅ Delete Todo (DELETE)
app.delete('/delete-todo', async (req, res) => {
    try {
        let queryTodoId = req.query.todoId;

        let result = await db.collection('todo').deleteOne({ 'todoId': queryTodoId });

        if (result.deletedCount === 0) {
            return res.status(404).json({ msg: "todo not found" });
        }

        res.status(200).json({ msg: "todo deleted successfully" })
    } catch (error) {
        res.status(500).json({ msg: "internal server occur" })
    }
})
