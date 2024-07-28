import axios from "axios";
import { useEffect, useState } from "react";
import DashboardElement from "../components/ui/DashboardElement";

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
    <div className="bg-[#CED1DA] flex">

      <DashboardElement />

      <div className="bg-[#798DC5] w-screen min-h-screen m-auto flex-1">
        <ol className="overflow-auto w-full">
          {data.map((employee, index) => (
            <li
              key={index}
              className="text-white text-[20px] p-3 flex flex-col bg-[#737CCF] m-2 rounded-2xl"
            >
              <p>{employee.name}</p>
              <p>{employee.division}</p>
              <p>{employee.salary}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}