import api from "./api";

export const verifyProblem = async (problemId, vote) => {
    const response = await api.post(
        `/verifications/${problemId}`,
        { vote }
    );

    return response.data;
};