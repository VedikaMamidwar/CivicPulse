import api from "./api";

export const getAllProblems = async () => {
    const response = await api.get("/problems");

    return response.data;
};