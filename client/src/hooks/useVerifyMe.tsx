import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { backend } from "../utils/backend";

interface AuthContextType {
    isAuthenticated: boolean;
    logout: () => void;
    verifyUser: () => Promise<void>;
    checkState : () => void;
}

const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    logout: () => {},
    verifyUser: async () => {},
    checkState : () => {}
});

export const AuthProvider = ({ children } : any) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(localStorage.getItem("token") ? true : false);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        console.log("logged out");
        navigate("/signin");
    }

    const checkState = () => {
        const token = localStorage.getItem("token");
        if (token) {
            verifyUser();
        }
    }

    const verifyUser = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/signin");
            return;
        }
        
        try {
            const response = await axios.post(backend + "/users/verify" , { token });
            if (response.data.success) {
                setIsAuthenticated(true);
            } else {
                localStorage.removeItem("token");
                setIsAuthenticated(false);
                navigate("/signin"); 
            }
        } catch (error) {
            localStorage.removeItem("token");
            setIsAuthenticated(false);
            navigate("/signin");
        }
    };

    return (
        <AuthContext.Provider value={{
            isAuthenticated , logout, verifyUser , checkState
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useVerifyMe = () => useContext(AuthContext);
