import { FunnelSimple, MagnifyingGlass, Plus } from "@phosphor-icons/react";
import axios from "axios";
import Cookies from 'js-cookie';
import { useEffect, useState } from "react";
import DashboardElement from "../components/ui/DashboardElement";
import { useNavigate } from "react-router-dom";
import SearchBar from './../components/ui/SearchBar';

export default function HomePage() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState("");

  axios.defaults.withCredentials = true;
  
  const handleSort = (sel) => {
    if (sel === "name") {
      data.sort((a, b) => a.name.localeCompare(b.name));
      setData([...data]);
    } else if (sel === "division") {
      data.sort((a, b) => a.division.localeCompare(b.division));
      setData([...data]);
    } else if (sel === "contract") {
      data.sort((a, b) => a.contract - b.contract);
      setData([...data]);
    }
  }

  const handleHomePage = async () => {
    try {
      const uuid = Cookies.get("uuid");
      if(!uuid) {
        navigate('/')
        throw new Error("User not logged in")
      }
      const response = await axios.get(`http://localhost:8000/employee/get/${uuid}`);
      if (response.status !== 200) throw new Error("Failed to get employee data");
      console.log(response.data.sort((a, b) => a.name.localeCompare(b.name)));

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
      <div className="flex-col w-full h-[17%] bg-gradient-to-b from-emptracky-blue to-emptracky-f7 rounded-t-[10px] px-14 pt-5 pb-3 ">
        <div className="flex justify-end gap-4">
          <button onClick={() => navigate("/add-employee")} className="h-[44px] w-[44px] bg-white rounded-[12px] group hover:bg-emptracky-blue transition-all duration-200">
            <Plus size={42} className="text-emptracky-blue group-hover:text-white transition-all duration-200" />
          </button>
          <SearchBar setKeyword={setKeyword} />
        </div>
        <div className="flex justify-end gap-1">
          <FunnelSimple size={42} className="text-white" />
          <div className='flex justify-end items-center w-[7%]'>
            <select onChange={(e) => {handleSort(e.target.value)}} className="w-full h-[70%] rounded-md text-[#807F7F] hover:bg-gray-200 transition-all duration-200 focus:outline-none hover:cursor-pointer">
              <option value="name">Name</option>
              <option value="division">Division</option>
              <option value="contract">Contract</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex-col px-14 pt-8 pb-3 max-h-[81%] overflow-y-auto ">
        {
          data?.filter((data) => data.name.toLowerCase().includes(keyword.toLowerCase())).map((data, index) => {
            return (
              <div key={index} onClick={() => navigate(`/employee/${data.id}`)} className="flex justify-between w-full h-14 bg-emptracky-f7 border border-emptracky-darkgray rounded-[15px] mb-6 px-4 hover:border-emptracky-blue hover:text-emptracky-blue hover:cursor-pointer transition-all duration-200">
                <div className="flex justify-start items-center text-lg max-w-[20%] overflow-hidden">
                  <h1>{data.name}</h1>
                </div>
                <div className="flex h-full max-w-[80%] items-center">
                  <div className="h-full w-48 flex-col overflow-hidden">
                    <h1 className="font-medium">Division:</h1>
                    <p>{data.division}</p>
                  </div>
                  <div className="h-full w-60 flex-col overflow-hidden">
                    <h1 className="font-medium">Contract Expiry Year:</h1>
                    <p>{data.contract}</p>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </DashboardElement>
  );
}