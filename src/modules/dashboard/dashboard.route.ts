import { Router } from "express";
import { DashboardController } from "./dashboard.controller.js";

const router = Router();

router.get("/stats", DashboardController.getStats);
router.get("/activities", DashboardController.getActivities);
router.get("/chart", DashboardController.getChartData);

export const DashboardRoutes = router;
