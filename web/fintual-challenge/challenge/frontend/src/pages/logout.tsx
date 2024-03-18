import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "~/helpers/authContext";
import axiosInstance from "~/helpers/axiosHelper";

const LogoutRoute = () => {
  const router = useRouter();
  const { logout } = useAuth();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        const refresh_token = localStorage.getItem("refresh_token");

        if (refresh_token) {
          await axiosInstance.post("/api/logout", { refresh_token });
        } else {
          console.log("Refresh token not found.");
        }
      } catch (error) {
        console.log("Error logging out:", error);
      }
      void logout();
      void router.push("/");
    };

    void handleLogout();
  }, [logout, router]);

  return <div>Logging out... Redirecting to home.</div>;
};

export default LogoutRoute;
