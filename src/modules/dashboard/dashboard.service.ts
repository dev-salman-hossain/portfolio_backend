const getStats = async () => {
    return {
        totalViews: 12450,
        totalProjects: 15,
        totalMessages: 48,
        activeVisitors: 12
    };
};

const getActivities = async () => {
    return [
        { id: 1, action: "New message received", date: new Date().toISOString() },
        { id: 2, action: "Project 'Portfolio' updated", date: new Date(Date.now() - 86400000).toISOString() },
    ];
};

const getChartData = async () => {
    return {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        data: [120, 150, 180, 90, 210, 170, 240]
    };
};

export const DashboardService = {
    getStats,
    getActivities,
    getChartData,
};
