import { createContext, useContext, useEffect, useState } from "react";
import {
    loginUser,
    getCurrentUser,
} from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const verifyUser = async () => {
            const storedToken =
                localStorage.getItem("civicPulseToken");

            if (!storedToken) {
                setLoading(false);
                return;
            }

            try {
                const data = await getCurrentUser();
                setToken(storedToken);
                setUser(data.user);

                localStorage.setItem(
                    "civicPulseUser",
                    JSON.stringify(data.user)
                );
            } catch (error) {
                console.error(
                    "Authentication verification failed:",
                    error
                );

                localStorage.removeItem("civicPulseToken");
                localStorage.removeItem("civicPulseUser");

                setToken(null);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        verifyUser();
    }, []);

    const login = async (loginData) => {
        const data = await loginUser(loginData);

        localStorage.setItem(
            "civicPulseToken",
            data.token
        );

        localStorage.setItem(
            "civicPulseUser",
            JSON.stringify(data.user)
        );

        setToken(data.token);
        setUser(data.user);

        return data;
    };

    const logout = () => {
        localStorage.removeItem("civicPulseToken");
        localStorage.removeItem("civicPulseUser");

        setToken(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                loading,
                login,
                logout,
                isAuthenticated: !!token,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};