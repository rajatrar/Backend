import express from "express";
import mongoose from "mongoose"; // Import mongoose


const app = express();

const DB_NAME = process.env.DB_NAME || "defaultDB";
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017";

(async () => {
    try {
        await mongoose.connect(`${MONGODB_URI}/${DB_NAME}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");

        app.listen(PORT, () => {
            console.log(`App is listening on port ${PORT}`);
        });

    } catch (error) {
        console.log("Error connecting to the database: ", error);
    }
})();

app.on("error", (error) => {
    console.log("Error in the app: ", error);
});
