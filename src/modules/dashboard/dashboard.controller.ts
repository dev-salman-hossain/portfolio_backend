import { Request, Response } from "express";
import { DashboardService } from "./dashboard.service.js";

const getStats = async (req: Request, res: Response) => {
    try {
        const result = await DashboardService.getStats();
        res.status(200).json({
            success: true,
            message: "Dashboard stats fetched successfully",
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch dashboard stats",
            error,
        });
    }
};

const getActivities = async (req: Request, res: Response) => {
    try {
        const result = await DashboardService.getActivities();
        res.status(200).json({
            success: true,
            message: "Recent activities fetched successfully",
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch activities",
            error,
        });
    }
};

const getChartData = async (req: Request, res: Response) => {
    try {
        const result = await DashboardService.getChartData();
        res.status(200).json({
            success: true,
            message: "Chart data fetched successfully",
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch chart data",
            error,
        });
    }
};

export const DashboardController = {
    getStats,
    getActivities,
    getChartData,
};
