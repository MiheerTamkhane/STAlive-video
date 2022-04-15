import { Navigate } from "react-router-dom";
import { useAuth } from "../index";
function ProtectedRoute({ children }) {
  const { auth } = useAuth();
  return auth.status ? children : <Navigate to="/signin" replace />;
}

export { ProtectedRoute };
