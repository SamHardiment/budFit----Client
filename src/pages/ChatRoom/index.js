
import React from "react";
import { useAuthContext } from "../../auth/index";


export const ChatRoom = () => {
  const { logout } = useAuthContext();
  // const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    // navigate("/");
  };

  return (
    <> 
    <h1>hello </h1>
      <input className="logout-btn" type="submit" onClick={handleLogout} value="Logout" />
    </>
  );
};