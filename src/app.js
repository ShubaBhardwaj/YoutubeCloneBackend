import express from "express";
import cors from "cors";

const app = express();

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true
    })
)

// common middleware
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended: true,limit:"16kb"}))
app.use(express.static("public"))

// Importing routes
import  healthCheckRouter  from "./routes/healthCheck.routes.js";

// Mounting routes

app.use("/api/v1/healthcheck",healthCheckRouter);

export {app};

export default app;