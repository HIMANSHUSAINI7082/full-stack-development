import { MongoClient } from "mongodb";

let isDbConnected = null;

const CLUSTER_URL = "mongodb+srv://himanshu:admin@cluster0.kmyjofn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(CLUSTER_URL);

async function connectToDatabase(dbName) {
    try {
        if (isDbConnected == null) {
            await client.connect();
            isDbConnected = client.db(dbName);
            console.log("Database connected successfully");
        } else {
            console.log(" Database already connected");
        }
    } catch (e) {
        console.error(` Database connection error: ${e.message}`);
    }

    return isDbConnected;
} 

export default connectToDatabase;
