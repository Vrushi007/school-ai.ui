import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import {
  API_AUTH_URL,
  makePostRequest,
  makeAuthenticatedGetRequest,
  makeAuthenticatedPostRequest,
} from "../services/baseService";

export interface User {
  id: number;
  email: string;
  username: string;
  fullName: string;
  isActive: boolean;
  isVerified: boolean;
  roleId: number;
  organizationId?: number;
  role: {
    id: number;
    name: string;
    description: string;
  };
  organization?: {
    id: number;
    name: string;
    code: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isCheckingAuth: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (
    email: string,
    username: string,
    password: string,
    fullName: string,
    roleId?: number,
  ) => Promise<{ success: boolean; message?: string }>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
  error: string | null;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Check if user is already logged in on mount
  const checkAuth = useCallback(async () => {
    try {
      setIsCheckingAuth(true);
      const token = localStorage.getItem("access_token");
      if (!token) {
        setIsCheckingAuth(false);
        return;
      }

      // Verify token by calling /users/me
      const userData = await makeAuthenticatedGetRequest<User>(
        `${API_AUTH_URL}/users/me`,
      );
      setUser(userData);
    } catch (err) {
      console.error("Auth check failed:", err);
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      setUser(null);
    } finally {
      setIsCheckingAuth(false);
    }
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      setError(null);
      setIsLoading(true);

      const tokens = (await makePostRequest(`${API_AUTH_URL}/auth/login`, {
        email,
        password,
      })) as AuthTokens;

      localStorage.setItem("access_token", tokens.accessToken);
      localStorage.setItem("refresh_token", tokens.refreshToken);

      // Fetch user data
      await checkAuth();
      return true;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Login error";
      setError(errorMessage);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (
    email: string,
    username: string,
    password: string,
    fullName: string,
    roleId: number = 3, // Default to teacher role
  ): Promise<{ success: boolean; message?: string }> => {
    try {
      setError(null);
      setIsLoading(true);

      const response: any = await makePostRequest(
        `${API_AUTH_URL}/auth/register`,
        {
          email,
          username,
          password,
          fullName,
          roleId,
        },
      );

      // Registration successful but account needs activation
      // Don't auto-login since account is inactive
      return {
        success: true,
        message:
          response.message ||
          "Registration successful! Your account is pending approval by an administrator.",
      };
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Registration error";
      setError(errorMessage);
      return { success: false };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem("access_token");

      if (token) {
        await makeAuthenticatedPostRequest(
          `${API_AUTH_URL}/auth/logout`,
          undefined,
        );
      }

      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      setUser(null);
      setError(null);
    } catch (err) {
      console.error("Logout error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const clearError = () => setError(null);

  const value: AuthContextType = {
    user,
    isLoading,
    isCheckingAuth,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    checkAuth,
    error,
    clearError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
