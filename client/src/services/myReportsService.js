import api from "./api";

export const getMyReports = async () => {
    const response = await api.get("/problems/my-reports");

    return response.data;
};