import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import { useEffect } from "react";

export const useLogout = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken();
    navigate("/", { replace: true });
  };

  return { handleLogout };
};

const Logout = () => {
  const { handleLogout } = useLogout();

  useEffect(() => {
    handleLogout();
  }, [handleLogout]);

  return <>Logout Page</>;
};

export default Logout;
