import express from "express";
import cors from "cors";

import machineRoutes from "./routes/machineRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", machineRoutes);

app.listen(5000, () => {
    console.log("Server Running On Port 5000");
});