import PropTypes from "prop-types";
import { useAuth } from "../contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/");
    },
    [isAuthenticated, navigate]
  );

  return isAuthenticated ? children : null;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
