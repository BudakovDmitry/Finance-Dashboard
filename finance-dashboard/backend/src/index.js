import express from "express";
import mongoose from "mongoose";
import goalRouter from "./routes/goalRouter.js";

const PORT = 5000;
const DB_URL =
    "mongodb+srv://budakovdmitry:budakovdmitry@cluster0.04cw0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const app = express();

app.use(express.json());
app.use("/api", goalRouter);

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT));
        console.log("MongoDB Connected...");
    } catch (error) {
        console.log(error);
    }
}

startApp();
