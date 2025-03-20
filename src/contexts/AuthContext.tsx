import React, { createContext, useContext, useState, ReactNode } from "react";

// Define a User interface to type the user information
interface User {
  id: number;
  name: string;
  email: string;
  // Add other user-related fields as needed
}

// Define the shape of our authentication context
interface AuthContextType {
  token: string | null;
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

// Create the context with an undefined default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  // Retrieve initial values from localStorage (if available)
  const storedToken = localStorage.getItem("token");
  const storedUser = localStorage.getItem("user");

  const [token, setToken] = useState<string | null>(storedToken);
  const [user, setUser] = useState<User | null>(
    storedUser ? JSON.parse(storedUser) : null
  );

  const login = async (username: string, password: string) => {
    try {
      // const response = await fetch("/api/login", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ username, password }),
      // });

      // if (!response.ok) {
      //   throw new Error("Login failed");
      // }

      // const data = await response.json();
      console.log("login", username, password);
      const data = {
        token: "123",
        user: { id: 1, name: "Santa Claus", email: "santa@claus.com" },
      };
      // Expecting the API to return a token and user information
      setToken(data.token);
      setUser(data.user);

      // Persist token and user info in local storage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  // Function to handle user logout
  const logout = async () => {
    try {
      // Optionally, notify your backend about the logout
      await fetch("/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("Logout error:", error);
      // Even if the API call fails, continue to clear the state locally
    } finally {
      setToken(null);
      setUser(null);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for easy access to the AuthContext
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
