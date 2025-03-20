import { Navigate, Outlet } from "react-router";
import { useAuth } from "./contexts/AuthContext";

export const ProtectedRoute = ({
  isAllowed,
  redirectPath = "/login",
}: {
  isAllowed?: boolean;
  redirectPath?: string;
}) => {
  const { user } = useAuth();

  if (!user || !isAllowed) {
    console.log("redirecting to", redirectPath);
    return <Navigate to={redirectPath} />;
  }
  return <Outlet />;
};
