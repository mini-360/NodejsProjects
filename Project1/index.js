import express from "express";
import { connectMongoDB } from "./connection.js";
import { logReqRes } from "./middlewares/logReqResMiddleware.js";

import userRouter from "./routes/user.route.js";
const app = express();

const port = 8000;

//Connection
connectMongoDB("mongodb://127.0.0.1:27017/project1").then(()=>console.log("MongoDB connected"));
// Middleware
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  console.log("Hello from middleware 1");
  next();
});

app.use(logReqRes("log.txt"))
app.use("/api/users", userRouter);
app.listen(port, () => console.log("Server started"));
