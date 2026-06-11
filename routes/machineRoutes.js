import express from "express";
import { getMachinePerformance , getMachineStatusList } from "../controller/machineController.js";

const router = express.Router();

router.get(
  "/machine Performance",
  getMachinePerformance
);

router.get("/machine List", getMachineStatusList);

export default router;