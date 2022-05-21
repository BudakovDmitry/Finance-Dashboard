import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import AppRouter from './routes/index.js';

const PORT = 5000;
const DB_URL =
  'mongodb+srv://budakovdmitry:budakovdmitry@cluster0.04cw0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const app = express();
const router = new AppRouter(app);
app.use(cors())
app.set('port', process.env.PORT || 5000);
app.use(express.json());

router.init();

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT));
    console.log('MongoDB Connected...');
  } catch (error) {
    console.log(error);
  }
}

startApp();
