import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../index";
function ProtectedRoute({ children }) {
  const {
    auth: { status },
  } = useAuth();
  const location = useLocation();
  return status ? (
    children
  ) : (
    <Navigate to="/join" state={{ from: location }} replace />
  );
}

export { ProtectedRoute };
