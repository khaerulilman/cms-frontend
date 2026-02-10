"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { api } from "@/lib/api";

interface User {
  id: string;
  email: string;
  name?: string;
  [key: string]: any;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  isLoading: boolean;
  login: (user: User) => void;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check authentication on mount
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      // First check local storage for user data (for quick UI update)
      if (typeof window !== "undefined") {
        const userData = localStorage.getItem("user");
        if (userData) {
          try {
            const parsedUser = JSON.parse(userData);
            setUser(parsedUser);
            setIsAuthenticated(true);
          } catch (error) {
            console.error("Failed to parse user data:", error);
          }
        }
      }

      // Then verify with backend using cookie
      const response = await api.getProfile();
      if (response.success && response.data) {
        setUser(response.data);
        setIsAuthenticated(true);
        // Update local storage with fresh data
        if (typeof window !== "undefined") {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
      }
    } catch (error) {
      // Token might be invalid or expired, try refresh
      try {
        await api.refreshToken();
        // If refresh succeeds, try to get profile again
        const response = await api.getProfile();
        if (response.success && response.data) {
          setUser(response.data);
          setIsAuthenticated(true);
          if (typeof window !== "undefined") {
            localStorage.setItem("user", JSON.stringify(response.data));
          }
        }
      } catch (refreshError) {
        // Both access and refresh tokens are invalid
        setIsAuthenticated(false);
        setUser(null);
        if (typeof window !== "undefined") {
          localStorage.removeItem("user");
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  const login = (userData: User) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("user", JSON.stringify(userData));
    }
    setUser(userData);
    setIsAuthenticated(true);
  };

  const logout = async () => {
    try {
      await api.logout();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      if (typeof window !== "undefined") {
        localStorage.removeItem("user");
      }
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        isLoading,
        login,
        logout,
        checkAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
