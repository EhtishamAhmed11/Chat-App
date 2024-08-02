import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async ({ username, password }) => {
    const success = handleInputErrors({
      username,
      password,
    });
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Login failed");
      }

      const data = await res.json();
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
      toast.success("Login successful");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;

function handleInputErrors({ username, password }) {
  if (!username || !password) {
    toast.error("Please fill all the fields");
    return false;
  }

  return true; // Add this line to ensure it returns true when inputs are valid
}
