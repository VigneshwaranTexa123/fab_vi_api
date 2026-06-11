import express from "express";
import { getMachinePerformance , getMachineStatusList } from "../controller/machineController.js";


const router = express.Router();

router.get(
  "/machine-performance/:machine_no",
  getMachinePerformance
);

router.get("/machine-status-list", getMachineStatusList);

export default router;