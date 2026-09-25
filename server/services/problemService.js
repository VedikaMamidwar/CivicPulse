import api from "./api";

export const createProblem = async (problemData) => {
    const response = await api.post("/problems", problemData);

    return response.data;
};