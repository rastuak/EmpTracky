import axios from "axios";
import { useEffect, useState } from "react";
import DashboardElement from "../components/ui/DashboardElement";
import bg from "../assets/images/bgHome.svg"

export default function HomePage() {
  const [data, setData] = useState([]);
  const handleHomePage = async () => {
    try {
      const response = await axios.post("http://localhost:8000/employee/get");
      console.log(response.data);

      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleHomePage();
  }, []);

  return (
    <DashboardElement>
      <div className="w-full h-full">
       <h1>ini home page</h1>
      </div>
    </DashboardElement>
  );
}