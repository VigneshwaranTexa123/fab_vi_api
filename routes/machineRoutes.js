import express from "express";
import { getMachinePerformance } from "../controller/machineController.js";

const router = express.Router();

router.get(
  "/machine-performance/:machine_no",
  getMachinePerformance
);

export default router;