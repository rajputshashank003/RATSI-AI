import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/user/user.routes.js";
import tutorRoutes from "./routes/tutor/tutor.routes.js";

dotenv.config();

const app = express();
app.use(cors({credentials: true , origin: '*'}));
app.use(express.json());

app.get("/" , (req, res) => {
    res.status(200).json({
        "success" : "true",
        "data" : "endpoint working"
    })
})

// app.use("/users" , userRoutes);
// app.use("/tutor", tutorRoutes);

app.listen(8000, () => {
    console.log("Server running on 8000");
});

export default app;