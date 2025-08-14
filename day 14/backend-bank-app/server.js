import express from 'express';
import connectToDatabase from './db.js';

const app = express();
const port = 3000;

app.use(express.json());
let db;

// Test API
app.get('/test-api', (req, res) => {
    res.send('Bank API is running');
});

// API 1: Insert Account in Database
app.post('/create-account', async (req, res) => {
    try {
        const userAccountData = req.body;
        console.log(`Request body: ${JSON.stringify(userAccountData)}`);

        // Get DB instance
        const db = await connectToDatabase('bank-db');

        // Insert data into "account" collection
        await db.collection('account').insertOne(userAccountData);

        res.status(201).json({
            msg: 'Account inserted successfully'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: error.message
        });
    }
});

// Start the server
async function startServer() {
    try {
        // Just ensure DB connection works at startup
        await connectToDatabase('bank-db');
        console.log('Database connected!');

        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    } catch (error) {
        console.error(`Failed to start server: ${error.message}`);
        process.exit(1);
    }
}

startServer();
