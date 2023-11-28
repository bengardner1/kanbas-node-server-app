import express from "express";
import Lab5 from "./Lab5.js";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import cors from "cors";
import UserRoutes from "./users/routes.js";
import "dotenv/config";
import mongoose from "mongoose";
import session from "express-session";
mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
const app = express();
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000",}));
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
};
app.use(session(sessionOptions));
         
app.use(express.json());
UserRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
Lab5(app);
app.listen(process.env.PORT || 4000);