import axios from "axios";
import api from "./api";

const API_URL = "http://localhost:5000/api/auth";

export const registerUser = async (userData) => {
    const response = await axios.post(
        `${API_URL}/register`,
        userData
    );

    return response.data;
};

export const loginUser = async (loginData) => {
    const response = await axios.post(
        `${API_URL}/login`,
        loginData
    );

    return response.data;
};

export const getCurrentUser = async () => {
    const response = await api.get("/auth/me");

    return response.data;
};