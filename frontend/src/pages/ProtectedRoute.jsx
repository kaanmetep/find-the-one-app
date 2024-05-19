import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated, onSetIsAuthenticated } = useAuth();
  useEffect(
    function () {
      if (localStorage.getItem("jwt")) {
        onSetIsAuthenticated(true);
      } else if (!isAuthenticated) {
        navigate("/");
      }
    },
    [navigate, onSetIsAuthenticated, isAuthenticated]
  );
  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
