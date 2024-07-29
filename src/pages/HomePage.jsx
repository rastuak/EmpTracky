import { FunnelSimple, MagnifyingGlass, Plus } from "@phosphor-icons/react";
import axios from "axios";
import { useEffect, useState } from "react";
import DashboardElement from "../components/ui/DashboardElement";

export default function HomePage() {
  // const [data, setData] = useState([]);
  // const handleHomePage = async () => {
  //   try {
  //     const response = await axios.post("http://localhost:8000/employee/get");
  //     console.log(response.data);

  //     setData(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   handleHomePage();
  // }, []);

  return (
    <DashboardElement>
      <div className="flex-col w-full h-[15%] bg-home rounded-t-[10px] px-14 pt-5 pb-3 ">
        <div className="flex justify-end gap-4">
          <div className="h-[44px] w-[44px] bg-white rounded-[12px] group hover:bg-emptracky-blue transition-all duration-200 hover:cursor-pointer">
            <Plus size={42} className="text-emptracky-blue group-hover:text-white transition-all duration-200" />
          </div>
          <div className="w-full h-[44px] relative">
            <MagnifyingGlass size={40} className="text-emptracky-blue absolute right-3 hover:cursor-pointer" />
            <input placeholder="Search employee name..." className="w-full h-[44px] rounded-[12px] pl-3 pr-4 focus:outline-emptracky-blue" />
          </div>
        </div>
        <div className="flex justify-end gap-1">
          <FunnelSimple size={42} className="text-white" />
          <div className='flex justify-end items-center w-[7%]'>
            <select className="w-full h-[70%] rounded-md text-[#807F7F] hover:bg-gray-200 transition-all duration-200 focus:outline-none hover:cursor-pointer">
              <option value="">Sort by.....</option>
              <option value="name">by name</option>
              <option value="division">by division</option>
              <option value="contract">by contract</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex-col px-14 pt-8 pb-3 max-h-[83%] overflow-y-auto ">
        {
          datas?.map((data, index) => {
            return (
              <div key={index} className="flex justify-between w-full h-14 bg-emptracky-f7 border border-emptracky-darkgray rounded-[15px] mb-6 px-4 hover:border-emptracky-blue hover:text-emptracky-blue hover:cursor-pointer transition-all duration-200">
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

const datas = [
  {
    name: "Kautsar Faradika Faisal",
    division: "Software",
    contract: 2029
  },
  {
    name: "Kautsar Faradika Faisal",
    division: "Software",
    contract: 2029
  },
  {
    name: "Kautsar Faradika Faisal",
    division: "Software",
    contract: 2029
  },
  {
    name: "Kautsar Faradika Faisal",
    division: "Software",
    contract: 2029
  },
  {
    name: "Kautsar Faradika Faisal",
    division: "Software",
    contract: 2029
  },
  {
    name: "Kautsar Faradika Faisal",
    division: "Software",
    contract: 2029
  },
  {
    name: "Kautsar Faradika Faisal",
    division: "Software",
    contract: 2029
  },
  {
    name: "Kautsar Faradika Faisal",
    division: "Software",
    contract: 2029
  },
  {
    name: "Kautsar Faradika Faisal",
    division: "Software",
    contract: 2029
  },

]