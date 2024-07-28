import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import DashboardElement from "../components/ui/DashboardElement";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8000/manager/login", { name, password });
      if (response.status !== 200) throw new Error("Login failed");
      console.log(response.data);
      navigate('/home');
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div>ini login page</div>
  );
}