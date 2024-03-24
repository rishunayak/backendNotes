import express from 'express';
import dotenv from "dotenv";
import connectToMongoDb from './db/connectToMongoDb.js';
import authRoutes from "./routes/auth.route.js";
import notesRoutes from "./routes/notes.route.js"
import cookieParser from 'cookie-parser';
import rateLimit  from "express-rate-limit"
import slowDown  from "express-slow-down"
import { auth } from './middleware/auth.js';


const app = express();

dotenv.config();

app.use(express.json());
app.use(cookieParser());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 100 
  });

  const speedLimiter = slowDown({
    windowMs: 15 * 60 * 1000, 
    delayAfter: 100, 
    delayMs: 500 
  });


app.use(limiter);
app.use(speedLimiter);
app.use("/api/auth",authRoutes);
app.use(auth)
app.use('/api/notes',notesRoutes)


app.listen(8080,()=>
{
    connectToMongoDb();
    console.log("server is runing on server 8080");
})