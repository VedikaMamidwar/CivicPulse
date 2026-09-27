import api from "./api";

export const getVerificationSummary = async (problemId) => {
    const response = await api.get(
        `/verifications/${problemId}/summary`
    );

    return response.data;
};