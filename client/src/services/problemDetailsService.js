import api from "./api";

export const getProblemById = async (id) => {
    const response = await api.get(`/problems/${id}`);

    return response.data;
};